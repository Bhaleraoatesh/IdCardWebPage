import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";  // ? Import the CSS file
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import Customization from "./components/Customization";
import Contact from "./components/Contact";
import About from "./components/About";
import FAQ from "./components/FAQ";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/customization" element={<Customization />} />
                <Route path="/Contact Us" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
