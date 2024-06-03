import React, { useEffect, useState } from 'react';

const images = [
  '/images/pepe1.png',
  '/images/pepe2.png',
  
  // Add more image paths as needed
];

const LoadingScreen = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const handleClick = props.handleClick;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 5) {
          clearInterval(interval); // Stop the interval when progress reaches 10
        }
        return newProgress;
      });
    }, 2000); // Change image and update progress every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="relative h-screen">
        <img src={images[currentImageIndex]} alt="San Andreas Logo" className={`loading-logo h-full transition-opacity duration-1000 animate-fadein`} />
        <div className="absolute bottom-20 left-20 w-[200px] h-2 bg-gray-700">
          {progress < 6 && (
            <div
              className="h-full bg-green-500 transition-all duration-2000"
              style={{ width: `${progress * 20}%` }}
            ></div>
          )}
          {progress >= 5 && (
          <button className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-md text-white" onClick={handleClick}>Click here</button>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default LoadingScreen;