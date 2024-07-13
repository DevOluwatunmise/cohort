import React, { useState } from "react";
import UserCard from "./UserCard";
import UserDetails from "./UserDetails";
import "./Dashboard.css";

const initialUser = {
  name: "Adejare02",
  email: "adejare02@example.com",
  phone: "123-456-7890",
  address: "123 Main St, Lagos, Nigeria",
  accountBalance: "0.00",
  membershipStatus: "Active",
};

const Dashboard = () => {
  const [user, setUser] = useState(initialUser);
  const [profilePic, setProfilePic] = useState("../public/kenny.jpg");
  const [isEditing, setIsEditing] = useState(false);

  // const handleProfilePicChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setProfilePic(e.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const toggleEditMode = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  return (
    <div className="main-content">
      <header className="dash-header">
        <div className="welcome">
          <h2>
            Welcome, <span className="username">{user.name}!</span>
          </h2>
          <p>
            My Savings:{" "}
            <span className="savings-amount">${user.accountBalance}</span>
          </p>
        </div>
        <div className="profilePic">
          <img src={profilePic} alt="Profile" />
          {/* <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
          /> */}
        </div>
      </header>

     

      <section>
        <div className="user-cards-section">
          <div className="card">
            <UserCard title="Total Savings" amount={user.accountBalance} />
          </div>
          <div className="card">
            <UserCard title="Pending Contributions" amount="0.00" />
          </div>
          <div className="card">
            <UserCard title="Withdrawable Amount" amount="0.00" />
          </div>
        </div>
      </section>

      <section className="user-details-section">
        {isEditing ? (
          <div className="edit-user-details">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleInputChange}
              />
            </label>
          </div>
        ) : (
          <UserDetails user={user} />
        )}
      </section>
    </div>
  );
};

export default Dashboard;
