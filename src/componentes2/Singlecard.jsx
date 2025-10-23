const Singlecard = ({ plant, onDetailsClick }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 bg-white flex flex-col justify-between">
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
        onClick={() => onDetailsClick?.(plant)}
        className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
      >
        View Details
      </button>
    </div>
  );
};

export default Singlecard;