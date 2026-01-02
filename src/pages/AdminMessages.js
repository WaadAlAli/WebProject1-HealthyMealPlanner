import React, { useEffect, useState } from "react";
import axios from "axios";
import { Check, Trash2 } from "lucide-react";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/admin/messages");
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const markAsRead = async (id) => {
    try {
      await axios.put(`http://localhost:5000/admin/messages/read/${id}`);
      fetchMessages();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await axios.delete(`http://localhost:5000/admin/messages/delete/${id}`);
      fetchMessages();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-5xl mx-auto mt-12">
      <h2 className="text-2xl dark:text-white font-bold mb-4">Contact Messages</h2>

      <table className="min-w-full table-auto border">
        <thead>
          <tr className="bg-green-100">
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Message</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-4">
                No messages found
              </td>
            </tr>
          ) : (
            messages.map((msg) => (
              <tr key={msg.message_id} className={!msg.is_read ? "font-bold" : ""}>
                <td data-label="Name" className=" dark:text-white border">{msg.name}</td>
                <td data-label="Email" className=" dark:text-white border">{msg.email}</td>
                <td data-label="Message" className=" dark:text-white border">{msg.message}</td>
                <td data-label="Date" className=" dark:text-white border">{new Date(msg.created_at).toLocaleString()}</td>
                <td data-label="Status" className=" dark:text-white border">
                  {msg.is_read ? "Read" : "Unread"}
                </td>
                <td data-label="Actions" className="  dark:text-white border flex flex-wrap gap-2">
                  {!msg.is_read && (
                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                      onClick={() => markAsRead(msg.message_id)}
                    >
                      <Check size={16} /> Mark as Read
                    </button>
                  )}
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    onClick={() => deleteMessage(msg.message_id)}
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
