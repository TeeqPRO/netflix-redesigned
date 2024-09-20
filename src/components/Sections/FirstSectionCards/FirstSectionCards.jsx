import React, { useRef } from "react";
import Card from "../Props/Card/Card.jsx";
import "./FirstSectionCards.css";
import { assets } from "./../../../assets/assets.js";

const FirstSectionCards = () => {
  const cardContainerRef = useRef(null);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({ left: -(2 * 255), behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({ left: 2 * 255, behavior: "smooth" });
    }
  };

  return (
    <div className="FirstSectionCards">
      <button className="ScrollButton left" onClick={scrollLeft}><img src={assets.ArrowLeft} alt="<" /></button>
      <div className="FirstSectionCardsContainer" ref={cardContainerRef}>
        {[...Array(30)].map((_, index) => (
          <Card key={index + 1} id={index + 1} />
        ))}
      </div>
      <button className="ScrollButton right" onClick={scrollRight}><img src={assets.ArrowRight} alt=">" /></button>
    </div>
  );
};

export default FirstSectionCards;
