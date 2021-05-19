import moment from "moment";

export const authInitialState = JSON.parse(localStorage.getItem("authPayload"));
export const locationInitialState = JSON.parse(localStorage.getItem("locationPayload"));
export const showNotifInitialState = JSON.parse(localStorage.getItem("notificationPayload"));
export const connInitialState = JSON.parse(localStorage.getItem("connPayload"));

export const authReducer = (state, action) => {
    let payload = {}
    switch (action.type) {
        case "LOGIN":
            payload = {
                ...action.payload,
                isAuth: true,
                time: moment().format(),
                hasDisconnected: false
            }
            localStorage.setItem("connPayload", JSON.stringify({
                isConnected: true
            }))
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
            localStorage.removeItem("authPayload")
            localStorage.setItem("authPayload", JSON.stringify({
                isAuth: false,
                authToken: null,
                hasDisconnected: false
            }))
            return authInitialState
        default:
            return state
    }
}


export const locationReducer = (state, action) => {
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

export const showNotificationReducer = (state, action) => {
    switch (action.type) {
        case "SET_PERMISSION":
            localStorage.setItem("notificationPayload", JSON.stringify(action.payload))
            return action.payload
        case "SET_STATE":
            localStorage.setItem("notificationPayload", JSON.stringify(action.payload))
            return action.payload
        case "SET_DISTRICT":
            localStorage.setItem("notificationPayload", JSON.stringify(action.payload))
            return action.payload
        case "TOGGLE_NOTIFICATION":
            localStorage.setItem("notificationPayload", JSON.stringify(action.payload))
            return action.payload
        default:
            return state
    }
}

export const connReducer = (state, action) => {
    switch (action.type) {
        case "CONNECTED":
            localStorage.setItem("connPayload", JSON.stringify(action.payload))
            return action.payload
        case "DISCONNECTED":
            localStorage.setItem("connPayload", JSON.stringify(action.payload))
            return action.payload
        default:
            return state
    }
}

