import React, { useEffect, useState } from "react";
import axios from "axios";
import { Edit } from "lucide-react";

export default function AdminAbout() {
  const [about, setAbout] = useState(null);
  const [form, setForm] = useState({});
  const [file, setFile] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // FETCH ABOUT DATA (ONE ROW)
  const fetchAbout = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/about`);
    setAbout(res.data);
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // HANDLE FILE
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  // OPEN EDIT MODAL
  const openEditModal = () => {
    setForm(about);
    setFile(null);
    setShowEditModal(true);
  };

  // SAVE CHANGES
  const handleEditAbout = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("main_description", form.main_description);
    formData.append("secondary_description", form.secondary_description);
    formData.append("philosophy_title", form.philosophy_title);
    formData.append("philosophy_quote", form.philosophy_quote);
    formData.append("button_text", form.button_text);
    formData.append("button_link", form.button_link);
    formData.append("image", file ? file : form.image);

    await axios.put(
      `${process.env.REACT_APP_API_URL}/admin/about/update/${form.id}`,
      formData
    );

    setShowEditModal(false);
    fetchAbout();
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl dark:text-white font-bold mb-4">About Page Settings</h2>

      {/* TABLE */}
      {about && (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-green-100">
              <tr>
                <th className="border px-2 py-2">ID</th>
                <th className="border px-2 py-2">Title</th>
                <th className="border px-2 py-2">Main Description</th>
                <th className="border px-2 py-2">Secondary Description</th>
                <th className="border px-2 py-2">Philosophy Title</th>
                <th className="border px-2 py-2">Philosophy Quote</th>
                <th className="border px-2 py-2">Button Text</th>
                <th className="border px-2 py-2">Button Link</th>
                <th className="border px-2 py-2">Image</th>
                <th className="border px-2 py-2">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td data-label="ID" className=" dark:text-white border">{about.id}</td>
                <td data-label="Title" className=" dark:text-white border">{about.title}</td>

                <td data-label="Main Description" className="border dark:text-white max-w-xs overflow-auto">
                  {about.main_description}
                </td>

                <td data-label="Secondary Description" className="border dark:text-white max-w-xs overflow-auto">
                  {about.secondary_description}
                </td>

                <td data-label="Philosophy Title" className="border dark:text-white">{about.philosophy_title}</td>

                <td data-label="Philosophy Quote" className="border dark:text-white max-w-xs overflow-auto">
                  {about.philosophy_quote}
                </td>

                <td data-label="Button Text" className="border dark:text-white">{about.button_text}</td>
                <td data-label="Button Link" className="border dark:text-white">{about.button_link}</td>

                <td data-label="Image" className="border dark:text-white">
                  {about.image && (
                    <img
                      src={`${process.env.REACT_APP_API_URL}/images/${about.image}`}
                      alt="About"
                      className="w-20 h-20 object-cover rounded"
                    />
                  )}
                </td>

                <td data-label="Action" className="border dark:text-white text-center">
                  <button
                    onClick={openEditModal}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit size={20} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* EDIT MODAL */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[600px] max-h-[90vh] overflow-auto">
            <h3 className="text-xl font-bold mb-4">Edit About Page</h3>

            <form onSubmit={handleEditAbout} className="space-y-3">
              <input
                name="title"
                value={form.title }
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Title"
              />

              <textarea
                name="main_description"
                value={form.main_description}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Main Description"
              />

              <textarea
                name="secondary_description"
                value={form.secondary_description }
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Secondary Description"
              />

              <input
                name="philosophy_title"
                value={form.philosophy_title }
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Philosophy Title"
              />

              <textarea
                name="philosophy_quote"
                value={form.philosophy_quote }
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Philosophy Quote"
              />

              <input
                name="button_text"
                value={form.button_text }
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Button Text"
              />

              <input
                name="button_link"
                value={form.button_link }
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Button Link"
              />

              <input
                type="file"
                onChange={handleFile}
                className="w-full border p-2 rounded"
              />

              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
