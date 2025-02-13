import React, { useState } from "react";

function Customization() {
    const [name, setName] = useState("");
    const [color, setColor] = useState("#000000");
    const [logo, setLogo] = useState(null);

    const handleLogoUpload = (event) => {
        setLogo(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <section>
            <h2>Customize Your ID Card</h2>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>Choose Color:</label>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />

            <label>Upload Logo:</label>
            <input type="file" onChange={handleLogoUpload} />

            <div className="preview" style={{ background: color }}>
                {logo && <img src={logo} alt="Logo Preview" width="50" />}
                <h3>{name || "Your Name"}</h3>
            </div>
        </section>
    );
}

export default Customization;
