import React, { useEffect, useState } from "react";
import Singlecard from "../componentes2/Singlecard";

const Home = () => {
  const [plants, setPlants] = useState([]);

  // ✅ Fetch data from public/plant.json
  useEffect(() => {
    fetch("/plant.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Error loading plant data:", err));
  }, []);

  // ✅ Limit to first 6 plants
  const topSixPlants = plants.slice(0, 6);

  return (
    <>
      <div className="bg-[radial-gradient(#ffffff33_1px,#0f172a_1px)] bg-[size:20px_20px] min-h-screen">
        <h1 className="font-bold mb-12 text-center text-4xl text-purple-500">
          🌿 Top Rated Indoor Plants
        </h1>

        {/* ✅ Display only first 6 plants */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {topSixPlants.map((plant) => (
            <Singlecard key={plant.plantId} plant={plant} />
          ))}
        </div>

        <h1 className="font-bold my-10 text-center text-4xl text-purple-500">
          🌱 Subscription Plan
        </h1>
      </div>
    </>
  );
};

export default Home;
