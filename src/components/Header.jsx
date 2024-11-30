import React, { useState } from "react";
import { Link } from "react-router-dom";
import facade from "../util/apiFacade";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = e.target.username.value;
    const pass = e.target.password.value;
    facade.login(user, pass).then(() => {
      setLoggedIn(true);
      setUsername(user);
    });
  };

  const handleLogout = () => {
    facade.logout();
    setLoggedIn(false);
    setUsername("");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/trips">Trips</Link>
          </li>
          {facade.hasUserAccess("admin", loggedIn) && (
            <li>
              <Link to="/guides">Guides</Link>
            </li>
          )}
          {(facade.hasUserAccess("user", loggedIn) || facade.hasUserAccess("admin", loggedIn)) && ( /*Kun hvis der er adgang i api'et, ellers er det kun users der kan*/
          <li>
            <Link to="/trip/3">Trip Details</Link>
          </li>
          )}
        </ul>
      </nav>
      <div>
        {loggedIn ? (
          <div>
            <p>Logged in as: {username}</p>
            {/* <button onClick={handleLogout}>Logout</button> */}
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </header>
  );
}

export default Header;
