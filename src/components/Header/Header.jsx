import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="content">
        <ul className="navbar">
          <a href className="logo">
            <img src="./images/nav-work.svg" alt="pic" />
            <img className="pic" src="./images/jira.svg" alt="pic" />
          </a>
          <div className="button">
            <a href="/">
              Your Work <img src="./images/down-icon.svg" alt="arrow" />
            </a>
            <a href="/">
              Projects <img src="./images/down-icon.svg" alt="arrow" />
            </a>
            <a href="/">
              Filters <img src="./images/down-icon.svg" alt="arrow" />
            </a>
            <a href="/">
              {" "}
              Dashboard <img src="./images/down-icon.svg" alt="arow" />
            </a>
            <a href="/">
              People <img src="./images/down-icon.svg" alt="arrow" />
            </a>
            <a href="/">
              Apps <img src="./images/down-icon.svg" alt="arrow" />
            </a>
          </div>
          <input
            className="search"
            type="
              text
            "
            placeholder="Search"
          />
          <div className="notification">
            <img src="./images/nav-notifications.svg" />
          </div>
          <div className="user">
            <img src="./images/user.svg" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
