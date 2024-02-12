/* eslint-disable no-unused-vars */
import React from "react";
import MainHeader from "../layouts/MainHeader";
import Parallax from "../common/Parallax";
import HotelService from "../common/HotelService";
import RoomCarousel from "../common/RoomCarousel";

const Home = () => {
  return (
    <section>
      {/* {message && <p className="text-warning px-5">{message}</p>}
      {currentUser && (
        <h6 className="text-success text-center">
          {" "}
          You are logged-In as {currentUser}
        </h6>
      )} */}
      <MainHeader />
      <section className="container">
        <RoomCarousel />
        <Parallax />
        <RoomCarousel />
        <HotelService />
        <Parallax />
        <RoomCarousel />
      </section>
    </section>
  );
};

export default Home;
