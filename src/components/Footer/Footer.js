import "./Footer.scss"

import { FaTelegramPlane } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"
import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="top">
                <a target="_blank" rel="noreferrer" href="https://github.com/pranjaljain0/Vaccine-availability-tracker">Open Source</a>
                <div className="rightIcons">
                    <a href="mailto: hello@pranjaljain.me"><FiMail /></a>
                    <a target="_blank" rel="noreferrer" href="https://t.me/covidvaccinetrack"><FaTelegramPlane /></a>
                </div>
            </div>
            <div className="bottom">
                <span>We stand with everyone fighting on the frontlines.</span>
            </div>
        </footer>
    )
}

export default Footer
