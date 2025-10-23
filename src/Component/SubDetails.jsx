import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { addDownload } from '../Utils';

const SubDetails = () => {
  const { id } = useParams();
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/plant.json')
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading plant data:', err);
        setLoading(false);
      });
  }, []);

  const singlePlantdata = plants.find((plant) => plant.plantId === parseInt(id));

  if (loading)
    return <p className="text-center mt-10 text-lg text-gray-600">Loading...</p>;
  if (!singlePlantdata)
    return <p className="text-center mt-10 text-red-500">Plant not found!</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 md:flex md:gap-6">
        <img
          src={singlePlantdata.image}
          alt={singlePlantdata.plantName}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mb-0"
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-green-700 mb-2">{singlePlantdata.plantName}</h1>
          <p className="text-sm text-gray-500 mb-4">{singlePlantdata.category}</p>

          <div className="space-y-2 text-gray-700">
            <p><span className="font-semibold">💲 Price:</span> ${singlePlantdata.price}</p>
            <p><span className="font-semibold">⭐ Rating:</span> {singlePlantdata.rating}</p>
            <p><span className="font-semibold">📦 Stock:</span> {singlePlantdata.availableStock}</p>
            <p><span className="font-semibold">🧪 Care Level:</span> {singlePlantdata.careLevel}</p>
            <p><span className="font-semibold">📝 Description:</span> {singlePlantdata.description}</p>
            <p><span className="font-semibold">👤 Provider:</span> {singlePlantdata.providerName}</p>
          </div>

          {/* ✅ Add to Cart button */}
          <button
            onClick={() => addDownload(singlePlantdata)} // ✅ pass full object in arrow function
            className="mt-6 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            Add to Cart
          </button>

          {/* ✅ Back button */}
          <button
            onClick={() => navigate(-1)}
            className="mt-4 bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubDetails;
