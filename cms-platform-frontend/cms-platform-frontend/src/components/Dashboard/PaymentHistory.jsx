/// **  Payment History **//

import React, { useState } from "react";

import "./PaymentHistory.css";

import Dash from "./Dash";
import SidebarWithHeader from "./SidebarWithHeader";

const PaymentHistory = () => {
  const payments = [
    { date: "Mar 1, 2023", amount: 100, status: "Received" },
    { date: "Mar 1, 2023", amount: 100, status: "Sent" },
    { date: "Mar 1, 2023", amount: 100, status: "Received" },
    { date: "Mar 1, 2023", amount: 100, status: "Sent" },
    { date: "Mar 1, 2023", amount: 100, status: "Received" },
    { date: "Mar 1, 2023", amount: 100, status: "Received" },
  ];

  const [filter, setFilter] = useState("All");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredPayments = payments.filter((payment) => {
    if (filter === "All") return true;
    return payment.status === filter;
  });

  return (
    <div className="pay">
      <SidebarWithHeader />

      <div className="payment-history">
        <Dash />
        <h1>Payment History</h1>
        <div className="filters">
          <button className="btn" onClick={() => handleFilterChange("All")}>
            All
          </button>
          <button
            className="btn"
            onClick={() => handleFilterChange("Received")}
          >
            Received
          </button>
          <button className="btn" onClick={() => handleFilterChange("Sent")}>
            Sent
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment, index) => (
              <tr key={index}>
                <td>{payment.date}</td>
                <td>{payment.amount}</td>
                <td className={payment.status.toLowerCase()}>
                  {payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
