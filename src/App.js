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
  localStorage.getItem("notificationPayload") === null && localStorage.setItem("notificationPayload", JSON.stringify({
    userPermission: false,
    showAlert: true,
  }))
  localStorage.getItem("connPayload") === null && localStorage.setItem("connPayload", JSON.stringify({
    isConnected: null
  }))

  useEffect(() => {
    Notification.requestPermission(function (status) {
      console.log('Notification permission status:', status);
    });
    displayNotification()
  }, [])

  function displayNotification() {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then(function (reg) {
        reg.showNotification('Hello world!');
      });
    }
  }


  return (
    <Routes />
  );
}

export default App;

