import React from "react";
import "../Style/Style.css";

const NavLayout = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#F8F9FA",
      }}
    >
      <nav style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <a href="/" style={{ marginRight: "auto" }}>
          <img
            src="https://hidoc-files.sgp1.digitaloceanspaces.com/hidoc-client-files/1703756420122.jpg"
            className="nav-logo"
            alt="logo"
            title="homepage"
            style={{ width: "120px", height: "30px", marginLeft: "1rem" }}
          />
        </a>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div className="navbar-nav">
            <a className="nav-link" rel="noopener noreferrer" href="/journal">
              Journal
            </a>
            <span className="nav-menu-dividers">|</span>
            <a className="nav-link " href="/articles">
              Articles
            </a>
            <span className="nav-menu-dividers">|</span>
            <a className="nav-link " href="/news">
              News
            </a>
            <span className="nav-menu-dividers">|</span>
            <a className="nav-link " href="/quiz">
              Quizzes
            </a>
            <span className="nav-menu-dividers">|</span>
            <a className="nav-link " href="/webinar">
              Webinars
            </a>
            <span className="nav-menu-dividers">|</span>
            <a className="nav-link " href="/conferences">
              Conferences
            </a>
            <span className="nav-menu-dividers">|</span>
            <a className="nav-link" href="/about_us">
              About us
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            aria-controls="responsive-navbar-nav"
            type="button"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            style={{
              width: "20px",
              height: "40px",
              marginRight: "1rem",
              cursor: "pointer",

              padding: "0",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <div
              className="navbar-toggler-icon"
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "gray",
                margin: "4px 0",
              }}
            ></div>
            <div
              className="navbar-toggler-icon"
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "gray",
                margin: "4px 0",
              }}
            ></div>
            <div
              className="navbar-toggler-icon"
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "gray",
                margin: "4px 0",
              }}
            ></div>
          </button>

          <div
            style={{
              display: "flex",
              border: "2px solid gray",
              borderRadius: "20px 20px 20px 20px",
              justifyContent: "center",
              marginRight: "1rem",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <i
              style={{
                fontSize: "18px",
                marginRight: "1rem",
                color: "black",
                cursor: "pointer",
              }}
              className="fa"
            >
              &#xf091;
            </i>
            <p style={{ margin: 0, color: "red", fontSize: "bolder" }}>274</p>
          </div>

          <a href="#" role="button" className="right-logo" tabIndex="0">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="login-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "gray", height: "20px", width: "30px" }}
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavLayout;
