import React, { useState } from "react";
import "./styles/Products.css";

function Products() {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState([]);

    // ID Card Data with Multiple Designs
    const productCategories = {
        school: [
            { id: "S1", name: "School ID - Design 1", image: "school-1.jpg" },
            { id: "S2", name: "School ID - Design 2", image: "school-2.jpg" },
            { id: "S3", name: "School ID - Design 3", image: "school-3.jpg" }
        ],
        office: [
            { id: "O1", name: "Office ID - Design 1", image: "office-1.jpg" },
            { id: "O2", name: "Office ID - Design 2", image: "office-2.jpg" },
            { id: "O3", name: "Office ID - Design 3", image: "office-3.jpg" }
        ],
        event: [
            { id: "E1", name: "Event Badge - Design 1", image: "event-1.jpg" },
            { id: "E2", name: "Event Badge - Design 2", image: "event-2.jpg" },
            { id: "E3", name: "Event Badge - Design 3", image: "event-3.jpg" }
        ]
    };

    // Toggle View More
    const toggleViewMore = (category) => {
        setExpandedCategory(expandedCategory === category ? null : category);
    };

    // Select/Deselect Product
    const toggleSelectProduct = (product) => {
        if (selectedProducts.some((p) => p.id === product.id)) {
            setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
        } else {
            setSelectedProducts([...selectedProducts, product]);
        }
    };

    // Send Inquiry Email
    const sendInquiry = () => {
        if (selectedProducts.length === 0) {
            alert("Please select at least one design before inquiring.");
            return;
        }

        const subject = encodeURIComponent("Product Inquiry");
        const productDetails = selectedProducts
            .map((product) => `- ${product.name} (Product ID: ${product.id})`)
            .join("\n");

        const body = encodeURIComponent(
            `Hello,\n\nI am interested in the following ID card designs:\n\n${productDetails}\n\nPlease provide more details.`
        );

        window.location.href = `mailto:owner@example.com?subject=${subject}&body=${body}`;
    };

    return (
        <section>
            <h2 className="product-title">Select Your ID Cards</h2>

            {Object.entries(productCategories).map(([category, products]) => (
                <div key={category} className="category-section">
                    <h3>{category.charAt(0).toUpperCase() + category.slice(1)} ID Cards</h3>

                    {/* Default View: Show First Image */}
                    <div className="product-card">
                        <img src={products[0].image} alt={products[0].name} className="main-image" />
                        <button className="view-more-btn" onClick={() => toggleViewMore(category)}>
                            {expandedCategory === category ? "Hide Designs" : "View More"}
                        </button>
                    </div>

                    {/* Expanded View: Show All Designs */}
                    {expandedCategory === category && (
                        <div className="product-list">
                            {products.map((product) => (
                                <div key={product.id}
                                    className={`product-card ${selectedProducts.some((p) => p.id === product.id) ? "selected" : ""}`}
                                    onClick={() => toggleSelectProduct(product)}
                                >
                                    <img src={product.image} alt={product.name} className="main-image" />
                                    <p className="select-text">
                                        {selectedProducts.some((p) => p.id === product.id) ? "Selected ✔" : "Click to Select"}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            {/* Inquiry Section */}
            {selectedProducts.length > 0 && (
                <div className="inquiry-section">
                    <h3>Selected Designs:</h3>
                    <ul>
                        {selectedProducts.map((product) => (
                            <li key={product.id}>{product.name} (ID: {product.id})</li>
                        ))}
                    </ul>
                    <button className="inquiry-btn" onClick={sendInquiry}>Send Inquiry</button>
                </div>
            )}
        </section>
    );
}

export default Products;
