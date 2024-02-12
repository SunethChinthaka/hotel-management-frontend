/* eslint-disable no-unused-vars */
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import AddRoom from "./components/rooms/AddRoom";
import ExistingRooms from "./components/rooms/ExistingRooms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import EditRoom from "./components/rooms/EditRoom";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import RoomListing from "./components/rooms/RoomListing";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <>
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
            <Route path="/add-room" element={<AddRoom />} />
            <Route path="/browse-all-rooms" element={<RoomListing />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
        <Footer />
      </main>
    </>
  );
}

export default App;
