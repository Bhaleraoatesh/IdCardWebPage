import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css"; // Make sure to create this CSS file

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to ID Card Solutions</h1>
            <p>Your one-stop shop for all ID card needs!</p>

            <div className="sections">
                <div className="section-card">
                    <h2>🛍️ Products</h2>
                    <p>Explore our wide range of ID card products.</p>
                    <Link to="/products">View Products →</Link>
                </div>
                <div className="section-card">
                    <h2>🎨 Customize</h2>
                    <p>Create unique designs for your ID cards.</p>
                    <Link to="/customization">Start Customizing →</Link>
                </div>

                <div className="section-card">
                    <h2>🛒 Order</h2>
                    <p>Place an order quickly & easily.</p>
                    <Link to="/order">Order Now →</Link>
                </div>

                <div className="section-card">
                    <h2>ℹ️ About Us</h2>
                    <p>Learn more about our journey & mission.</p>
                    <Link to="/about">Read More →</Link>
                </div>

                <div className="section-card">
                    <h2>❓ FAQ</h2>
                    <p>Have questions? Find all the answers here.</p>
                    <Link to="/faq">Visit FAQ →</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
