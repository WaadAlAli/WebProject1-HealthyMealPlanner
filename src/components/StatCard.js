const StatCard = ({ title, value }) => {
  return (
    <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl shadow">
      <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mt-2">{value}</h3>
    </div>
  );
};

export default StatCard;
