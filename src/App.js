import "./assets/style/global.scss"

import React, { useEffect } from "react"

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

  useEffect(() => {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
    // setInterval(() => { showNotification() }, 10000)
  }, [])

  return (
    <Routes />
  );
}

export default App;

