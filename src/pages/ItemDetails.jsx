import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cardsData from "../cards.json";
import FeedbackForm from "../components/FeedbackForm";

const ItemDetails = () => {
  const { itemId } = useParams();

  const card = cardsData.categories
    .flatMap((cat) => cat.cards || [])
    .find((c) => c.id === Number(itemId));
  if (!card) return <div>Item not found.</div>;

  return (
    <div className="item-details-sec">
      <div className="item-details-page">
        <div className="item-details-card">
          <img
            src={`/${card.image}`}
            alt={card.title}
            className="item-details-img"
          />
          <div className="item-details-info">
            <h2>{card.title}</h2>
            <p className="item-details-desc">{card.description}</p>
            <p className="item-details-price">
              Price: <span>₹{card.price}</span>
            </p>
            <FeedbackForm productId={card.id} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemDetails;
