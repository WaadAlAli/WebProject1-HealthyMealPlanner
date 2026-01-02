import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminContact() {
  const [form, setForm] = useState({ 
    contact_id: "", 
    phone: "",
    email: "",
    location: "", 
    map_image: "" });
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchContact = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/contact`);
      setForm(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => { fetchContact(); }, []);

  const handleChange = (e) => { setForm(prev => ({ ...prev, [e.target.name]: e.target.value })); };
  const handleFile = (e) => { setFile(e.target.files[0]); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("phone", form.phone);
    data.append("email", form.email);
    data.append("location", form.location);
    if (file) data.append("map_image", file); else data.append("map_image", form.map_image);

    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/admin/contact/update/${form.contact_id}`, data);
      setShowModal(false);
      fetchContact();
      alert("Contact info updated!");
    } catch (err) {
      console.log(err);
      alert("Error updating contact info");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-12">
      <h2 className="text-2xl dark:text-white font-bold mb-4">Admin Contact Settings</h2>

      <table className="min-w-full table-auto border mb-4">
        <thead>
          <tr className="bg-green-100">
            <th className="px-4 py-2 border">Phone</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Location</th>
            <th className="px-4 py-2 border">Map</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Phone" className=" dark:text-white border">{form.phone}</td>
            <td data-label="Email" className=" dark:text-white border">{form.email}</td>
            <td data-label="Location" className=" dark:text-white border">{form.location}</td>
            <td data-label="Image" className=" dark:text-white border">
              {form.map_image && 
              <img src={`${process.env.REACT_APP_API_URL}/images/${form.map_image}`}
               alt="Map" 
               className="w-24 h-24 object-cover rounded" />}
            </td>
            <td data-label="Action" className=" dark:text-white border">
              <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700" 
              onClick={() => setShowModal(true)}>Edit</button>
            </td>
          </tr>
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold text-green-600   mb-4">Edit Contact Info</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="text" name="phone" value={form.phone}
               onChange={handleChange} className="w-full border px-3 py-2 rounded" placeholder="Phone" required/>
              <input type="email" name="email" value={form.email} 
              onChange={handleChange} className="w-full border px-3 py-2 rounded" placeholder="Email" required/>
              <input type="text" name="location" value={form.location} 
              onChange={handleChange} className="w-full border px-3 py-2 rounded" placeholder="Location" required/>
              <input type="file" name="map_image" onChange={handleFile} 
              className="w-full border px-3 py-2 rounded"/>
              <div className="flex justify-end gap-2 mt-4">
                <button type="button" className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                 onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" 
                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
