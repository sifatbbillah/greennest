import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BiSolidCameraMovie } from 'react-icons/bi';
import { IoDesktopOutline } from 'react-icons/io5';
import { MdCloudDownload, MdSwitchAccount } from 'react-icons/md';

const More = () => {
  useEffect(() => {
    AOS.init({ duration: 10000 }); // You can customize duration, delay, etc.
  }, []);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 rounded-lg'>
      <div
        data-aos="fade-right"
        className="card card-border bg-base-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] bg-[radial-gradient(195%_160%_at_0%_25%,rgba(0,28,142,1)_0%,rgba(227,77,77,1)_90%)]"
      >
        <div className="card-body">
          <h2 className="card-title font-bold text-4xl text-white">Enjoy on your TV</h2>
          <p className="text-white">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>
          <div className="card-actions justify-end">
            <button className="text-base-100">
              <IoDesktopOutline size={50} />
            </button>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="card card-border bg-base-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] bg-[radial-gradient(195%_160%_at_0%_25%,rgba(0,28,142,1)_0%,rgba(227,77,77,1)_90%)]"
      >
        <div className="card-body">
          <h2 className="card-title font-bold text-4xl text-white">Download your shows</h2>
          <p className="text-white">
            Save your favorites easily and always have something to watch.
          </p>
          <div className="card-actions justify-end">
            <button className="text-base-100 hover:scale-110 transition-transform duration-300">
              <MdCloudDownload size={50} />
            </button>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-right"
        className="card card-border bg-base-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] bg-[radial-gradient(195%_160%_at_0%_25%,rgba(0,28,142,1)_0%,rgba(227,77,77,1)_90%)]"
      >
        <div className="card-body">
          <h2 className="card-title font-bold text-4xl text-white">Watch everywhere</h2>
          <p className="text-white">
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
          <div className="card-actions justify-end">
            <button className="text-base-100 hover:scale-110 transition-transform duration-300">
              <BiSolidCameraMovie size={50} />
            </button>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="card card-border bg-base-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] bg-[radial-gradient(195%_160%_at_0%_25%,rgba(0,28,142,1)_0%,rgba(227,77,77,1)_90%)]"
      >
        <div className="card-body">
          <h2 className="card-title text-white font-bold text-4xl">Create profiles for kids</h2>
          <p className="text-white">
            Send kids on adventures with their favorite characters in a space made just for them — free with your membership.
          </p>
          <div className="card-actions justify-end">
            <button className="text-base-100 hover:scale-110 transition-transform duration-300">
              <MdSwitchAccount size={50} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
