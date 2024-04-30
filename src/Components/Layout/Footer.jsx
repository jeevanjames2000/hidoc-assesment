import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
      }}
    >
      <div style={{ alignItems: "center" }}>
        <div>
          <img
            src="https://hidoc-files.sgp1.digitaloceanspaces.com/hidoc-client-files/1703756439336.png"
            alt="logo"
            title="logo"
          />
          <p style={{ textAlign: "left", marginLeft: "3rem" }}>
            Fastest Growing Medical Platform for
            <br /> Doctors.
          </p>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              height="1em"
              width="1em"
              style={{
                width: "30px",
                height: "30px",
                color: "white",
                marginRight: "2rem",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              style={{
                width: "30px",
                height: "30px",
                color: "white",
                marginRight: "2rem",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 576 512"
              height="1em"
              style={{
                width: "30px",
                height: "30px",
                color: "white",
                marginRight: "2rem",
              }}
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              style={{ width: "30px", height: "30px", color: "white" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
          </a>
        </div>
        <div id="us-nat-optout"></div>
      </div>
      <div style={{ alignItems: "center" }}>
        <h2 style={{ textAlign: "left" }}>Reach us</h2>
        <p style={{ textAlign: "left" }}>
          Please contact the below details for any other information
        </p>
        <div>
          <p style={{ textAlign: "left" }}>
            Email: <br />
            <a href="mailto:info@hidoc.co" style={{ textDecoration: "none" }}>
              info@hidoc.co
            </a>
          </p>
        </div>
        <p style={{ textAlign: "left" }}>
          Address: <br />
          <span>
            Hidoc Dr. Inc, 2055 Limestone Rd, STE 200-C, Wilmingotn, DE, 19808,
            United States.
          </span>
        </p>
      </div>
      <div
        style={{
          alignItems: "center",
          marginRight: "2rem",
          marginBottom: "2rem",
        }}
      >
        <div>
          <h2 style={{ textAlign: "left" }}>Hidoc Dr. Features</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              rowGap: 0,
              marginTop: "20px",
              height: "100%",
              width: "100%",
            }}
          >
            <a
              href="/drug-database"
              style={{
                color: "white",
                backgroundColor: "#81A3BB",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                // borderRadius: "10px",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  border: "2px solid #2B74D5",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#4DC4FC",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  style={{ width: "40px", height: "40px" }}
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="footer-logos"
                >
                  <path d="M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"></path>
                </svg>
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  paddingTop: "8px",
                  textAlign: "center",
                  lineHeight: "1.2",
                }}
              >
                Drug Database
              </p>
            </a>

            <a
              href="/drug-database"
              style={{
                color: "white",
                backgroundColor: "#A8818C",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                // borderRadius: "10px",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  border: "2px solid #2B74D5",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#EA4633",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  style={{ width: "40px", height: "40px" }}
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11l-4 3.98zm-2-.79V18H4V6h12v3.69z"></path>
                  <circle cx="10" cy="10" r="2"></circle>
                  <path d="M14 15.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 00-5.56 0A2.01 2.01 0 006 15.43V16h8v-.57z"></path>
                </svg>
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  paddingTop: "8px",
                  textAlign: "center",
                  lineHeight: "1.2",
                }}
              >
                Webinars
              </p>
            </a>
            <a
              href="/drug-database"
              style={{
                color: "white",
                backgroundColor: "#8997BA",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                // borderRadius: "10px",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  border: "2px solid #2273D8",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#448AFD",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  style={{ width: "40px", height: "40px" }}
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M217.4 27.43c-27.9.47-53.1 17.11-64.5 42.84l136.5 41.23c6-35.79-15.5-70.49-50.1-81.02-6.2-1.88-12.7-2.91-19.2-3.05h-2.7zm-69.7 60.08c-6.1 35.89 15.4 70.69 50.1 81.19 34.8 10.5 71.9-6.7 86.5-40zm265.5 44.29c-25.3.1-52.2 12.3-72.5 41L215.9 349.7c-33.5 47.4-18.9 97 14.1 120.4 33.1 23.5 84.6 20.8 118.1-26.6l124.7-176.8c33.5-47.5 18.9-97-14.1-120.5-12.4-8.8-27.3-13.9-43-14.4zm-1.8 17.3c1.3 0 2.6 0 3.8.1 12.1.5 23.5 4.8 33.1 11.7 25.7 18.2 38.6 54.5 9.7 95.4l-64.5 91.5c-35.8-9.6-81.8-42.3-102.7-73l64.7-91.6c16.9-23.9 37-33.7 55.9-34.1zM91.25 225.3c-9.62.1-19.11 2.1-27.93 6-33.11 14.5-50.34 51.5-40.24 86.3l130.72-57.1c-13.1-22.1-36.9-35.5-62.55-35.2zm69.65 51.6L30.2 334.1c18.45 31.4 57.3 44 90.6 29.5 33.2-14.6 50.4-51.8 40.1-86.7z"></path>
                </svg>
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  paddingTop: "8px",
                  textAlign: "center",
                  lineHeight: "1.2",
                }}
              >
                Drug Interaction
              </p>
            </a>
            <a
              href="/drug-database"
              style={{
                color: "white",
                backgroundColor: "#829E98",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                // borderRadius: "10px",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  border: "2px solid #2273D8",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#5DAF50",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  style={{ width: "30px", height: "30px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 4v-2h-14v11c0 0.552 0.448 1 1 1h13.5c0.828 0 1.5-0.672 1.5-1.5v-8.5h-2zM13 13h-12v-10h12v10zM2 5h10v1h-10zM8 7h4v1h-4zM8 9h4v1h-4zM8 11h3v1h-3zM2 7h5v5h-5z"></path>
                </svg>
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  paddingTop: "8px",
                  textAlign: "center",
                  lineHeight: "1.2",
                }}
              >
                Medical Calculator
              </p>
            </a>
            <a
              href="/drug-database"
              style={{
                color: "white",
                backgroundColor: "#AD9989",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                // borderRadius: "10px",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  border: "2px solid #2273D8",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F2972C",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  style={{ width: "40px", height: "40px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path>
                </svg>
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  paddingTop: "8px",
                  textAlign: "center",
                  lineHeight: "1.2",
                }}
              >
                Articles
              </p>
            </a>
            <a
              href="/drug-database"
              style={{
                color: "white",
                backgroundColor: "#8997BA",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                // borderRadius: "10px",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  border: "2px solid #2273D8",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#448AFD",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  style={{ width: "40px", height: "40px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm7 6c-1.65 0-3-1.35-3-3V5h6v6c0 1.65-1.35 3-3 3zm7-6c0 1.3-.84 2.4-2 2.82V7h2v1z"></path>
                </svg>
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  paddingTop: "8px",
                  textAlign: "center",
                  lineHeight: "1.2",
                }}
              >
                Quizzes
              </p>
            </a>
            <a
              href="/drug-database"
              style={{
                color: "white",
                backgroundColor: "#81A3BB",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                // borderRadius: "10px",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  border: "2px solid #2273D8",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#4DC4FC",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  style={{ width: "30px", height: "30px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-width="2"
                    d="M1,2 L23,2 L23,9 L1,9 L1,2 Z M4,12 L5,12 L5,13 L4,13 L4,12 Z M4,5 L5,5 L5,6 L4,6 L4,5 Z M4,19 L5,19 L5,20 L4,20 L4,19 Z M1,16 L23,16 L23,23 L1,23 L1,16 Z M1,9 L23,9 L23,16 L1,16 L1,9 Z"
                  ></path>
                </svg>
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  paddingTop: "8px",
                  textAlign: "center",
                  lineHeight: "1.2",
                }}
              >
                Disease Database
              </p>
            </a>
            <a
              href="/drug-database"
              style={{
                color: "white",
                backgroundColor: "#B3B5BF",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                // borderRadius: "10px",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  border: "2px solid #2273D8",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#EA4633",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  style={{ width: "40px", height: "40px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path>
                </svg>
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  paddingTop: "8px",
                  textAlign: "center",
                  lineHeight: "1.2",
                }}
              >
                Surveys
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
