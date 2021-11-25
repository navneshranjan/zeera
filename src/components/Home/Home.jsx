import React from "react";
import Header from "../Header/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="heading">
        <h4>Projects/customer_app</h4>
        <h2>CA board</h2>
      </div>
      <div className="dashboard">
        <div className="card1">
          <h4>TO DO</h4>
        </div>
        <div className="card2">
          <h4>In progress</h4>
        </div>
        <div className="card3">
          <h4>DONE</h4>
        </div>
      </div>
    </>
  );
}

export default Home;
