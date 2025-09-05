import React from "react";
import Card from "./Card";
import cardsData from "../cards.json";

const TopSellingSection = () => {
  const birthdayCards =
    cardsData.categories
      .find((cat) => cat.name === "Birthday")
      ?.cards.slice(0, 2) || [];

  const otherCards = cardsData.categories
    .filter((cat) => cat.name !== "Birthday")
    .map((cat) => cat.cards[0])
    .filter(Boolean);

  const topSelling = [...birthdayCards, ...otherCards];

  return (
    <div className="top-selling-sec">
      <img src="/Top-selling-bg.jpg" alt="" className="top-selling-bg" />
      <div className="top-selling-container">
        <h3>Top Selling</h3>
        <p>
          For every moment—big, small, and in between—Just Because cards make
          life more fun,
          <br />
          more full and more connected.
        </p>
        <div className="top-selling-items">
          {topSelling.map((p, i) => (
            <Card
              key={p.id || i}
              img={p.image}
              title={p.title}
              price={`₹${p.price}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellingSection;
