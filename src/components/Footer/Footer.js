import "./Footer.scss"

import { FaTelegramPlane } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"
import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="top">
                <Link target="_blank" to="https://github.com/pranjaljain0/Vaccine-availability-tracker">Open Source</Link>
                <div className="rightIcons">
                    <Link to="mailto: hello@pranjaljain.me"><FiMail /></Link>
                    <Link to="https://t.me/covidvaccinetrack"><FaTelegramPlane /></Link>
                </div>
            </div>
            <div className="bottom">
                <span>We stand with everyone fighting on the frontlines.</span>
            </div>
        </footer>
    )
}

export default Footer
