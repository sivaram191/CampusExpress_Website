import React, { useState } from "react";
import imageForScreen1 from "../assets/stats.svg";

function HappyClients() {
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  const containerStyle = {
    // Apply background color here
    backgroundColor: "e7ceeb",
    display: "inline-block",
    // You can add other styles to the container as needed
  };

  const gradientStyle = {
    background: isSmallerScreen
      ? "linear-gradient(to right, #e1c2e5, #e7ceeb)"
      : "linear-gradient(to bottom, #e7ceeb,#E7CEEB)",
    // Adjust the gradient direction based on screen size and image rotation
    // You can modify the gradient colors and direction as needed
  };

  return (
    <div className="centered-image-container" style={gradientStyle}>
      <div style={containerStyle}>
        <img
          src={imageForScreen1}
          alt="Centered Image"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "90%",
            maxHeight: "55%",
            transform: "translate(5%)",
          }}
        />
      </div>
    </div>
  );
}

export default HappyClients;
