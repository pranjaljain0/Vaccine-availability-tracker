import "./nav.scss"

import React, { useEffect, useState } from 'react'
import { generateMobileOTP, states, validateMobileOtp } from "../../config/API"

import { Link } from 'react-router-dom'
import axios from "axios"
import { sha256 } from "js-sha256"

function Nav({ state, dispatch }) {

    const [OTP, setOTP] = useState("")
    const [TxnID, setTxnID] = useState(null)
    const [showOTPInput, setShowOTPInput] = useState(false)
    let localStoreData = JSON.parse(localStorage.getItem("authPayload"))

    const resendOTP = async () => {
        const body = {
            mobile: localStoreData.mobile,
            secret: "U2FsdGVkX1+VF0ZZvTlIrDxM2nqg8ZeUhjCautCnBVsveD1fGzSy0ysl0aqqm3H+MMsQLiNaacWTaivD3SBo7g=="
        }
        axios.post(generateMobileOTP, body).then(e => {
            setTxnID(e.data.txnId)
            setShowOTPInput(true)
        })
    }

    const verifyOTP = async () => {
        const body = {
            otp: sha256(OTP),
            txnId: TxnID
        }
        axios.post(validateMobileOtp, body).then(e => {
            dispatch({ type: "LOGIN", payload: { ...e.data, mobile: localStoreData.mobile } })
            window.location.reload();
        })
    }

    return (<>
        <nav>
            <Link to="/">Covid Vaccine Tracker</Link>
            {state.isAuth && <span className="button" onClick={_ => dispatch({ type: "LOGOUT" })}>LOGOUT</span>}
        </nav>
        {state.hasDisconnected === true && <div className="notification">
            <div className="sendOTP">
                Seems like your token is expired Re enter OTP to try Again
            <span onClick={() => resendOTP()}>Re-send</span>
            </div>
            {showOTPInput && <div className="enteOTP">
                <input type="text"
                    value={OTP}
                    onChange={(e) => {
                        setOTP(e.target.value.replace(/\D/, ''))
                    }} ></input>
                <span onClick={() => verifyOTP()}>Verify</span>
            </div>}
        </div>}
    </>)
}

export default Nav
