import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      style={{
        width: "100vw,",
        height: "100vh",
        color: "white",
        backgroundColor: "#000A00",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Something Went Wrong</h1>
        <h1 style={{ textAlign: "center", fontSize: "50px" }}>Error 404</h1>
        <div style={{display:'flex',justifyContent:'center',margin:'40px 0px'}}>
          <Link class="fancy" to="/">
            <span class="top-key"></span>
            <span class="text">Go to Home Page</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
