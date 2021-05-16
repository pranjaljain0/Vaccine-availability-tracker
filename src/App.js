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

  useEffect(() => {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
    navigator.serviceWorker.register('sw.js');
    Notification.requestPermission(function (result) {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(function (registration) {
          registration.showNotification('Notification with ServiceWorker');
        });
      }
    });
    // setInterval(() => { showNotification() }, 10000)
  }, [])

  const showNotification = () => {
    new Notification('Hey')
  }

  return (
    <Routes />
  );
}

export default App;

