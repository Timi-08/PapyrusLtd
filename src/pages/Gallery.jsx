import React from "react";

const images = [
  { src: "/anniversary1.png", alt: "Anniversary Card" },
  { src: "/friendship1.png", alt: "Friendship Card" },
  { src: "/birthday1.png", alt: "Birthday Card" },
  { src: "/mother1.png", alt: "Mother's Day Card" },
  { src: "/newyear1.png", alt: "New Year Card" },
  { src: "/birthday2.png", alt: "Birthday Card" },
  { src: "/newyear3.png", alt: "New Year Card" },
  { src: "/father1.png", alt: "Wedding Card" },
  { src: "/birthday6.png", alt: "Birthday Card" },
  { src: "/anniversary4.png", alt: "Anniversary Card" },
  { src: "/other1.png", alt: "Teacher Card" },
  { src: "/birthday4.png", alt: "Wedding Card" },
  { src: "/other2.png", alt: "Wedding Card" },
  { src: "/newyear2.png", alt: "Wedding Card" },
  { src: "/newyear4.png", alt: "Anniversary Card" },
  { src: "/friendship3.png", alt: "Anniversary Card" },
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <h1>Gallery</h1>
      </section>

      <section className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
