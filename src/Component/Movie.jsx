import React from 'react';
import { Link, Links, useNavigate } from 'react-router';

const Movie = ({ movie }) => {
    

    const navigate = useNavigate();
    const { poster, title ,id} = movie
    return (
        <div className="bg-amber-50 rounded-lg shadow-md flex-col justify-center items-center overflow-hidden ">
            <img src={poster} alt={title} className="w-full h-44 object-cover" />

           <button  onClick={() => navigate(`/moviedetls/${id}`)}
             className="relative w-full inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Watch</span>
            
           </button>

        </div>
    );
};

export default Movie;