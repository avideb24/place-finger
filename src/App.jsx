import React, { useState, useRef } from 'react';
import { IoFingerPrintSharp } from "react-icons/io5";
import Result from './components/result';

const App = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const timerRef = useRef(null);

  const handlePressStart = () => {
    setIsPressed(true);
    timerRef.current = setTimeout(() => {
      setIsComplete(true);
    }, 1000); // Hold duration in ms
  };

  const handlePressEnd = () => {
    setIsPressed(false);
    clearTimeout(timerRef.current);
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
                onMouseDown={handlePressStart}
                onMouseUp={handlePressEnd}
                onMouseLeave={handlePressEnd}
                onTouchStart={handlePressStart}
                onTouchEnd={handlePressEnd}
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
