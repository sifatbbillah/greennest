import React, { useEffect, useState } from 'react';
import { getsavenext, removesave } from '../Utils/index2';
import SingleSave from './SingleSave';
import { Helmet } from 'react-helmet-async';

const SaveForNext = () => {
    const [savemovie, setSavemovie] = useState([]);

    useEffect(() => {
        const fetchSavedMovies = async () => {
            try {
                const getSavemovies = await getsavenext();
                setSavemovie(getSavemovies || []);
            } catch (error) {
                console.error("Failed to fetch saved movies:", error);
            }
        };

        fetchSavedMovies();
    }, []);

    const handleRemove = async (id) => {
        try {
            await removesave(id);
            setSavemovie(prev => prev.filter(movie => movie.id !== id));
        } catch (error) {
            console.error("Failed to remove movie:", error);
        }
    };

    return (
      <>
      <Helmet>
        <title>Movieveerse | Your videos</title>
      </Helmet>
      
      <div className='w-9/12 mx-auto my-4'>
            {savemovie.length === 0 ? (
                <div  className="text-center py-10 text-xl text-gray-600 font-semibold bg-white rounded shadow">
                    🎬 No movies saved to watch later! Time to explore some new titles 🍿
                </div>
            ) : (
                savemovie.map((save, index) => (
                    <SingleSave key={save.id || index} save={save} onRemove={handleRemove} />
                ))
            )}
        </div>
      </>
    );
};

export default SaveForNext;
