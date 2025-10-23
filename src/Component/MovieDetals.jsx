import React from 'react';
import { MdBookmarkAdd, MdDelete, MdFileDownload, MdOutlineWatchLater } from 'react-icons/md';
import { Link, useLoaderData, useParams } from 'react-router';
import { addDownload } from '../Utils';
import { addsavenext } from '../Utils/index2';
import { Helmet } from 'react-helmet-async';

const MovieDetals = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(id,data)

    const singleMovie = data.find(data => data.id == id)
    console.log(singleMovie);

    const handeldownload =()=>{
        addDownload(singleMovie);
    }

    const handelSavenext =()=>{
        addsavenext(singleMovie)
    }



    const { title, poster,Description,ReleaseDate } = singleMovie
    return (
        <>
        
        <Helmet><title>Movieverse | movies</title></Helmet>
        <div className='w-11/12 mx-auto my-6 '>

            <div className="card card-side bg-white shadow-sm text-black p-3">
                <figure>
                    <img
                        className='h-60 w-96'
                        src={poster}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-black">Title : <span className='text-2xl'>{title}</span></h2>
                    <p><span className='font-bold'>Description</span> : {Description}</p>
                    <p><span className='font-bold'>Release Date </span>: {ReleaseDate}</p>


                    <Link to='/Watch'>
                    
                    <button  onClick={handelSavenext} className='btn'>Save to Watch Later<MdOutlineWatchLater /></button>

                    </Link>

                    <Link to='/download'>
                   <button  onClick={handeldownload} className='btn'>Download <MdFileDownload /> </button>
                   </Link>

                </div>
            </div>
        </div>
        </>
    );
};

export default MovieDetals;