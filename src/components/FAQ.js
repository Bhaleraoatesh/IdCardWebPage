import React from "react";

function FAQ() {
    const faqs = [
        { question: "What types of ID cards do you offer?", answer: "We provide school, office, and event ID cards with custom design options." },
        { question: "How long does delivery take?", answer: "Standard delivery takes 5-7 business days. Express options are available." },
        { question: "Can I order in bulk?", answer: "Yes! We offer bulk discounts for large orders." },
        { question: "Do you offer secure ID features?", answer: "Yes, we offer QR codes, barcodes, and hologram security features." }
    ];

    return (
        <section>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h4>{faq.question}</h4>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;
