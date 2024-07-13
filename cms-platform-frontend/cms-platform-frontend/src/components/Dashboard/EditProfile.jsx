import React, { useState } from "react";
import SidebarWithHeader from "./SidebarWithHeader";
import "./EditProfile.css";

const initialUser = {
  name: "Adejare02",
  email: "adejare02@example.com",
  phone: "123-456-7890",
  address: "123 Main St, Lagos, Nigeria",
  accountBalance: "0.00",
  membershipStatus: "Active",
};

const EditProfile = () => {
  const [user, setUser] = useState(initialUser);
  const [profilePic, setProfilePic] = useState("../public/kenny.jpg");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    membershipStatus: "active", // Default to active
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="EditProfile">
      <SidebarWithHeader />
      <div className="edit-profile-form">
      <form>
        <div >
          <div className="editProfilePic">
            <img src={profilePic} alt="Profile" />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
            />
          </div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={user.phone}
            onChange={handleInputChange}
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={user.address}
            onChange={handleInputChange}
          />

          <label htmlFor="membershipStatus">Membership Status:</label>
          <select
            id="membershipStatus"
            name="membershipStatus"
            value={user.membershipStatus}
            onChange={handleInputChange}
          >
            <option value="active">Active</option>
            <option value="notActive">Not Active</option>
          </select>
          <div>
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default EditProfile;
