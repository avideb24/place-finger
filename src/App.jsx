import React, { useState } from 'react';
import Result from './components/result';
import { IoFingerPrintSharp } from "react-icons/io5";

const App = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleFingerprintClick = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsComplete(true);
    }, 1000);
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-white'>
      <div>
        {
          !isComplete && (
            <div className='flex flex-col items-center gap-10'>
              <h2 className='text-pink-600 text-xl font-bold'>Place Your Finger</h2>
              <IoFingerPrintSharp 
                className={`text-8xl cursor-pointer transition-all duration-300 
                  ${isPressed ? 'text-pink-500 drop-shadow-lg scale-110' : 'text-gray-800 hover:text-pink-600'}
                `}
                onClick={handleFingerprintClick}
              />
            </div>
          )
        }
        {
          isComplete && <Result />
        }

      </div>
      <div className='fixed left-1/2 -translate-x-[50%] bottom-3 text-xs'>
        Designed By
        <a href="https://avi-debnath.surge.sh/" className='font-semibold hover:text-blue-600 ml-1' target='_blank'>Avi Debnath</a>
      </div>
    </div>
  );
};

export default App;
