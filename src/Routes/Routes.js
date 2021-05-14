import React, { useEffect, useReducer } from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import AuthenticatedHome from "../pages/AuthenticatedHome/AuthenticatedHome";
import Home from "../pages/Home/home";
import Nav from "../components/Nav/nav";
import NotFound from "../pages/NotFound/NotFound";
import Results from "../pages/results";
import moment from "moment";

function Routes() {
    const initialState = {
        isAuth: false,
        authToken: null,
    };

    const reducer = (state, action) => {
        let payload = {}
        switch (action.type) {
            case "LOGIN":
                payload = {
                    ...action.payload,
                    isAuth: true,
                    time: moment().format()
                }
                localStorage.setItem("authPayload", JSON.stringify(payload))
                return payload
            case "RECONNECT":
                payload = {
                    ...action.payload,
                    isAuth: true,
                    time: moment().format()
                }
                localStorage.setItem("authPayload", JSON.stringify(payload))
                return payload
            case "LOGOUT":
                localStorage.clear()
                return initialState
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        JSON.parse(localStorage.getItem("authPayload")) !== null && dispatch({ type: "RECONNECT", payload: JSON.parse(localStorage.getItem("authPayload")) })
    }, [])

    return (
        <Router>
            <Nav state={state} dispatch={dispatch} />
            <Switch>
                <Route path="/results" component={Results} />
                <Route path="/"  >
                    {!state.isAuth ? <Home dispatch={dispatch} /> : <AuthenticatedHome state={state} dispatch={dispatch} />}
                </Route>
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes
