import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="header"
    >
      <button class="btn-17">
        <span class="text-container">
          <span class="text">
            <Link className="link" to="/">
              Home
            </Link>
          </span>
        </span>
      </button>
      <button class="btn-17">
        <span class="text-container">
          <span class="text">
            <Link className="link" to="/about">
              About
            </Link>
          </span>
        </span>
      </button>
    </div>
  );
};

export default Header;
