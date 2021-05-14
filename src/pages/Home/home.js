import "./home.scss"

import React, { useState } from 'react'
import { generateMobileOTP, validateMobileOtp } from "../../config/API"

import { AiOutlineArrowRight } from "react-icons/ai"
import axios from "axios"
import classNames from "classnames"
import { sha256 } from "js-sha256"

function Home({ state, dispatch }) {
    const [mobile, setMobile] = useState("")
    const [txnID, setTxnID] = useState(null)
    const [OTP, setOTP] = useState("")

    const callForOTP = async () => {
        const body = {
            mobile: mobile,
            secret: "U2FsdGVkX1+VF0ZZvTlIrDxM2nqg8ZeUhjCautCnBVsveD1fGzSy0ysl0aqqm3H+MMsQLiNaacWTaivD3SBo7g=="
        }
        axios.post(generateMobileOTP, body).then(e => {
            setTxnID(e.data.txnId)
        })
    }

    const verifyOTP = async () => {
        const body = {
            otp: sha256(OTP),
            txnId: txnID
        }
        axios.post(validateMobileOtp, body).then(e => {
            dispatch({ type: "LOGIN", payload: { ...e.data, mobile: mobile } })
        })
    }

    return (<div className="container-min">
        <h2>Check your nearest vaccination center and slots availability.</h2>
        <span>Enter your number</span>
        <div className="inputContainer">
            <input type="text" placeholder="+91 XXXXX XXXXX"
                value={mobile}
                onChange={(e) => {
                    setMobile(e.target.value.replace(/\D/, ''))
                }} disabled={txnID === null ? false : true}></input>
            <div className={classNames("nextIconContainer", txnID !== null && "IconDisabled")} onClick={_ => callForOTP()}>
                <AiOutlineArrowRight className="nextIcon" />
            </div>

        </div>
        {txnID !== null && <div className="inputContainer">
            <input type="text" placeholder="_ _ _ _ _ _"
                value={OTP}
                onChange={(e) => {
                    setOTP(e.target.value.replace(/\D/, ''))
                }} ></input>
            <div className="nextIconContainer" onClick={_ => verifyOTP()}>
                <AiOutlineArrowRight className="nextIcon" />
            </div>
        </div>}
    </div>)
}

export default Home