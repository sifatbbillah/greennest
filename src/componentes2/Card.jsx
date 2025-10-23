import React, { useState, useEffect } from "react";
import { getDownload, removeDownload } from "../Utils";
import { toast } from "react-toastify";

const Card = () => {
  const [plants, setPlants] = useState([]);

  // Load plants from localStorage on mount
  useEffect(() => {
    setPlants(getDownload());
  }, []);

  // Handle remove
  const handleRemove = (plantId) => {
    removeDownload(plantId);
    setPlants(getDownload()); // update state after removal
    toast.info("Removed from your list!", { autoClose: 2000, theme: "light" });
  };

  if (plants.length === 0)
    return <p className="text-center mt-10 text-gray-500">No plants in your list.</p>;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {plants.map((plant) => (
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
          <button
            onClick={() => handleRemove(plant.plantId)}
            className="mt-3 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
