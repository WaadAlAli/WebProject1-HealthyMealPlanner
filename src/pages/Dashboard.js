import { useEffect, useState } from "react";
import axios from "axios";
import StatCard from "../components/StatCard";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const getDashboardData = () => axios.get("http://localhost:5000/dashboard");
const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#a855f7", "#ec4899"];

const Dashboard = () => {
  const [cards, setCards] = useState({});
  const [pieData, setPieData] = useState([]);
  const [barData, setBarData] = useState([]);

  useEffect(() => {
    getDashboardData()
      .then((res) => {
        setCards(res.data.cards);
         // Convert avg_calories to numbers
      const pie = res.data.pieChart?.map(item => ({
        ...item,avg_calories: Number(item.avg_calories)
      })) || [];
      setPieData(pie);
      setBarData(res.data.barChart);
      })
      .catch((err) => console.error(err));
  }, []);
return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Dashboard
      </h2>

      {/* ================= CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Users" value={cards.users} />
        <StatCard title="Total Recipes" value={cards.recipes} />
        <StatCard title="Total Categories" value={cards.categories} />
        <StatCard title="Total Messages" value={cards.messages} />
      </div>

      {/* ================= CHARTS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* ===== PIE CHART ===== */}
        <div className="bg-green-50 dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow">
          <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Average Calories per Category
          </h3>

          <div className="w-full h-[250px] md:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="avg_calories"
                  nameKey="category"
                  outerRadius="80%"
                  innerRadius="45%"
                  label
                >
                  {pieData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ===== BAR CHART ===== */}
        <div className="bg-green-50  dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow">
          <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Number of Recipes per Category
          </h3>

          <div className="w-full h-[250px] md:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis
                  dataKey="name"
                  angle={-30}
                  textAnchor="end"
                  height={60}
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#f384c1ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};


export default Dashboard;
