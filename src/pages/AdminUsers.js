import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Edit, UserPlus } from "lucide-react";
import "../App.css";

export default function AdminUsers() {
 const [users, setUsers] = useState([]); 
const [formUser, setFormUser] = useState({
  id: null,
  username: "",
  email: "",
  role: "client",
  password: ""
});

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
const [selectedValue, setSelectedValue] = useState("");
 // A separate state for storing the selected role from the dropdown.
const [error, setError] = useState(false);
 //  A boolean state to show an error message if something goes wrong.
const handleChange = (e) => {
setFormUser((prev) => ({ ...prev, [e.target.name]: e.target.value
}));
};
//handleDropdownChange – selects user.role:
const handleDropdownChange = (e) => {
 const value = e.target.value; 
setSelectedValue(value);
setFormUser((prev) => ({ ...prev, role: value }));
};
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/users`);
      setUsers(res.data);
      setError(false);
    } catch (err) {
      console.log(error);
      setError(true);
    }
  };

useEffect(() => {
  fetchUsers();
}, []);
  // Delete user
  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/admin/users/delete/${id}`);
      setUsers(users.filter(u => u.UserID !== id));
    } catch (err) {
      console.log(error);
    }
  };


  // Add User
  const handleAddUser = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/admin/users/add`, formUser);
      setShowAddModal(false);
      fetchUsers();
    } catch (err) {
      console.log(error);
      setError(true);
    }
  };

  // Update or Edit User
  const handleEditUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/admin/users/update/${formUser.id}`, formUser);
      setShowEditModal(false);
      fetchUsers();
    } catch (err) {
      console.log(error);
    }
  };

  const openEditModal = (user) => {
    setFormUser({  id: user.UserID,
      username: user.Username,
       email: user.Email, 
       role: user.role, 
       password: user.password });
    setSelectedValue(user.role);
    setShowEditModal(true);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold dark:text-white">All Users</h2>
        <button
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => setShowAddModal(true)}
        >
          <UserPlus  size={20} /> Add User
        </button>
      </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead>
              <tr className="bg-green-100">
                <th className="px-4 py-2 border">Username</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Role</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
    <tr>
      <td colSpan="4" className="text-center py-4">
        No users found
      </td>
    </tr>
  ) : (
      users.map((user) => (
                <tr key={user.UserID}>
                  <td data-label="Username" className=" dark:text-white border">{user.Username}</td>
                  <td data-label="Email" className="dark:text-white border">{user.Email}</td>
                  <td data-label="Role" className=" dark:text-white border">{user.role}
                  </td>
                  <td  data-label="Actions" className=" dark:text-white border flex-wrap flex gap-2">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => openEditModal(user)}
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => deleteUser(user.UserID)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              )))}
            </tbody>
          </table>
        </div>
    

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add User</h2>
            <form onSubmit={handleAddUser}  className="space-y-3">
              <input
                type="text"
                placeholder="Username"
                className="w-full border px-3 py-2 rounded"
                name="username"
               onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-3 py-2 rounded"
                name="email"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border px-3 py-2 rounded"
                name="password"
                onChange={handleChange}
                required
              />
              <select
                name="role"
                value={selectedValue}
                onChange={handleDropdownChange}
                className="w-full border px-3 py-2 rounded"
              >
                <option value="admin">Admin</option>
                <option value="client">Client</option>
              </select>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            <form onSubmit={handleEditUser} className="space-y-3">
              <input
                type="text"
                placeholder="Username"
                value={formUser.username}
                className="w-full border px-3 py-2 rounded"
                name="username"
               onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-3 py-2 rounded"
                name="email"
                value={formUser.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border px-3 py-2 rounded"
                name="password"
                value={formUser.password}
                onChange={handleChange}
                required
              />
              <select
                name="role"
                value={selectedValue}
                onChange={handleDropdownChange}
                className="w-full border px-3 py-2 rounded"
              >
                <option value="admin">Admin</option>
                <option value="client">Client</option>
              </select>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
