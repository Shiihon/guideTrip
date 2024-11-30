import React, { useEffect, useState } from "react";
import facade from "../util/apiFacade";

function Guides() {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const fetchGuides = async () => {
      const options = facade.makeOptions("GET", true);
      const response = await fetch("https://tripapi.cphbusinessapps.dk/api/guides", options);
      const data = await response.json();
      setGuides(data);
    };
    fetchGuides();
  }, []);

  return (
    <div>
      <h1>Available Guides</h1>
      <ul>
        {guides.map((guide) => (
          <li key={guide.id}>
            <p>{guide.firstname} {guide.lastname}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Guides;
