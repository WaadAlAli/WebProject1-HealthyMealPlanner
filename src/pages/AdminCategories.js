import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Edit, Plus } from "lucide-react";

export default function AdminCategories() {
 const [categories, setCategories] = useState([]); 
const [formUser, setFormUser] = useState({
  categoryID: null,
  name: "",
});

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [error, setError] = useState(false);
 //  A boolean state to show an error message if something goes wrong.
const handleChange = (e) => {
setFormUser((prev) => ({ ...prev, [e.target.name]: e.target.value
}));
};
  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/categories`);
      setCategories(res.data);
      setError(false);
    } catch (err) {
      console.log(error);
      setError(true);
    }
  };

useEffect(() => {
  fetchCategories();
}, []);
  // Delete category
  const deleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/admin/categories/delete/${id}`);
      setCategories(categories.filter(u => u.categoryID !== id));
      fetchCategories();
        } catch (err) {
      console.log(error);
    }
  };


  // Add Category
  const handleAddCategory = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/admin/categories/add`, formUser);
      setShowAddModal(false);
      fetchCategories();
    } catch (err) {
      console.log(error);
      setError(true);
    }
  };

  // Update or Edit Category
  const handleEditCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/admin/categories/update/${formUser.categoryID}`, formUser);
      setShowEditModal(false);
      fetchCategories();
    } catch (err) {
      console.log(error);
    }
  };

  const openEditModal = (category) => {
    setFormUser({  categoryID: category.category_id,
      name: category.name,
         });
    setShowEditModal(true);
  };

  return (
    <div className="bg-white dark:bg-gray-800  p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl  dark:text-white font-bold">All Categories</h2>
        <button
          className="flex  items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => setShowAddModal(true)}
        >
          <Plus   size={20} /> Add Category
        </button>
      </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead>
              <tr className="bg-green-100">
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.length === 0 ? (
    <tr>
      <td colSpan="4" className="text-center py-4">
        No categories found
      </td>
    </tr>
  ) : (
      categories.map((category) => (
                <tr key={category.category_id}>
                  <td  data-label="#" className=" dark:text-white border">{category.category_id}</td>
                  <td data-label="Name" className=" dark:text-white border">{category.name}</td>
                  <td data-label="Actions" className=" border  dark:text-white flex-wrap flex gap-2">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => openEditModal(category)}
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => deleteCategory(category.category_id)}
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
            <h2 className="text-xl font-bold mb-4">Add Category</h2>
            <form onSubmit={handleAddCategory}  className="space-y-3">
              <input
                type="number"
                placeholder="Category ID"
                className="w-full border px-3 py-2 rounded"
                name="id"
               onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Category Name"
                className="w-full border px-3 py-2 rounded"
                name="name"
                onChange={handleChange}
                required
              />
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
            <h2 className="text-xl font-bold mb-4">Edit Category</h2>
            <form onSubmit={handleEditCategory} className="space-y-3">
              <input
                type="number"
                placeholder="Category ID"
                value={formUser.categoryID}
                className="w-full border px-3 py-2 rounded"
                name="id"
               onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Category Name"
                className="w-full border px-3 py-2 rounded"
                name="name"
                value={formUser.name}
                onChange={handleChange}
                required/>
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
