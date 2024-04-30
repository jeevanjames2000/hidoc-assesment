import React, { useState, useEffect } from "react";

const DrugData = () => {
  const [drugData, setDrugData] = useState([]);
  const [selectedDrug, setSelectedDrug] = useState(null);

  useEffect(() => {
    fetch("https://hidocdr.com/api/hidoc-us/drug/getDrugList", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => setDrugData(data.data.drugData))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleDrugClick = (drug) => {
    setSelectedDrug(drug);
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        justifyContent: "center",
        gap: "10px",
        marginLeft: "8rem",
        marginRight: "8rem",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          padding: "10px",

          gridColumn: "span 5",
          textAlign: "center",
        }}
      >
        <table style={{ width: "100%" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid black" }}>
              {" "}
              <th colSpan="2" style={{ borderBottom: "1px solid black" }}>
                <h3> Drug Data</h3>
              </th>{" "}
            </tr>
          </thead>
          <tbody>
            {drugData.map((drug) => (
              <tr
                key={drug.id}
                onClick={() => handleDrugClick(drug)}
                style={{
                  cursor: "pointer",
                  backgroundColor:
                    selectedDrug && selectedDrug.id === drug.id
                      ? "lightblue"
                      : "transparent",
                }}
              >
                <td>{drug.drugName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          gridColumn: "span 2",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
      </div>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          gridColumn: "span 5",
          //   textAlign: "center",
        }}
      >
        <table style={{ width: "100%" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid black" }}>
              {" "}
              <th colSpan="2" style={{ borderBottom: "1px solid black" }}>
                <h3> Drug Details</h3>
              </th>{" "}
            </tr>
          </thead>
          <tbody>
            <tr style={{ display: "block" }}>
              <h2 style={{ textAlign: "center" }}>{selectedDrug?.drugName}</h2>
              <td colSpan="2" style={{ textAlign: "center" }}>
                {selectedDrug
                  ? selectedDrug.drugDetails
                  : "Click a drug to see details"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DrugData;
