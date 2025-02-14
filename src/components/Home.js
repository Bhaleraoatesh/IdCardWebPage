import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles/Contact.css";

const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        if (!serviceID || !templateID || !publicKey) {
            console.error("Missing EmailJS environment variables!");
            alert("Error: Missing EmailJS configuration.");
            return;
        }

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then(
                () => {
                    alert("Message Sent Successfully!");
                    form.current.reset();
                },
                (error) => {
                    alert("Failed to send message. Please try again.");
                    console.error("EmailJS Error:", error);
                }
            );
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>Have questions? Reach out to us and we’ll get back to you soon.</p>

            <form ref={form} onSubmit={handleSubmit} className="contact-form">
                <label>Name:</label>
                <input type="text" name="from_name" placeholder="Your Name" required />

                <label>Email:</label>
                <input type="email" name="from_email" placeholder="Your Email" required />

                <label>Subject:</label>
                <input type="text" name="subject" placeholder="Subject" required />

                <label>Message:</label>
                <textarea name="message" placeholder="Your Message" rows="5" required />

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
