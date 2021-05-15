import "./assets/style/global.scss"

import React, { useEffect } from "react"

import Routes from "./Routes/Routes";

function App() {
  useEffect(() => {
    localStorage.getItem("authPayload") === null && localStorage.setItem("authPayload", JSON.stringify({
      isAuth: false,
      authToken: null,
      hasDisconnected: false
    }))
  }, [])
  return (
    <Routes />
  );
}

export default App;

