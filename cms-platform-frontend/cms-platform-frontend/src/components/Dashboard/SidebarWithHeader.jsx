// SidebarWithHeader.js
import React from "react";
import { FaPiggyBank, FaHistory } from "react-icons/fa";
import { IoHomeOutline, IoBagHandleOutline } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import "./SidebarWithHeader.css";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const SidebarWithHeader = () => {
  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <FaPiggyBank size={30} />
        <h2>iSave</h2>
      </div>
      <nav className="active">
        <ul>
          <Link to="/dashboard">
            <li>
              <IoHomeOutline className="icon" />
              Dashboard
            </li>
          </Link>
          <Link to="/Contribution">
          <li>
            <IoBagHandleOutline className="icon" />
            Contribution List
          </li></Link>
          <Link to="/PaymentHistory">
            <li>
              <FaHistory className="icon" />
              Payment History
            </li>
          </Link>
          <Link to="/editProfile">
            <li>
              <FaUserEdit className="icon" />
              Edit Profile
            </li>
          </Link>
        </ul>
      </nav>

      <div className="profile">
        <h3 className="cgprofile">
          <CgProfile />
          Adejare02!
        </h3>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default SidebarWithHeader;
