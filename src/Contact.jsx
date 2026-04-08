
import { useState } from "react";
import { CONTACT_INFO } from "./constants";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrbkyvpn", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        setMessage("✅ Message sent successfully!");
        form.reset();
      } else {
        throw new Error("Submission failed.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left glass">
          <h1 className="gradient-text">Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            {CONTACT_INFO.map((info, index) => (
              <div key={index} className="contact-detail">
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                   <info.icon />
                </a>
                <p>{info.label}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-right glass">
          <input type="hidden" name="_subject" value="New message from your portfolio" />
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <div className="form-group">
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input type="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
          </div>

          <button type="submit" className="contact-submit connect" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Submit Now"}
          </button>

          {status === "success" && <p className="success-msg">{message}</p>}
          {status === "error" && <p className="error-msg">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
