import { useState, useEffect } from "react";
import Image from "next/image";

interface DoctorHeroCarouselProps {
  images: string[];
}

const DoctorHeroCarousel = ({ images }: DoctorHeroCarouselProps) => {
  // State to track current image index and transition state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Navigation handlers with transition
  const goToPrevious = () => {
    // resetAutoChangeTimer(); // Reset timer when manually navigating
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setIsTransitioning(true);
  };

  const goToNext = () => {
    // resetAutoChangeTimer(); // Reset timer when manually navigating
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setIsTransitioning(true);
  };

  // Function to reset the auto-change timer
  // const resetAutoChangeTimer = () => {
  //   if (autoChangeIntervalRef.current) {
  //     clearInterval(autoChangeIntervalRef.current);
  //   }
    
  //   autoChangeIntervalRef.current = setInterval(() => {
  //     if (!isPaused) {
  //       setIsTransitioning(true);
  //       setCurrentIndex(prevIndex => 
  //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //       );
  //     }
  //   }, 3000);
  // };

      // Set up auto-change interval when component mounts
  // useEffect(() => {
  //   resetAutoChangeTimer();

  //   // Clean up interval when component unmounts
  //   return () => {
  //     if (autoChangeIntervalRef.current) {
  //       clearInterval(autoChangeIntervalRef.current);
  //     }
  //   };
  // }, [isPaused]);

  // Reset transition flag after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition duration
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div 
      className="relative bg-white rounded-2xl overflow-hidden max-w-[480px] text-right flex items-center justify-center"
    >
      {/* Carousel container */}
      <div className="relative w-full h-[500px] sm:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Images with transition */}
        {images.map((img, index) => (
            <Image 
              key={index}
              src={img}
              fill
              alt={`Doctor Image ${index + 1}`}
              className="object-cover"
              priority={index === currentIndex}
            />
        ))}
        
        {/* Left Arrow */}
        <button 
          onClick={goToPrevious}
          className="hidden absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20 transition-all"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Right Arrow */}
        <button 
          onClick={goToNext}
          className="hidden absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20 transition-all"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Dots indicator */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  // resetAutoChangeTimer();
                  setCurrentIndex(index);
                }
              }}
              className={`hidden w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-white w-4' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorHeroCarousel; 