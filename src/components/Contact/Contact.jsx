import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", formData);
    alert("form sent");
    //Reset Form
    setFormdata({ name: "", email: "", message: "" });
  };
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have Any Questions, Please Send Us A Message</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          type="text"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit"> Send Messages </button>
      </form>
    </div>
  );
};

export default Contact;
