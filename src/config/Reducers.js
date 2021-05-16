import moment from "moment";

export const authInitialState = JSON.parse(localStorage.getItem("authPayload"));
export const locationInitialState = JSON.parse(localStorage.getItem("locationPayload"));

export const authReducer = (state, action) => {
    let payload = {}
    console.log(action)
    switch (action.type) {
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
        case "LOGOUT":
            localStorage.clear()
            localStorage.setItem("authPayload", JSON.stringify(authInitialState))
            return authInitialState
        case "HAS_DISCONNECTED":
            payload = {
                token: action.payload.token,
                mobile: action.payload.mobile,
                isAuth: true,
                time: moment().format(),
                hasDisconnected: true
            }
            localStorage.getItem("authPayload") !== null && localStorage.setItem("authPayload", JSON.stringify(payload))
            return payload
        default:
            return state
    }
}


export const locationReducer = (state, action) => {
    let payload = {}
    switch (action.type) {
        case "LOCATION_INIT":
            return action.payload
        case "SET_DISTRICT":
            localStorage.setItem("locationPayload", JSON.stringify(action.payload))
            return action.payload
        case "SET_STATE":
            localStorage.setItem("locationPayload", JSON.stringify(action.payload))
            return action.payload
        default:
            return state
    }
}