import { useEffect, useState } from "react";
import { getAllUsers, deleteUser, updateUser } from "../services/userService";
import { User, UpdateUserRequest } from "../types/User";
import { toast } from "react-toastify";
import "./Auth.css";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [editData, setEditData] = useState<UpdateUserRequest>({});

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      console.log(data)
      setUsers(data);
    } catch (err) {
      toast.error("Failed to fetch users");
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        toast.success("User deleted successfully");
        fetchUsers();
      } catch (err) {
        toast.error("Delete failed");
      }
    }
  };

  const handleEditClick = (user: User) => {
    setEditUser(user);
    setEditData({
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      role: user.role,
    });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async () => {
    if (editUser) {
      try {
        await updateUser(editUser.id, editData);
        toast.success("User updated successfully");
        setEditUser(null);
        fetchUsers();
      } catch (err) {
        toast.error("Update failed");
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="auth-container">
      <div className="auth-card" style={{ width: "100%", maxWidth: "800px" }}>
        <h2 className="auth-title">📋 All Registered Users</h2>

        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#800000", color: "#fff" }}>
                  <th style={{ padding: "12px", textAlign: "left" }}>Full Name</th>
                  <th style={{ padding: "12px", textAlign: "left" }}>Email</th>
                  <th style={{ padding: "12px", textAlign: "left" }}>Phone</th>
                  <th style={{ padding: "12px", textAlign: "left" }}>Role</th>
                  <th style={{ padding: "12px", textAlign: "left" }}>Actions</th>
                </tr>
              </thead>
              <tbody>

                {users.length===0? <td colSpan={5} style={tdStyle}>No Data Found</td>:users.map((user) => (
                  <tr key={user.id} style={{ borderBottom: "1px solid #ccc" }}>
                    <td style={tdStyle}>{user.fullName}</td>
                    <td style={tdStyle}>{user.email}</td>
                    <td style={tdStyle}>{user.phone}</td>
                    <td style={tdStyle}>{user.role}</td>
                    <td style={tdStyle}>
                      <button
                        className="auth-button"
                        style={{ marginRight: "10px", padding: "6px 12px" }}
                        onClick={() => handleEditClick(user)}
                      >
                        Edit
                      </button>
                      <button
                        className="auth-button"
                        style={{ background: "crimson", padding: "6px 12px" }}
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editUser && (
        <div className="modal-overlay">
          <div className="auth-card">
            <h3 className="auth-title">Edit User</h3>
            <div className="auth-form">
              <div className="input-group">
                <input
                  type="text"
                  name="fullName"
                  value={editData.fullName || ""}
                  onChange={handleEditChange}
                  placeholder="Full Name"
                  className="auth-input"
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={editData.email || ""}
                  onChange={handleEditChange}
                  placeholder="Email"
                  className="auth-input"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="phone"
                  value={editData.phone || ""}
                  onChange={handleEditChange}
                  placeholder="Phone"
                  className="auth-input"
                />
              </div>
              <div className="input-group">
                <select
                  name="role"
                  value={editData.role || ""}
                  onChange={handleEditChange}
                  className="auth-input"
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button className="auth-button" onClick={handleEditSubmit}>
                  Save Changes
                </button>
                <button
                  className="auth-button"
                  style={{ background: "gray" }}
                  onClick={() => setEditUser(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

//const thStyle = {
 // padding: "10px",
 // textAlign: "left",
//};

const tdStyle = {
  padding: "10px",
};
