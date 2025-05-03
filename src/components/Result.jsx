import React, { useEffect, useRef } from 'react';
import { FaHeart } from 'react-icons/fa';
import marriedImg from '../assets/married.jpg';
import animation from '../assets/animation.json';
import music from '../assets/music.mp3';
import Lottie from 'lottie-react';

const Result = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((e) => {
          // in case autoplay is blocked, fallback can be added here
          console.log('Autoplay blocked:', e);
        });
      }
    };

    playMusic();
  }, []);

  return (
    <div className='flex flex-col items-center gap-5 relative'>
      {/* Background animation */}
      <div className='absolute w-full h-full left-0 top-0 z-0'>
        <Lottie animationData={animation} />
      </div>

      {/* Background music */}
      <audio ref={audioRef} src={music} loop />

      {/* Content */}
      <FaHeart className='text-pink-600 text-6xl animate-pulse z-10' />
      <h2 className='text-2xl font-bold text-gray-800 text-center z-10'>
        We Are Married Now 😁
      </h2>
      <img src={marriedImg} className='w-full h-full object-contain z-10' alt="married" />
    </div>
  );
};

export default Result;
