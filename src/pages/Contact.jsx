import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
      </section>

      <section className="contact-info">
        <div className="info-card">
          <i className="ri-phone-line"></i>
          <h3>Phone</h3>
          <p>+234 810 123 4567</p>
          <p>Mon–Fri, 9am–6pm</p>
        </div>

        <div className="info-card">
          <i className="ri-mail-line"></i>
          <h3>Email</h3>
          <p>support@papyrus.com</p>
          <p>info@papyrus.com</p>
        </div>

        <div className="info-card">
          <i className="ri-map-pin-line"></i>
          <h3>Location</h3>
          <p>12 Admiralty Way, Lekki Phase 1</p>
          <p>Lagos, Nigeria</p>
        </div>
      </section>

      <section className="contact-form">
        <h2>Get in Touch!</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="contact-map">
        <iframe
          title="Papyrus Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.844516566612!2d3.450537975930181!3d6.443261193553642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf51f4c3b5b33%3A0xd65cdb41f0dfd63f!2sLekki%20Phase%201!5e0!3m2!1sen!2sng!4v1694432000000!5m2!1sen!2sng"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
