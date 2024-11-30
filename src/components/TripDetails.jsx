import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import facade from "../util/apiFacade";

function TripDetails() {
  const [trip, setTrip] = useState(null);
  const { id } = useParams();  // Get the trip id from the URL

  useEffect(() => {
    const fetchTrip = async () => {
      const fetchedTrip = await facade.fetchData(`/api/trips/${id}`);
      setTrip(fetchedTrip);
    };
    fetchTrip();
  }, [id]);

  if (!trip) return <p>Loading...</p>;

  return (
    <div>
      <h2>Trip Details</h2>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{trip.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{trip.name}</td>
          </tr>
          <tr>
            <td>Start Time</td>
            <td>{trip.starttime}</td>
          </tr>
          <tr>
            <td>End Time</td>
            <td>{trip.endtime}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{trip.price}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>{trip.category}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TripDetails;
