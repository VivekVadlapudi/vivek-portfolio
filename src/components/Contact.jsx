
// Contact.js
import React from "react";
import "../App.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting me!");
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
