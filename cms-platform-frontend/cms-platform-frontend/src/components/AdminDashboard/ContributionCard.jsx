//ContributionCard.jsx

import React from 'react';
import './ContributionCard.css';

const ContributionCard = ({ contribution }) => {
  return (
    <div className="class">
    <div className="contribution-card">
      <h3>{contribution.title}</h3>
      <p>Amount: ${contribution.amount}</p>
      <p>description: {contribution.description}</p>
      <p>Date: {contribution.date}</p>
      <p>Status: {contribution.status}</p>
    </div>
    </div>
  );
};

export default ContributionCard;