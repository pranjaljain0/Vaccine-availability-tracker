import "./Footer.scss"

import { Link } from "react-router-dom"
import React from 'react'

function Footer() {
    return (
        <footer>
            <Link to="https://github.com/pranjaljain0/Vaccine-availability-tracker">Open Sourced</Link>
            <span>We stand with everyone fighting on the frontlines.</span>
        </footer>
    )
}

export default Footer
