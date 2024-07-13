import React from "react";
import "./PaymentHistory.css";

const Dash = () => {
  return (
    <div>
      <header className="dash-header">
        <div className="welcome">
          <h2>
            Welcome, <span className="username">Adejare02!</span>
          </h2>
        </div>
        <div className="profilePic">
          <img src="../public/kenny.jpg" alt="Profile" />
        </div>
      </header>
      <div className="dashboard">
        <div className="earnings">
          <h2>Total Earnings</h2>
          <p className="earn">#430.00</p>
          <span>as of 01-December 2022</span>
        </div>
        <div className="contributed">
          <h2>Total Contributed</h2>
          <p className="contribute">-#400.00</p>
          <span>as of 01-December 2022</span>
        </div>
      </div>
    </div>
  );
};

export default Dash;
