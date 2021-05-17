import React, { useEffect, useReducer } from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { authInitialState, authReducer, connInitialState, connReducer } from "../config/Reducers";

import AuthenticatedHome from "../pages/AuthenticatedHome/AuthenticatedHome";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/home";
import Nav from "../components/Nav/nav";
import NotFound from "../pages/NotFound/NotFound";
import axios from "axios";
import { beneficiaries } from "../config/API";

function Routes() {
    const [state, dispatch] = useReducer(authReducer, authInitialState)
    // eslint-disable-next-line no-unused-vars
    const [connState, connDispatch] = useReducer(connReducer, connInitialState)

    useEffect(() => {
        let localStoreData = JSON.parse(localStorage.getItem("authPayload"))
        const checkConn = async (token) => {
            let config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
            axios.get(beneficiaries, config).then(e => {
                connDispatch({ type: "CONNECTED", payload: { isConnected: true } })
            }).catch(err => {
                connDispatch({ type: "CONNECTED", payload: { isConnected: false } })
            })
        }
        // INIT
        localStoreData !== undefined && localStoreData !== null && localStoreData.token !== undefined && setInterval(() => checkConn(localStoreData.token), 3000)
    }, [])

    return (
        <Router>
            <Nav state={state} dispatch={dispatch} />
            <Footer />
            <Switch>
                <Route path="/"  >
                    {state !== null && (!state.isAuth ? <Home dispatch={dispatch} /> : <AuthenticatedHome authState={state} authDispatch={dispatch} />)}
                </Route>
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes
