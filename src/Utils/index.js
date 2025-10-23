import { toast } from "react-toastify";

export const getDownload = () => {
  const Download = localStorage.getItem('Download');
  if (Download) return JSON.parse(Download);
  return [];
};

export const addDownload = (plant) => {
  const Download = getDownload();

  const isExist = Download.find(d => d.plantId === plant.plantId); // ✅ match plantId
  if (isExist) {
    toast.warn('Already in your list!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return; // Stop further execution
  }

  Download.push(plant);
  localStorage.setItem('Download', JSON.stringify(Download));
  toast.success('Added to your list!', {
    position: "top-right",
    autoClose: 3000,
    theme: "light",
  });
};

export const removeDownload = (plantId) => {
  const Download = getDownload();
  const remainingDownload = Download.filter(d => d.plantId !== plantId);
  localStorage.setItem('Download', JSON.stringify(remainingDownload));
};
