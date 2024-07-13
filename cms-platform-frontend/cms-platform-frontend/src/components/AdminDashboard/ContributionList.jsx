import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './ContributionList.css';




const ContributionList = ({ contributions  }) => {
  return (



    
    <div className="bodeleyi">
        
      <div className="contribution-list">
        <div className="header">
          <h2>Ongoing Contributions</h2>
          <Link to="/admin-dashboard" className="back-button">
            <FaArrowLeft size={20} /> Back to Dashboard
          </Link>
        </div>
        <ul>
          {contributions.map((contribution, index) => (
            <li key={index} className="contribution-item">
              <div className="contribution-info">
                <p className="contribution-title"><strong>Title:</strong> {contribution.title}</p>
                <p className="contribution-details fr"><strong>Amount:</strong> {contribution.amount}</p>
                <p className="contribution-details fr"><strong>Description:</strong> {contribution.description}</p>
                <p className="contribution-details fr"><strong>Date:</strong> {contribution.date}</p>
                <p className="contribution-details fr"><strong>Status:</strong> {contribution.status}</p>
              </div>
             
            </li>
          ))}
        </ul>
      </div>

      
    </div>
  );
};

export default ContributionList;