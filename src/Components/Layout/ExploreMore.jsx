import React from "react";

const ExploreMore = () => {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          backgroundColor: "#eff4f8",
          padding: "25px",
        }}
      >
        Explore more on Hidoc Dr.
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            flexBasis: "30%",
            maxWidth: "300px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h2 style={{ marginRight: "2rem", marginBottom: "0" }}>NEWS</h2>
            <p style={{ fontSize: "small", marginBottom: "0" }}>
              Posted on 03/08/2023
            </p>
          </div>
          <img
            src="https://hidoc-files.sgp1.digitaloceanspaces.com/hidoc-client-files/1712920453229.jpg"
            title=""
            alt="NEWS"
            style={{ width: "100%", height: "auto", marginBottom: "10px" }}
          />
          <h3>Abdominal inflammation can affect test results for cystitis.</h3>
          <p>
            A recent study published in Pain Physician found that pelvic floor
            <br /> myofascial pain (PFMP) is not associated with bladder
            problems in
            <br /> women with cystitis or bladder pain (IC/BPS).
          </p>
        </div>
        <div
          style={{
            flexBasis: "30%",
            maxWidth: "300px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h2 style={{ marginRight: "2rem", marginBottom: "0" }}>QUIZ</h2>
            <p style={{ fontSize: "small", marginBottom: "0" }}>02/26/2024</p>
          </div>
          <img
            src="https://hidoc-files.sgp1.digitaloceanspaces.com/hidoc-client-files/1708949720982.jpg"
            title=""
            alt="Quiz"
            style={{ width: "100%", height: "auto", marginBottom: "10px" }}
          />
          <h4>Quiz on Water Flosser in Periodontal Therapy</h4>
          <p>
            Dear Doctor, Participate in this fun and interesting Quiz
            <br /> on Water flosser in periodontal therapy. Water flossers
            <br />
            offer a complementary tool in periodontal therapy.
          </p>
        </div>
        <div
          style={{
            flexBasis: "30%",
            maxWidth: "300px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h2 style={{ marginRight: "2rem", marginBottom: "0" }}>Survey</h2>
            <p style={{ fontSize: "small", marginBottom: "0" }}>12/09/2022</p>
          </div>
          <img
            src="https://sgp1.digitaloceanspaces.com/hidoc-files/hidoc-client-files/1670594029663.jpg"
            title=""
            alt="Survey"
            style={{ width: "100%", height: "auto", marginBottom: "10px" }}
          />
          <p>
            Dear Doctor - Participate in the Survey on hepatitis of unknown
            <br />
            etiology. A recent survey of hepatitis cases of unknown etiology
            <br />
            in children found that the vast majority of cases were in infants
            <br />
            under the age of 6 months. The most common symptoms reported were
            <br />
            fever, diarrhea, and vomiting.
          </p>
        </div>
        <div
          style={{
            flexBasis: "30%",
            width: "100px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h2 style={{ marginRight: "2rem", marginBottom: "0" }}>Article</h2>
            <p style={{ fontSize: "small", marginBottom: "0" }}>08/02/20234</p>
          </div>
          <img
            src="https://hidoc-files.sgp1.digitaloceanspaces.com/hidocdr_speciality_placeholder/image1707219782828.jpg"
            title=""
            alt="Article"
            style={{
              width: "100%",
              height: "250px",
              marginBottom: "10px",
              objectFit: "fill",
            }}
          />
          <h4>
            Despite the benefits of SM antibodies for disease prevention, there
            are also some limitations.
          </h4>
          <p>
            The human body is a complex system of organs and cells that work
            together to keep us healthy and functioning. As such, it is
            important to understand the role that antibodies play in protecting
            us from disease. Antibodies are proteins produced by the immune
            system that recognize and attack foreign substances, such as
            bacteria and viruses, that enter the body. One type of antibody,
            known as an SM antibody, has been found to be particularly important
            in preventing certain diseases. In this article, we will explore the
            role of SM antibodies in disease prevention.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExploreMore;
