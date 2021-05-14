import "./nav.scss"

import { Link } from 'react-router-dom'
import React from 'react'

function Nav({ state, dispatch }) {
    return (
        <nav>
            <Link to="/">Covid Vaccine Tracker</Link>
            {state.isAuth && <span className="button" onClick={_ => dispatch({ type: "LOGOUT" })}>LOGOUT</span>}
        </nav>
    )
}

export default Nav
