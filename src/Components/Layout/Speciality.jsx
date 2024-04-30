import React, { useState } from "react";
import "../Style/Style.css";

const Body = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            gridColumn: "span 8",
            marginLeft: "2rem",
            textAlign: "center",
          }}
        >
          <p style={{ padding: "5px", textAlign: "center", fontSize: "large" }}>
            DailyMed Drug Databasee: The Dailymed Database contains 143072
            labeling submitted to <br /> the Food and Drug Adminstration(FDA) by
            companies. Dailymed does not contain a complete <br /> listing of
            labeling for FDA-regualated products(e.g, labeling that is not
            submitted to the FDA).{" "}
          </p>
        </div>
        <div
          className="speciality-btn"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "minmax(50px, auto)",
            gap: "10px",
            justifySelf: "center",
          }}
        >
          <div
            style={{
              border: "2px solid gray",
              borderRadius: "10px",
              alignItems: "center",
              textAlign: "center",
              padding: "8px",
              cursor: "pointer",
              backgroundColor:
                activeButton === "Anesthesia" ? "lightblue" : "white",
            }}
            onClick={() => handleClick("Anesthesia")}
          >
            Anesthesia
          </div>
          <div
            style={{
              border: "2px solid gray",
              borderRadius: "10px",
              alignItems: "center",
              textAlign: "center",
              padding: "8px",
              cursor: "pointer",
              backgroundColor:
                activeButton === "Cardiology" ? "lightblue" : "white",
            }}
            onClick={() => handleClick("Cardiology")}
          >
            Cardiology
          </div>
          <div
            style={{
              border: "2px solid gray",
              borderRadius: "10px",
              alignItems: "center",
              textAlign: "center",
              cursor: "pointer",
              padding: "8px",
              backgroundColor:
                activeButton === "Critical Care" ? "lightblue" : "white",
            }}
            onClick={() => handleClick("Critical Care")}
          >
            Critical Care
          </div>
          <div
            style={{
              border: "2px solid gray",
              borderRadius: "10px",
              alignItems: "center",
              textAlign: "center",
              padding: "8px",
              cursor: "pointer",
              backgroundColor:
                activeButton === "Dentistry" ? "lightblue" : "white",
            }}
            onClick={() => handleClick("Dentistry")}
          >
            Dentistry
          </div>
          <div
            style={{
              border: "2px solid gray",
              borderRadius: "10px",
              alignItems: "center",
              textAlign: "center",
              padding: "8px",
              cursor: "pointer",
              backgroundColor:
                activeButton === "Dermatology" ? "lightblue" : "white",
            }}
            onClick={() => handleClick("Dermatology")}
          >
            Dermatology
          </div>
          <div
            style={{
              border: "2px solid gray",
              borderRadius: "10px",
              alignItems: "center",
              textAlign: "center",
              cursor: "pointer",
              padding: "8px",
              backgroundColor:
                activeButton === "Diabetology" ? "lightblue" : "white",
            }}
            onClick={() => handleClick("Diabetology")}
          >
            Diabetology
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
