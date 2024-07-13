// AdminSidebar.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPiggyBank, FaHistory, FaEdit } from "react-icons/fa";
import { IoAddCircleSharp, IoBagHandleOutline } from "react-icons/io5";
import { PiDiceFive, PiHandWithdrawBold } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';
import "./AdminSidebar.css";

Modal.setAppElement('#root'); // Set the root element for accessibility

const AdminSidebar = () => {
  const [profilePicture, setProfilePicture] = useState('/th.jpg');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
    console.log('User logged out');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
        closeModal();
        toast.success('Profile picture updated successfully!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, // Close the toast after 3 seconds
          onClose: () => navigate('/home') // Navigate to the homepage after the toast closes
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <FaPiggyBank size={30} />
        <h2>iSave</h2>
      </div>
      <nav className="active">
        <ul>
          <li><Link to="/admin-dashboard"><FaPiggyBank className="icon"/>Dashboard</Link></li>
          <li><Link to="/contributionlist"><IoBagHandleOutline className="icon"/>Contributions List</Link></li>
          <li><Link to="/add-contribution"><IoAddCircleSharp className="icon"/>Add New Contribution</Link></li>
          <li><Link to="/edit-admin"><FaEdit className="icon"/>Edit profile</Link></li>
          <li><Link to="/history"><FaHistory className="icon"/>Payment History</Link></li>
          <li><Link to="/roll"><PiDiceFive className="icon"/>Roll it</Link></li>
        </ul>
      </nav>

      <div className="profile-picture">
        <div className="profile-picture-container">
          <div className="profile-info">
            <img
              src={profilePicture}
              alt="user"
              className='eef'
              onClick={openModal}
            />
            <div className="profile">
              <h3 className="nitro">Nitro Eef</h3>
            </div>
          </div>
          <button className="grand-button" onClick={handleLogout}>Log Out</button>
        </div>
      </div>

      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Profile Picture Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        {/* <h2 className="omoprof">Profile Picture</h2> */}
        <button onClick={() => document.getElementById('fileInput').click()}>Change Profile Picture</button>
        <button onClick={() => toast.info('Viewing Profile Picture', { position: toast.POSITION.TOP_RIGHT })}>View Profile Picture</button>
        <button onClick={closeModal}>Close</button>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default AdminSidebar;