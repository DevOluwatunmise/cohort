import React, { useState } from 'react';
import AddContribution from './AddContribution';
import ContributionList from './ContributionList';
// import './ContributionManager.css';

const ContributionManager = () => {
  const [contributions, setContributions] = useState([
    { id: 1, title: 'Contribution 1', amount: 300, description: 'John Doe', date: '2024-07-01', status: 'Completed' },
    { id: 2, title: 'Contribution 2', amount: 500, description: 'Jane Smith', date: '2024-07-03', status: 'Pending' },
    { id: 3, title: 'Contribution 3', amount: 300, description: 'Bob Johnson', date: '2024-07-05', status: 'Completed' },
    // Add more initial contributions if needed
  ]);

  const addContribution = (newContribution) => {
    setContributions([...contributions, { ...newContribution, id: contributions.length + 1 }]);
  };

  return (
    <div className="contribution-manager">
      <AddContribution addContribution={addContribution} />
      <ContributionList contributions={contributions} />
    </div>
  );
};

export default ContributionManager;