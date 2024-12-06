import React, { useState, useEffect } from "react";
import facade from "./util/apiFacade";
/* Styling */
import "./App.css";
/* Components */
import Header from "./components/Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(facade.loggedIn());
  const [userRole, setUserRole] = useState(""); // Store the user role

  useEffect(() => {
    if (loggedIn) {
      setUserRole(facade.getUserRoles()); // Set user role after login
    }
  }, [loggedIn]);

  const login = (user, pass) => {
    facade.login(user, pass).then(() => {
      setLoggedIn(true);
      setUserRole(facade.getUserRoles());  // Set role after login
    }).catch(error => {
      console.error('Login failed:', error);
    });
    console.log(user, pass);
  };

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };

  return (
    <div>
      <Header />
      <main>
          <div>
          <button onClick={logout}>Logout</button>
          </div>
      </main>
    </div>
  );
}

export default App;
