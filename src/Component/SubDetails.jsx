import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData, useParams } from 'react-router';
import { toast, Bounce } from 'react-toastify'; // ✅ Import Bounce
import Swal from 'sweetalert2';

const SubDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singlcard = data.find(data => data.id == id);

  const handleSubscribe = () => {
    Swal.fire({
      title: 'Subscribed!',
      text: 'You have successfully subscribed.',
      icon: 'success',
      confirmButtonColor: '#10B981',
    });

    toast.success('✅ Successfully Subscribed!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce, // ✅ Proper use
    });
  };

  const {
    name, thumbnail_logo, frequency, price, description,
    features, subscription_benefits, ratings, number_of_reviews,
  } = singlcard;

  return (
    <>
      <Helmet><title>Movieverse | Subscription</title></Helmet>
      <div className="p-6 my-5 mx-auto border rounded-lg shadow-[...] w-90 bg-[...]">
        <img src={thumbnail_logo} alt={`${name} logo`} className="h-16 mb-4 object-contain mx-auto" />
        <h2 className="text-xl font-bold mb-2 text-center">{name}</h2>
        <p className="text-lg font-semibold text-center mb-4">${price} / {frequency}</p>
        <p className="text-white font-bold text-sm mb-4 text-center">{description}</p>

        <div className="mb-4">
          <h3 className="font-semibold">Features:</h3>
          <ul className="list-disc list-inside text-sm text-white">
            {features.map((feature, index) => <li key={index}>{feature}</li>)}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Benefits:</h3>
          <ul className="list-disc list-inside text-sm text-white">
            {subscription_benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
          </ul>
        </div>

        <div className='border-2 rounded-lg my-2 text-center'>
          <p className="text-3xl font-bold text-white">{ratings}⭐</p>
          <p>({number_of_reviews} reviews)</p>
        </div>

        <div className='flex justify-center text-center'>
          <Link to='/review'
            onClick={handleSubscribe}
            className="relative px-10 py-3 font-medium text-white w-full transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease"
          >
            <span className="absolute bottom-0 left-0 h-full -ml-2">
              <svg viewBox="0 0 487 487" className="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg">
                <path d="..." fill="#FFF" fillOpacity=".1" />
              </svg>
            </span>
            <span className="absolute top-0 right-0 w-12 h-full -mr-3">
              <svg viewBox="0 0 487 487" className="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="..." fill="#FFF" fillOpacity=".1" />
              </svg>
            </span>
            <span className="relative">Subscribe</span>
          </Link>
        </div>
      </div>

      <div className='flex justify-center items-center mb-4'>
        <Link to='/'>
          <button className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <span className="relative text-white">Back</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default SubDetails;
