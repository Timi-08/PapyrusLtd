import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Us</h1>
      </section>

      <section className="about-intro">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are a passionate team dedicated to delivering high-quality
            services that bring value to our clients. Our focus is on
            innovation, collaboration, and excellence in everything we do.
          </p>
          <p>
            With years of combined experience, we aim to create solutions that
            not only meet expectations but exceed them.
          </p>
          <p>
            Papyrus is a cards website that deals with different varieties of
            cards for different occasions. We provide a wide range of cards for
            events such as weddings, birthdays, anniversaries, and more. Our
            goal is to make it easy for you to find beautiful and personalized
            cards that reflect your style.
          </p>
        </div>
        <div className="about-image">
          <img src="/groupImage.avif" alt="Team working together" />
        </div>
      </section>

      <section className="mission-vision">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To provide cards that bring joy and connection to every occasion,
            while delivering exceptional customer service and quality.
          </p>
        </div>
        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To be a leader in our industry, known for our integrity, creativity,
            and the positive impact we bring to communities.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <i class="ri-user-fill"></i> <h4>Oluwatimilehin Alegbeleye</h4>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <i class="ri-user-fill"></i> <h4>Ruby Nwosu</h4>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <i class="ri-user-fill"></i> <h4>Virtue Abayomi</h4>
            <p>Project Manager</p>
          </div>
          <div className="team-member">
            <i class="ri-user-fill"></i> <h4>Balogun Ajoke</h4>
            <p>Project Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
