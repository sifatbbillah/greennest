import React from 'react';

const SingleSave = ({ save, onRemove }) => {
    const { id, poster, title ,Description} = save;

    const handleDelete = () => {
        onRemove(id);
    };

    return (
        <div className="card card-side bg-gradient-to-t from-sky-500 to-green-500 shadow-md my-4 p-2 rounded-lg">
            <figure>
                <img
                    className="h-40 w-lg rounded-md"
                    src={poster}
                    alt={title}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{title}</h2>
                <p>Description :{Description}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleDelete} className="btn btn-error text-white">
                        Remove from list 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleSave;
