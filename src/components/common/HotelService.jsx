/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "./Header";
import {
  FaClock,
  FaCocktail,
  FaParking,
  FaSnowflake,
  FaTshirt,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";

const HotelService = () => {
  return (
    <>
      <div className="mb-2">
        <Header title={"Our Services"} />

        <Row className="mt-4">
          <h4 className="text-center">
            Services at <span className="hotel-color"> Sun - </span>Hotel
            <span className="gap-2">
              <FaClock className="ml-5" /> 24-Hour Front Desk
            </span>
          </h4>
        </Row>
        <hr />

        <Row xs={1} md={2} lg={3} className="g-4 mt-2">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaWifi /> WiFi
                </Card.Title>
                <Card.Text>
                  Stay Connected With High-Speed Internet Access.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaUtensils /> Breakfast
                </Card.Title>
                <Card.Text>
                  Start Your Day With A Delicious Breakfast Buffet.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaTshirt /> Laundry
                </Card.Title>
                <Card.Text>
                Keep Your Clothes Clean And Fresh With Our Laundry Service.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaCocktail /> Mini-Bar
                </Card.Title>
                <Card.Text>
                Enjoy A Refreshing Drink Or Snack From Our In-Room Mini-Bar.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaParking /> Parking
                </Card.Title>
                <Card.Text>
                Park Your Car Conveniently In Our On-Site Parking Lot.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaSnowflake /> Air Conditioning
                </Card.Title>
                <Card.Text>
                Stay Cool And Comfortable With Our Air Conditioning System.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <hr />
    </>
  );
};

export default HotelService;
