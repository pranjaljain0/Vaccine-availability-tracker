import React, { useEffect, useReducer } from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import AuthenticatedHome from "../pages/AuthenticatedHome/AuthenticatedHome";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/home";
import Nav from "../components/Nav/nav";
import NotFound from "../pages/NotFound/NotFound";
import Results from "../pages/results";
import axios from "axios";
import { beneficiaries } from "../config/API";
import moment from "moment";

function Routes() {
    const initialState = {
        isAuth: false,
        authToken: null,
        hasDisconnected: false
    };

    const reducer = (state, action) => {
        let payload = {}
        switch (action.type) {
            case "INIT":
                payload = {
                    ...action.payload,
                    isAuth: false,
                    time: moment().format(),
                    hasDisconnected: false
                }
                return payload
            case "LOGIN":
                payload = {
                    ...action.payload,
                    isAuth: true,
                    time: moment().format(),
                    hasDisconnected: false
                }
                localStorage.setItem("authPayload", JSON.stringify(payload))
                return payload
            case "LOAD_LOCAL":
                payload = {
                    ...action.payload,
                    isAuth: true,
                    time: moment().format(),
                    hasDisconnected: false
                }
                localStorage.setItem("authPayload", JSON.stringify(payload))
                return payload
            case "HAS_DISCONNECTED":
                payload = {
                    ...action.payload,
                    isAuth: true,
                    time: moment().format(),
                    hasDisconnected: true
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
        let localStoreData = JSON.parse(localStorage.getItem("authPayload"))
        const checkConn = async (token) => {
            let config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
            axios.get(beneficiaries, config).then(e => {

            }).catch(err => {
                dispatch({ type: "HAS_DISCONNECTED", payload: localStoreData })
            })
        }
        // INIT
        localStoreData === null && dispatch({ type: "INIT", payload: localStoreData })
        localStoreData !== null && localStoreData.isAuth === true && dispatch({ type: "LOAD_LOCAL", payload: localStoreData })
        localStoreData !== undefined && localStoreData !== null && localStoreData.token !== undefined && setInterval(() => checkConn(localStoreData.token), 3000)
    }, [])

    return (
        <Router>
            <Nav state={state} dispatch={dispatch} />
            <Footer />
            <Switch>
                <Route path="/"  >
                    {!state.isAuth ? <Home dispatch={dispatch} /> : <AuthenticatedHome state={state} dispatch={dispatch} />}
                </Route>
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes
