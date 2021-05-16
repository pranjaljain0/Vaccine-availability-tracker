import "./Footer.scss"

import { FaTelegramPlane } from "react-icons/fa"
import { Link } from "react-router-dom"
import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="top">
                <Link to="https://github.com/pranjaljain0/Vaccine-availability-tracker">Open Source</Link>
                <Link to="https://t.me/covidvaccinetrack"><FaTelegramPlane /></Link>
            </div>
            <div className="bottom">
                <span>We stand with everyone fighting on the frontlines.</span>
            </div>
        </footer>
    )
}

export default Footer
