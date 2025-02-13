import React, { useState } from "react";

function Order() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        quantity: 1,
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order placed successfully!");
    };

    return (
        <section>
            <h2>Place Your Order</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Quantity:</label>
                <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} min="1" required />

                <label>Message (Optional):</label>
                <textarea name="message" value={formData.message} onChange={handleChange}></textarea>

                <button type="submit">Submit Order</button>
            </form>
        </section>
    );
}

export default Order;
