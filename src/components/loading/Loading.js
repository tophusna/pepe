import React, { useEffect, useState } from "react";

const images = [
  "/images/pepe3.webp",
  "/images/pepe3.webp",
  "/images/pepe4.webp",
  "/images/pepe4.webp",
  "/images/pepe5.webp",
  "/images/pepe5.webp",
  // Add more image paths as needed
];

const LoadingScreen = ({ handleClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState("animate-fadeIn"); // State to manage fade animation class
  const [soundtrack] = useState(new Audio("/asset/musics/mp3.mp3")); // State to manage soundtrack

  useEffect(() => {
    const playSoundtrack = () => {
      soundtrack.play().catch(error => {
        console.log('Autoplay was prevented:', error);
      });
    };

    playSoundtrack(); // Attempt to play the soundtrack when component mounts

    return () => {
      soundtrack.pause(); // Pause the soundtrack when component unmounts
      soundtrack.currentTime = 0; // Reset playback to the start
    };
  }, [soundtrack]);

  console.log("currentImageIndex", currentImageIndex);
  console.log("fade", fade);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
        currentImageIndex % 2 === 0 && setFade("animate-fadeOut");
        currentImageIndex % 2 === 1 && setFade("animate-fadeIn");
        // setTimeout(() => setFade('hidden'), 3000); // Hide after 3 seconds`````````````

        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          if (newProgress >= 5) {
            clearInterval(interval); // Stop the interval when progress reaches 5
          }
          return newProgress;
        });
      },
      currentImageIndex < 5 ? 3000 : 9999999999
    ); // Change image and update progress every 2 seconds until currentImageIndex reaches 10

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">

      <div className="relative h-screen w-screen">
        <img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="San Andreas Logo"
          className={`h-full w-full object-cover ${fade}`}
        />
        <div className="absolute bottom-20 left-20 w-[200px] h-2 bg-gray-700">
          {progress < 6 && (
            <div
              className="h-full bg-green-500 transition-all duration-[2000ms]"
              style={{ width: `${progress * 20}%` }}
            ></div>
          )}
          {progress >= 5 && (
            <button
              className="absolute bottom-[10px] left-[15px] text-white"
              onClick={handleClick}
            >
              Click here
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
