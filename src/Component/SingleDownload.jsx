import React from 'react';
import { toast } from 'react-toastify';

const SingleDownload = ({ d, onDelete }) => {
    const { id, poster, title,Description } = d;

    const handleDelete = () => {
        onDelete(id);
        toast.error(`${title} Delete`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
           
            });
    };

    return (
        <div>
            <div className="card p-2 card-side bg-gradient-to-t from-sky-500 to-indigo-500 shadow-sm">
                <figure>
                    <img
                        className="h-40 w-lg rounded-md"
                        src={poster}
                        alt="Movie"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-black">{title}</h2>
                    <p className='text-black'>Description : {Description}</p>
                    <p className='text-white font-bold text-2xl'>Download successfully</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleDelete} className="btn btn-error text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDownload;
