// adminDashboard 


import React, { useState } from "react";
import "./AdminDashboard.css";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Nitro Eef",
      phone: "(414) 907 - 1274",
      location: "United States",
      email: "bode@gmail.com",
    },
    {
      id: 2,
      name: "Hayzed",
      phone: "(414) 907 - 1274",
      location: "Lagos State",
      email: "hayzed@gmail.com",
    },
    {
      id: 3,
      name: "Soliu",
      phone: "(414) 907 - 1274",
      location: "Lagos State",
      email: "soliu@gmail.com",
    },
    {
      id: 4,
      name: "Oloye",
      phone: "(414) 907 - 1274",
      location: "Kano State",
      email: "oloye@gmail.com",
    },
    {
      id: 5,
      name: "Tumise",
      phone: "(414) 907 - 1274",
      location: "Lagos State",
      email: "tumise@gmail.com",
    },
    {
      id: 6,
      name: "Zainab",
      phone: "(414) 907 - 1274",
      location: "Lagos State",
      email: "zainab@gmail.com",
    },
    {
      id: 7,
      name: "Basirat",
      phone: "(414) 907 - 1274",
      location: "Lagos State",
      email: "basirat@gmail.com",
    },
    {
      id: 8,
      name: "Nafisat",
      phone: "(414) 907 - 1274",
      location: "Lagos State",
      email: "nafisat@gmail.com",
    },
    {
      id: 9,
      name: "Kenny",
      phone: "(414) 907 - 1274",
      location: "Lagos State",
      email: "kenny@gmail.com",
    },
    {
      id: 10,
      name: "Anate",
      phone: "(414) 907 - 1274",
      location: "Lagos State",
      email: "anate@gmail.com",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);

  const handleEdit = (member) => {
    setIsEditing(true);
    setCurrentMember(member);
  };

  const handleSave = () => {
    setMembers(
      members.map((m) => (m.id === currentMember.id ? currentMember : m))
    );
    setIsEditing(false);
    setCurrentMember(null);
  };

  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this member?",

      buttons: [
        {
          label: "Yes",
          onClick: () =>
            setMembers(members.filter((member) => member.id !== id)),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentMember(null);
  };

  const stats = [
    { id: 1, label: "Total Members", value: members.length, color: "#e0b3ff" },
    { id: 2, label: "New Members", value: 15, color: "#ffddb3" },
    { id: 3, label: "Ongoing Contributions", value: 3, color: "#b3ffcc" },
    { id: 4, label: "Completed Ajo", value: 20, color: "#b3d9ff" },
  ];

  return (
    <div className="dashboard_wrapper">
      <AdminSidebar />
      <div className="dashboarder">
        <div className="stats">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="stat-card"
              style={{ backgroundColor: stat.color }}
            >
              <div className="stat-info">
                <h3>{stat.label}</h3>
                <p>{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {!isEditing ? (
          <div className="members-list">
            <h2>Total Members</h2>
            <table className="tabili">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Location</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {members.map((member) => (
                  <tr key={member.id}>
                    <td>{member.name}</td>
                    <td>{member.phone}</td>
                    <td>{member.location}</td>
                    <td>{member.email}</td>
                    <td>
                      <button
                        className="butt ed"
                        onClick={() => handleEdit(member)}
                      >
                        <FaPen />
                      </button>
                      <button
                        className="butt del"
                        onClick={() => handleDelete(member.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="modale">
            <div className="modale-content">
              <h2>Edit Member</h2>
              <form>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    value={currentMember.name}
                    onChange={(e) =>
                      setCurrentMember({
                        ...currentMember,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label>Phone</label>
                  <input
                    type="text"
                    value={currentMember.phone}
                    onChange={(e) =>
                      setCurrentMember({
                        ...currentMember,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label>Location</label>
                  <input
                    type="text"
                    value={currentMember.location}
                    onChange={(e) =>
                      setCurrentMember({
                        ...currentMember,
                        location: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    value={currentMember.email}
                    onChange={(e) =>
                      setCurrentMember({
                        ...currentMember,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                
                .
                <button
                  className="botini"
                  type="button"
                  onClick={handleSave}
                >
                  Save
                </button>

                <button
                  className="botinikeji"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;