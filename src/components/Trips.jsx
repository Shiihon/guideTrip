import React, { useEffect, useState } from "react";
import facade from "../util/apiFacade";
import { Link } from "react-router-dom";

function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const trips = await facade.fetchData("/api/trips");
      setTrips(trips);
    };
    fetchTrips();
  }, []);

  return (
    <div>
      <h1>Available Trips</h1>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <Link to={`/trip/${trip.id}`}>{trip.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trips;

