import React from "react";
import Header from "../Header/Header";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="section">
        <h5>
          <a href="/">Does your teem need more from jira? </a>
          <p> Get a free trail of our Standard plan.</p>
        </h5>
      </div>
      <div className="heading">
        <div className="board">
          <h4>Projects/customer_app</h4>
          <h2>CA board</h2>
        </div>
      </div>
      <div className="search">
        <input
          type="
              text
            "
          placeholder="Search"
        />
        <div className="photo">
          <img src="./images/user.svg" alt="user" />
          <img src="./images/widget-icon.svg" alt="icon" />
        </div>
      </div>

      <div className="dashboard">
        <div className="card1">
          <h5>TO DO 1 ISSUE</h5>
          <div className="subcard">add work</div>
        </div>
        <div className="card2">
          <h>IN PROGRESS</h>
        </div>
        <div className="card3">
          <h>DONE</h>
        </div>
      </div>
    </>
  );
}

export default Home;
