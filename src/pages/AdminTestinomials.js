import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Edit, MessageSquarePlus  } from "lucide-react";

export default function AdminTestinomials() {
 const [testinomials, setTestinomials] = useState([]); 
 const [file, setFile] = useState();
const [form, setForm] = useState({
    testimonial_id: null,
    name: "",
    text: "",
    rating: "",
    image: ""
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
const handleFile = (e) => {
setFile(e.target.files[0]);
console.log(e.target.files[0]); // For debugging
};
  const fetchTestinomials = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/testinomials`);
      setTestinomials(res.data);
      setError(false);
    } catch (err) {
      console.log(error);
      setError(true);
    }
  };

useEffect(() => {
  fetchTestinomials();
}, []);
  // Delete testinomials
  const deleteTestinomials = async (id) => {
    if (!window.confirm("Are you sure you want to delete this testinomial?")) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/admin/testinomials/delete/${id}`);
      setTestinomials(testinomials.filter(u => u.testimonial_id !== id));
    } catch (err) {
      console.log(error);
    }
  };


  // Add Testinomial
  const handleAddTestinomials = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const formdata = new FormData();
// Append text fields
formdata.append("name", form.name);
formdata.append("text", form.text);
formdata.append("rating", form.rating);
// Append file (the key 'image' must match multer field name)
formdata.append("image", file);
// Send to backend 
await axios.post(`${process.env.REACT_APP_API_URL}/admin/testinomials/add`, formdata, {
headers: {
"Content-Type": "multipart/form-data",
},
})
      setShowAddModal(false);
      fetchTestinomials();
    } catch (err) {
      console.log(error);
      setError(true);
    }
  };

  // Update or Edit testinomials
 const handleEditTestinomials = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("text", form.text);
  formData.append("rating", form.rating);

  if (file) {
    formData.append("image", file);
  } else {
    formData.append("image", form.image);
  }

  await axios.put(
    `${process.env.REACT_APP_API_URL}/admin/testinomials/update/${form.testimonial_id}`,
    formData
  );

  setShowEditModal(false);
  fetchTestinomials();
};

  const openEditModal = (testinomial) => {
    setForm({
    testimonial_id: testinomial.testimonial_id,
    name: testinomial.name,
    text: testinomial.text,
    rating: testinomial.rating,
    image: testinomial.image
  });
  setShowEditModal(true);
};

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl dark:text-white font-bold">All Testinomials</h2>
        <button
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => setShowAddModal(true)}
        >
          <MessageSquarePlus   size={20} /> Add Testinomial
        </button>
      </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead>
              <tr className="bg-green-100">
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Text</th>
                <th className="px-4 py-2 border">Rating</th>
                <th className="px-4 py-2 border">Image</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testinomials.length === 0 ? (
    <tr>
      <td colSpan="4" className="text-center py-4">
        No testinomials found
      </td>
    </tr>
  ) : (
      testinomials.map((testinomial) => (
                <tr key={testinomial.testimonial_id}>
                  <td data-label="Name" className=" dark:text-white border">{testinomial.name}</td>
                  <td data-label="Text" className=" dark:text-white border">{testinomial.text}</td>
                  <td data-label="Rating" className=" dark:text-white border">{testinomial.rating}
                  </td>
                   <td data-label="Image" className=" dark:text-white border">
                 <img
               src={`${process.env.REACT_APP_API_URL}/images/${testinomial.image}`}
               alt={testinomial.name}
              className="w-16 h-16 object-cover rounded"
  />
</td>

                  <td data-label="Actions" className="dark:text-white border flex flex-wrap gap-2">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => openEditModal(testinomial)}
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => deleteTestinomials(testinomial.testimonial_id)}
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
            <h2 className="text-xl font-bold mb-4">Add Testinomial</h2>
            <form onSubmit={handleAddTestinomials}  className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full border px-3 py-2 rounded"
                name="name"
               onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Text"
                className="w-full border px-3 py-2 rounded"
                name="text"
                onChange={handleChange}
                required
              />
              <input
               type="number"
                placeholder="Rating"
                className="w-full border px-3 py-2 rounded"
                name="rating"
                onChange={handleChange}
                required
              />
              <input
               type="file"
                placeholder="Profile"
                className="w-full border px-3 py-2 rounded"
                name="image"
                onChange={handleFile}
                
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

      {/* Edit Testinomial Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Testinomial</h2>
            <form onSubmit={handleEditTestinomials} className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                className="w-full border px-3 py-2 rounded"
                name="name"
               onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Text"
                className="w-full border px-3 py-2 rounded"
                name="text"
                value={form.text}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                placeholder="Rating"
                className="w-full border px-3 py-2 rounded"
                name="rating"
                value={form.rating}
                onChange={handleChange}
                required
              />
              <input
               type="file"
                placeholder="Profile"
                className="w-full border px-3 py-2 rounded"
                name="image"
                onChange={handleFile}
                
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
