import "./assets/style/global.scss"

import React from "react"
import Routes from "./Routes/Routes";

function App() {
  localStorage.getItem("authPayload") === null && localStorage.setItem("authPayload", JSON.stringify({
    isAuth: false,
    authToken: null,
    hasDisconnected: false
  }))
  localStorage.getItem("locationPayload") === null && localStorage.setItem("locationPayload", JSON.stringify({
    districtID: null,
    stateID: null,
  }))
  localStorage.getItem("notificationPayload") === null && localStorage.setItem("notificationPayload", JSON.stringify({
    userPermission: false,
    showAlert: false,
    districtID: null,
    stateID: null,
    lastNotif: null,
  }))
  localStorage.getItem("connPayload") === null && localStorage.setItem("connPayload", JSON.stringify({
    isConnected: null
  }))

  return (
    <Routes />
  );
}

export default App;

