import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  // Function to display content
  const renderContent = () => {
    if (activeTab === "Home") {
      return (
        <>
          <h1 style={{ marginBottom: "10px" }}>
            Welcome to Home Page
          </h1>

          <p style={{ fontSize: "22px", lineHeight: "1.5" }}>
            This is the Home section of the website.
            Students can learn React basics here.
          </p>
        </>
      );
    }

    if (activeTab === "About") {
      return (
        <>
          <h1 style={{ marginBottom: "10px" }}>
            About Us
          </h1>

          <p style={{ fontSize: "22px", lineHeight: "1.5" }}>
            We create modern React applications with
            beautiful user interfaces.
          </p>
        </>
      );
    }

    if (activeTab === "Contact") {
      return (
        <>
          <h1 style={{ marginBottom: "10px" }}>
            Contact Information
          </h1>

          <p style={{ fontSize: "22px", lineHeight: "1.5" }}>
            Email: react@gmail.com
          </p>

          <p style={{ fontSize: "22px" }}>
            Phone: +91 9876543210
          </p>
        </>
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#666",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      {/* Main Container */}
      <div
        style={{
          width: "500px",
          backgroundColor: "white",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        {/* Navigation Bar */}
        <div
          style={{
            backgroundColor: "#1DA1F2",
            display: "flex",
            justifyContent: "space-around",
            padding: "20px",
          }}
        >
          <div
            onClick={() => setActiveTab("Home")}
            style={{
              color: activeTab === "Home" ? "yellow" : "white",
              fontWeight: activeTab === "Home" ? "bold" : "normal",
              cursor: "pointer",
              fontSize: "28px",
            }}
          >
            Home
          </div>

          <div
            onClick={() => setActiveTab("About")}
            style={{
              color: activeTab === "About" ? "yellow" : "white",
              fontWeight: activeTab === "About" ? "bold" : "normal",
              cursor: "pointer",
              fontSize: "28px",
            }}
          >
            About
          </div>

          <div
            onClick={() => setActiveTab("Contact")}
            style={{
              color: activeTab === "Contact" ? "yellow" : "white",
              fontWeight: activeTab === "Contact" ? "bold" : "normal",
              cursor: "pointer",
              fontSize: "28px",
            }}
          >
            Contact
          </div>
        </div>

        {/* Content Section */}
        <div
          style={{
            padding: "40px",
            textAlign: "center",
          }}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;