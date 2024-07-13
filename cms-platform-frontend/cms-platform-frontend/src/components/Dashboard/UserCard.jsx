import React from "react";
import "./UserCard.css";

const UserCard = ({ title, amount }) => {
  return (
    <div className="user-card">
      <h3>{title}</h3>
      <p>${amount}</p>
    </div>
  );
};

export default UserCard;
