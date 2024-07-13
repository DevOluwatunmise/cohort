import React from 'react'
import SidebarWithHeader from './SidebarWithHeader'
import "./ContributionList.css"

const ContributionList = () => {
  return (
    <div>
      <div className='ContributionList'>
        <div>
            <SidebarWithHeader/>
        </div>
        <div className="bodeleyi">
        
        <div className="contribution-list">
          <div className="header">
            <h2>Ongoing Contributions</h2>
           
          </div>
          <ul>
            
              <li  className="contribution-item">
                <div className="contribution-info">
                  <p className="contribution-title"><strong>Title:</strong> Contribution</p>
                  <p className="contribution-details fr"><strong>Amount:</strong> 2,000</p>
                  <p className="contribution-details fr"><strong>Description:</strong> Ajo Member</p>
                  <p className="contribution-details fr"><strong>Date:</strong> 12-10-2024</p>
                  <p className="contribution-details fr"><strong>Status:</strong> Active</p>
                </div>
             
              </li>
           
          </ul>
        </div>
        <div className="contribution-list">
          <div className="header">
            <h2>Ongoing Contributions</h2>
           
          </div>
          <ul>
            
              <li  className="contribution-item">
                <div className="contribution-info">
                  <p className="contribution-title"><strong>Title:</strong> Contribution</p>
                  <p className="contribution-details fr"><strong>Amount:</strong> 2,000</p>
                  <p className="contribution-details fr"><strong>Description:</strong> Ajo Member</p>
                  <p className="contribution-details fr"><strong>Date:</strong> 12-10-2024</p>
                  <p className="contribution-details fr"><strong>Status:</strong> Active</p>
                </div>
             
              </li>
           
          </ul>
        </div>
        <div className="contribution-list">
          <div className="header">
            <h2>Ongoing Contributions</h2>
           
          </div>
          <ul>
            
              <li  className="contribution-item">
                <div className="contribution-info">
                  <p className="contribution-title"><strong>Title:</strong> Contribution</p>
                  <p className="contribution-details fr"><strong>Amount:</strong> 2,000</p>
                  <p className="contribution-details fr"><strong>Description:</strong> Ajo Member</p>
                  <p className="contribution-details fr"><strong>Date:</strong> 12-10-2024</p>
                  <p className="contribution-details fr"><strong>Status:</strong> Active</p>
                </div>
             
              </li>
           
          </ul>
        </div>
  
        
      </div>
  
      </div>
    </div>
  )
}

export default ContributionList
