import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Tour.css";

const tours = [
  { name: "Kedarnath Trek", price: "₹10,999", altitude: "3,583 m", image: "Kedarnath-Yatra.jpg", description: "A beautiful trek through the Himalayan ranges." },
  { name: "Valley of Flowers", price: "₹9,999", altitude: "3,658 m", image: "Valley of Flower.png", description: "A trek amidst a valley full of blooming flowers." },
  { name: "Har Ki Dun", price: "₹13,000", altitude: "3,566 m", image: "Har Ki Dun.png", description: "Explore the scenic Valley of Gods." },
  { name: "Kuari Pass", price: "₹9,000", altitude: "4,265 m", image: "Kuari Pass.png", description: "A short trek with stunning panoramic views." },
  { name: "Kedarkantha", price: "₹7,000", altitude: "3,800 m", image: "Kedarkantha.jpg", description: "A winter trek perfect for beginners." },
  { name: "Char Dham", price: "₹25,000", altitude: "3,892 m", image: "CharDham.png", description: "A sacred pilgrimage trek in Uttarakhand." },
];

const Tours = () => {
  const navigate = useNavigate();

  return (
    <div className="tours">
      <h2 className="tours-title">Our Popular Treks</h2>
      <div className="tour-list">
        {tours.map((tour, index) => (
          <div className="tour-card" key={index}>
            <img src={`/assets/${tour.image}`} alt={tour.name} />
            <div className="tour-info">
              <h3>{tour.name}</h3>
              <p className="tour-description">{tour.description}</p>
              <p className="tour-altitude"><strong>Altitude:</strong> {tour.altitude}</p>
              <p className="tour-price"><strong>Price:</strong> {tour.price}</p>
              <button className="book-now" onClick={() => navigate("/contact")}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
