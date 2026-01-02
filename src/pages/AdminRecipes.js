import { useEffect, useState } from "react";
import axios from "axios";
import { Edit, Trash2, Plus, Search,Filter,ArrowUpDown } from "lucide-react";

export default function AdminRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    calories: "",
    protein: "",
    carbs: "",
    fats: "",
    category_id: "",
    image: ""
  });

  useEffect(() => {
    fetchRecipes();
    fetchCategories();
  }, []);

  const fetchRecipes = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/recipes`);
    setRecipes(res.data);
  };

  const fetchCategories = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/categories`);
    setCategories(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openAdd = () => {
    setForm({
      name: "",
      description: "",
      calories: "",
      protein: "",
      carbs: "",
      fats: "",
      category_id: "",
      image: ""
    });
    setImage(null);
    setEditingId(null);
    setOpen(true);
  };

  const openEdit = (r) => {
    setForm(r);
    setEditingId(r.recipe_id);
    setOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

  // Add text fields
  data.append("name", form.name);
  data.append("description", form.description);
  data.append("calories", form.calories);
  data.append("protein", form.protein);
  data.append("carbs", form.carbs);
  data.append("fats", form.fats);
  data.append("category_id", form.category_id);

  // Add image if selected
    if (image) data.append("image", image);
// Decide add or edit
    if (editingId) {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/admin/recipes/update/${editingId}`,
        data
      );
    } else {
      await axios.post(`${process.env.REACT_APP_API_URL}/admin/recipes/add`, data);
    }

    setOpen(false);
    fetchRecipes();
  };

  const deleteRecipe = async (id) => {
    if (!window.confirm("Delete this recipe?")) return;
    await axios.delete(`${process.env.REACT_APP_API_URL}/admin/recipes/delete/${id}`);
    fetchRecipes();
  };
  const filteredRecipes = recipes
    .filter((r) =>
      r.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((r) =>
      filterCategory ? r.category_name === filterCategory : true
    )
    .sort((a, b) => {
      if (sortBy === "id") return a.recipe_id - b.recipe_id;
      if (sortBy === "calories") return a.calories - b.calories;
      return 0;
    });
  return (
   <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl dark:text-white font-bold">Recipes</h1>
        <button onClick={openAdd}  className="flex items-center gap-2 bg-green-600
         text-white px-4 py-2 rounded hover:bg-green-700">
          <Plus size={18} /> Add Recipe
        </button>
      </div>
        {/*  SEARCH / FILTER / SORT */}
      <div className="flex flex-wrap gap-3 mb-4 items-center">

        {/* SEARCH */}
        <div className="flex items-center gap-2 border px-3 py-2 rounded">
          <Search size={16} className="dark:text-white text-gray-500" />
          <input
            className="outline-none dark:bg-gray-800 dark:text-white"
            placeholder="Search recipe..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* FILTER */}
        <div className="flex items-center gap-2 border px-3 py-2 rounded">
          <Filter size={16} className="dark:text-white text-gray-500" />
          <select
            className="outline-none dark:bg-gray-800 dark:text-white"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c.category_id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* SORT */}
        <div className="flex items-center gap-2 border px-3 py-2 rounded">
          <ArrowUpDown size={16} className="dark:text-white text-gray-500" />
          <select
            className="outline-none dark:bg-gray-800 dark:text-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort</option>
            <option value="id">ID</option>
            <option value="calories">Calories</option>
          </select>
        </div>
      </div>
      <table className="min-w-full table-auto border">
        <thead>
          <tr className="bg-green-100">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Calories</th>
            <th className="px-4 py-2 border">Protein</th>
            <th className="px-4 py-2 border">Carbs</th>
            <th className="px-4 py-2 border">Fats</th>
            <th className="px-4 py-2 border">Category</th>
            <th className="px-4 py-2 border"> Image</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecipes.map((r) => (
            <tr key={r.recipe_id}>
              <td data-label="ID" className=" dark:text-white border">{r.recipe_id}</td>
              <td data-label="Name" className=" dark:text-white border">{r.name}</td>
              <td data-label="Description" className=" dark:text-white border">{r.description}</td>
              <td data-label="Calories" className=" dark:text-white border">{r.calories}</td>
              <td data-label="Protein" className=" dark:text-white border">{r.protein}</td>
              <td data-label="Carbs" className=" dark:text-white border">{r.carbs}</td>
              <td data-label="Fats" className=" dark:text-white border">{r.fats}</td>
              <td data-label="Category Name" className="dark:text-white border font-semibold">
                {r.category_name}
              </td>
              <td data-label="Image" className="dark:text-white border">
                {r.image && (
                  <img
                    src={`${process.env.REACT_APP_API_URL}/images/${r.image}`}
                    className="w-14 h-14 object-cover rounded"
                  />
                )}
              </td>
              <td data-label="Actions" className=" dark:text-white border flex-wrap  flex gap-2">
                <button onClick={() => openEdit(r)} className="text-blue-600 hover:text-blue-800">
                  <Edit size={16} />
                </button>
                <button onClick={() => deleteRecipe(r.recipe_id)} className="text-red-600 hover:text-red-800">
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold text-green-600 mb-4"> Recipe</h2>
            <form onSubmit={handleSubmit}  className="space-y-3">
            <input name="name" value={form.name} className="w-full border px-3 py-2 rounded"
             onChange={handleChange} placeholder="Name" />
            <textarea name="description" value={form.description} className="w-full border px-3 py-2 rounded"
            onChange={handleChange} placeholder="Description" />
            <input name="calories" value={form.calories} className="w-full border px-3 py-2 rounded"
             onChange={handleChange} placeholder="Calories" />
            <input name="protein" value={form.protein} className="w-full border px-3 py-2 rounded"
            onChange={handleChange} placeholder="Protein" />
            <input name="carbs" value={form.carbs} className="w-full border px-3 py-2 rounded"
            onChange={handleChange} placeholder="Carbs" />
            <input name="fats" value={form.fats} className="w-full border px-3 py-2 rounded"
            onChange={handleChange} placeholder="Fats" />

            {/* ✅ CATEGORY DROPDOWN */}
            <select
              name="category_id"
              value={form.category_id}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            >
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c.category_id} value={c.category_id}>
                  {c.name}
                </option>
              ))}
            </select>

            <input type="file" onChange={(e) => setImage(e.target.files[0])} />

            <div  className="flex justify-end gap-2 mt-4">
              <button type="button" onClick={() => setOpen(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
              <button type="submit"   className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700">
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
