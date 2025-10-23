import React from 'react';
import bg from '../assets/1693150322893.jpeg';
import Marquee from 'react-fast-marquee';
import img_1 from '../assets/MV5BZGQwYmEzMzktYzBmMy00NmVmLTkyYTUtOTYyZjliZDNhZGVkXkEyXkFqcGc@._V1_.jpg'
import img_2 from '../assets/thunderbolts_lob_crd_03.jpg'
import img_3 from '../assets/images (3).jpeg'
import img_4 from '../assets/images (4).jpeg'
import img_5 from '../assets/images (5).jpeg'
import img_6 from '../assets/unnamed.jpg'
import img_7 from '../assets/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png'
import img_8 from '../assets/Jurassic_World_Rebirth_poster.jpg'
import img_9 from '../assets/MV5BMmJiMWE2NTYtZWMyZC00Yzg0LTg0YjItZDM3ODlkYTRhNWNlXkEyXkFqcGc@._V1_.jpg'
import img_10 from '../assets/marvsmposterbk_intdesign.jpg'
import { FaAngleDoubleDown } from 'react-icons/fa';
const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Unlimited movies, TV shows, and more</h1>
                        <p className="mb-5">
                        Ready to watch? Enter your email to create or restart your membership.
                        </p>
                        <button className="btn btn-primary rounded-full animate-bounce"><FaAngleDoubleDown size={25}/></button>
                        
                    </div>
                </div>
            </div>

            <div>
                <div className='max-w-screen-2xl mx-auto px-8 my-6 md:px-12 lg:px-16'>
                    <Marquee>


                        <div className="mx-3  shadow-[0px_0px_11px_2px_#ff00ff,0px_0px_0px_4px_#00ffff]">
                            <img className='w-24 h-36' src={img_1} alt="" />
                        </div>

                        <div className="mx-3  shadow-[0px_0px_11px_2px_#ff00ff,0px_0px_0px_4px_#00ffff]">
                            <img className='w-24 h-36' src={img_2} alt="" />
                        </div>

                        <div className="mx-3  shadow-[0px_0px_11px_2px_#ff00ff,0px_0px_0px_4px_#00ffff]">
                            <img className='w-24 h-36' src={img_3} alt="" />
                        </div>

                        <div className="mx-3  shadow-[0px_0px_11px_2px_#ff00ff,0px_0px_0px_4px_#00ffff]">
                            <img className='w-24 h-36' src={img_4} alt="" />
                        </div>

                        <div className="mx-3  shadow-[0px_0px_11px_2px_#ff00ff,0px_0px_0px_4px_#00ffff]">
                            <img className='w-24 h-36' src={img_5} alt="" />
                        </div>

                        <div className="mx-3  shadow-[0px_0px_11px_2px_#ff00ff,0px_0px_0px_4px_#00ffff]">
                            <img className='w-24 h-36' src={img_6} alt="" />
                        </div>

                        <div className="mx-3  shadow-[0px_0px_11px_2px_#ff00ff,0px_0px_0px_4px_#00ffff]">
                            <img className='w-24 h-36' src={img_7} alt="" />
                        </div>

                        <div className="mx-3  shadow-[0px_0px_11px_2px_#ff00ff,0px_0px_0px_4px_#00ffff]">
                            <img className='w-24 h-36' src={img_8} alt="" />
                        </div>

                        <div className="mx-3  shadow-[0px_0px_11px_2px_#ff00ff,0px_0px_0px_4px_#00ffff]">
                            <img className='w-24 h-36' src={img_9} alt="" />
                        </div>

                        <div className="mx-3 shadow-[0px_0px_11px_2px_#ff00ff,0px_0px_0px_4px_#00ffff]">
                            <img className='w-28 h-40 ' src={img_10} alt="" />
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Banner;
