import "./nav.scss"

import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import axios from "axios"
import { states } from "../../config/API"

function Nav({ state, dispatch }) {
    const [hasDisconnected, setHasDisconnected] = useState(false)
    let config = {
        headers: {
            Authorization: `Bearer ${state.token}`,
        }
    }
    const checkStatus = async () => {
        state.isAuth !== null && axios.get(states, config).then(e => {
            setHasDisconnected(false)
        }).catch(err => {
            setHasDisconnected(true)
            console.error(err)
        })
    }
    useEffect(() => {
        setInterval(() => checkStatus(), 5000)
    }, [])
    return (<>
        <nav>
            <Link to="/">Covid Vaccine Tracker</Link>
            {state.isAuth && <span className="button" onClick={_ => dispatch({ type: "LOGOUT" })}>LOGOUT</span>}
        </nav>
        {hasDisconnected && <div className="notification">
            Seems like your token is expired Re enter OTP to try Again
            <span>Re-send</span>
        </div>}
    </>)
}

export default Nav
