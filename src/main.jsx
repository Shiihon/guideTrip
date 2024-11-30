// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";
// import Trips from "./components/Trips";
// import Guides from "./components/Guides.jsx";
// import TripDetails from "./components/TripDetails";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route path="trips" element={<Trips />} />
//           <Route path="guides" element={<Guides />} />
//           <Route path="trip/:id" element={<TripDetails />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Trips from "./components/Trips";
import Guides from "./components/Guides";
import TripDetails from "./components/TripDetails";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Root route */}
        <Route path="/" element={<App />} />
        
        {/* Nested routes for trips and trip details */}
        <Route path="/trips" element={<Trips />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/trip/:id" element={<TripDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
