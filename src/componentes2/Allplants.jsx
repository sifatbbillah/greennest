import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; // ✅ fix import

const Allplants = () => {
  const [plants, setPlants] = useState([]);

  // ✅ Fetch data from public/plant.json
  useEffect(() => {
    fetch("/plant.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Error loading plant data:", err));
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {plants.map((plant) => (
        // ✅ Return the JSX
        <div
          key={plant.plantId}
          className="border rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 bg-white flex flex-col justify-between"
        >
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div>
            <h2 className="font-semibold text-xl text-green-700 mb-1">{plant.plantName}</h2>
            <p className="text-sm text-gray-500 mb-1">{plant.category}</p>
            <p className="font-bold text-lg text-gray-800 mt-2">${plant.price}</p>
          </div>
          <Link to={`/plantDetails/${plant.plantId}`}>
            <button className="mt-3 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
              Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Allplants;
