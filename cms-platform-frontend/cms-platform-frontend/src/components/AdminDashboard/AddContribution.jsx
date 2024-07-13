import React, { useState } from "react";
import "./AddContribution.css";

const AddContribution = ({
  handleSubmit,
  title,
  amount,
  description,
  date,
  status,
  setTitle,
  setAmount,
  setDescription,
  setDate,
  setStatus,
}) => {


  
  return (


    
    <div className="nitroeef">
      <div className="add-contribution">
        <h2>Add New Contribution</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              value={description}
              className="texttroy"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <button type="submit">Add Contribution</button>
        </form>
      </div>
    </div>

    
  );
};

export default AddContribution;