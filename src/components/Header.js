import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";  // Import the CSS file

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <h1>ID Card Solutions</h1>

            {/* Menu Button for Mobile */}
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>

            {/* Navigation Menu */}
            <nav>
                <ul className={menuOpen ? "show" : ""}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
                    <li><Link to="/customization" onClick={() => setMenuOpen(false)}>Customize</Link></li>
                    <li><Link to="/contact us" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
