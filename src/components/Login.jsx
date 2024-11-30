import React, { useState,useEffect } from "react"
import facade from "../util/apiFacade";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => { // kaldes når knappen trykkes. 
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  }
  const onChange = (evt) => { // gemmer hver gang der logges ind
    setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
  }

  return (
    <>
    
    </>
  )
}
//fetching:
//log in form
//all trips

export default LogIn
