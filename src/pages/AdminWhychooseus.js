import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Edit, HeartPlus  } from "lucide-react";

export default function AdminWhyChooseUs() {
 const [features, setFeatures] = useState([]); 
const [form, setForm] = useState({
  reason_id: null,
  icon: "",
  title: "",
  description: "",
  orderNumber: 0
});

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [error, setError] = useState(false);
 //  A boolean state to show an error message if something goes wrong.
const handleChange = (e) => {
setForm((prev) => ({ ...prev, [e.target.name]: e.target.value
}));
};

  const fetchWhyChooseUs = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/whychooseus`);
      setFeatures(res.data);
      setError(false);
    } catch (err) {
      console.log(error);
      setError(true);
    }
  };

useEffect(() => {
  fetchWhyChooseUs();
}, []);
  // Delete feature
  const deleteFeatures = async (id) => {
    if (!window.confirm("Are you sure you want to delete this feature?")) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/admin/whychooseus/delete/${id}`);
      setFeatures(features.filter(u => u.reason_id !== id));
      fetchWhyChooseUs();
    } catch (err) {
      console.log(error);
    }
  };


  // Add feature
  const handleAddFeatures = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/admin/whychooseus/add`, form);
      setShowAddModal(false);
      fetchWhyChooseUs();
    } catch (err) {
      console.log(error);
      setError(true);
    }
  };

  // Update or Edit feature
  const handleEditFeatures = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/admin/whychooseus/update/${form.reason_id}`, form);
      setShowEditModal(false);
      fetchWhyChooseUs();
    } catch (err) {
      console.log(error);
    }
  };

  const openEditModal = (feature) => {
    setForm({  
      icon: feature.icon,
      title: feature.title, 
       description: feature.description ,
       orderNumber: feature.order_number, 
    });
    setShowEditModal(true);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl dark:text-white font-bold">All Features</h2>
        <button
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => setShowAddModal(true)}
        >
          <HeartPlus  size={20} /> Add Feature
        </button>
      </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead>
              <tr className="bg-green-100">
                <th className="px-4 py-2 border">Icon</th>
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Order Number</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {features.length === 0 ? (
    <tr>
      <td colSpan="4" className="text-center py-4">
        No Features found
      </td>
    </tr>
  ) : (
      features.map((feature) => (
                <tr key={feature.reason_id} >
                  <td data-label="Icon" className=" dark:text-white border">{feature.icon}</td>
                  <td data-label="Title" className=" dark:text-white border">{feature.title}</td>
                  <td data-label="Description" className=" dark:text-white border">{feature.description}
                  </td>
                  <td data-label="Order Number" className=" dark:text-white border">{feature.order_number}</td>
                  <td data-label="Actions" className="dark:text-white border flex flex-wrap gap-2">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => openEditModal(feature)}
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => deleteFeatures(feature.reason_id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              )))}
            </tbody>
          </table>
        </div>
    

      {/* Add Testinomial Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add Feature</h2>
            <form onSubmit={handleAddFeatures}  className="space-y-3">
              <input
                type="text"
                placeholder="Icon name"
                className="w-full border px-3 py-2 rounded"
                name="iconName"
               onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Title"
                className="w-full border px-3 py-2 rounded"
                name="title"
                onChange={handleChange}
                required
              />
              <input
               type="text"
                placeholder="Description"
                className="w-full border px-3 py-2 rounded"
                name="description"
                onChange={handleChange}
                required
              /><input
               type="number"
                placeholder="Order Number"
                className="w-full border px-3 py-2 rounded"
                name="orderNumber"
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

      {/* Edit Feature Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Feature</h2>
            <form onSubmit={handleEditFeatures} className="space-y-3">
              <input
                type="text"
                placeholder="Icon Name"
                value={form.icon}
                className="w-full border px-3 py-2 rounded"
                name="iconName"
               onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Title"
                className="w-full border px-3 py-2 rounded"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Description"
                className="w-full border px-3 py-2 rounded"
                name="description"
                value={form.description}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                placeholder="Order Number"
                className="w-full border px-3 py-2 rounded"
                name="orderNumber"
                value={form.orderNumber}
                onChange={handleChange}
                required
              />
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
