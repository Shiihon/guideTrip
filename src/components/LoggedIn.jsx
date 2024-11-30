import { useState, useEffect } from "react";
import facade from "../util/apiFacade";

function LoggedIn({ loggedIn }) {
  const [dataFromServer, setDataFromServer] = useState("Loading...");

  useEffect(() => {
    //facade.fetchData // lav en tabel der henter shit, aka data
  }, []);

  return (
    <div>
      {facade.hasUserAccess("admin", loggedIn) ? (
        <div>
          <h2>Data Received from server</h2>
          <h3>{dataFromServer}</h3>
        </div>
      ) : facade.hasUserAccess("user", loggedIn) ? (
        <div>
          <h2>Data Received from server</h2>
          <h3>{dataFromServer}</h3>
        </div>
      ) : (
        // Optional: add a fallback message for users who aren't logged in or don't have access
        <p>You don't have access to this data.</p>
      )}
    </div>
  );
}

//display certain info (user/admin)
//show fetching for if you are one or the other. 

export default LoggedIn;
