import React, { useEffect, useReducer } from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { authInitialState, authReducer } from "../config/Reducers";

import AuthenticatedHome from "../pages/AuthenticatedHome/AuthenticatedHome";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/home";
import Nav from "../components/Nav/nav";
import NotFound from "../pages/NotFound/NotFound";
import axios from "axios";
import { beneficiaries } from "../config/API";

function Routes() {
    const [state, dispatch] = useReducer(authReducer, authInitialState)
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
