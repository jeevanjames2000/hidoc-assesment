import React from "react";

const CopyRights = () => {
  return (
    <>
      <div
        style={{ display: "block", backgroundColor: "#CFD8DC", margin: "0px" }}
      >
        <p
          style={{
            textAlign: "center",
            marginTop: "0px",
            backgroundColor: "#CFD8DC",
            paddingTop: "10px",
          }}
        >
          © Copyright 2024{" "}
          <span>
            <b>Hidoc Dr. Inc.</b>
          </span>
        </p>
        <div style={{ textAlign: "center" }}>
          <a
            href="/terms&conditions"
            rel="noreferrer noopener"
            style={{ textDecoration: "none", color: "black" }}
          >
            Terms &amp; Conditions{" "}
          </a>
          <span>| </span>
          <a
            href="/privacy"
            rel="noreferrer noopener"
            style={{ textDecoration: "none", color: "black" }}
          >
            Privacy Policy{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default CopyRights;
