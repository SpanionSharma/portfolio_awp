import React, { useState } from "react";

export default function Contact({ data }) {
  const [email, setEmail] = useState("");

  function handleSubmit() {
    if (!email) return alert("Please enter your email.");
    alert(`Thanks! We'll contact you at ${email}.`);
    setEmail("");
  }

  return (
    <div className="card">
      <h2 className="card-title">Contact</h2>
      <div className="card-body contact-block">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-email"
        />
        <button onClick={handleSubmit} className="btn">
          Submit
        </button>
      </div>
    </div>
  );
}
