import React from "react";
import "./Contactus.css";

function Contactus() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="contact-container" style={{ maxWidth: '400px', margin: '16px auto', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '16px', background: '#fff' }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Your email" required />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="4"
          placeholder="Type your message..."
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contactus;
