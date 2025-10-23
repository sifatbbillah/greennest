import React, { useEffect, useState } from 'react';
import { getDownload, removeDownload } from '../Utils';
import SingleDownload from './SingleDownload';
import { Helmet } from 'react-helmet-async';

const Download = () => {
    const [getdown, setDown] = useState([]);

    useEffect(() => {
        const saveDownload = getDownload();
        setDown(saveDownload);
    }, []);

    const handleDelete = (id) => {
        removeDownload(id);
        setDown(prev => prev.filter(item => item.id !== id));
    };

    return (
        <>
        <Helmet><title>Movieverse | Download</title></Helmet>        
        <div className='w-9/12 mx-auto my-4'>
            {
                getdown.length === 0 ? (
                    <div className="text-center py-10 text-xl text-gray-600 font-semibold bg-white rounded shadow">
                        🚫 No downloads yet. Start downloading your first movie!
                    </div>
                ) : (
                    <div className='grid lg:grid-cols-1 space-y-3'>
                        {
                            getdown.map(d => (
                                <SingleDownload key={d.id} d={d} onDelete={handleDelete} />
                            ))
                        }
                    </div>
                )
            }
        </div>
        </>
    );
};

export default Download;
