import React from "react";

const TitleSection = () => {
  return (
    <div className="title-sec">
      <img
        className="title-background-img"
        src="/Title-sec-bg.png"
        alt="title-background-img"
      />

      <div className="title-text">
        <h1 className="title">Express Emotions</h1>
        <p>Sharing Moments, Creating Memories</p>
        <a href="#" className="shop-now-btn">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default TitleSection;
