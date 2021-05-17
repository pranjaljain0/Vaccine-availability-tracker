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
    function registerServiceWorker() {
      return navigator.serviceWorker.register("/sw.js");
    }
    async function askUserPermission() {
      return await Notification.requestPermission();
    }
    // async function createNotificationSubscription() {
    //   //wait for service worker installation to be ready
    //   const serviceWorker = await navigator.serviceWorker.ready;
    //   // subscribe and return the subscription
    //   return await serviceWorker.pushManager.subscribe({
    //     userVisibleOnly: true,
    //     applicationServerKey: pushServerPublicKey
    //   });
    // }
    registerServiceWorker()
    askUserPermission()
  }, [])


  return (
    <Routes />
  );
}

export default App;

