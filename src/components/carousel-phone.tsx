import { useState, useEffect } from 'react';
import Image1 from '@/assets/carousel1.png';
import Image2 from '@/assets/carousel2.png';

const CarouselImages = [
  {
    id: 1,
    image: Image1,
    alt: 'carousel image 1',
  },
  {
    id: 2,
    image: Image2,
    alt: 'carousel image 2',
  },
];

export const CarouselPhone = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative w-full h-[25vh] flex flex-col items-center pt-6 mb-4">
      <div className="flex w-full items-center justify-center">
        <img
          src={CarouselImages[currentIndex].image}
          alt={CarouselImages[currentIndex].alt}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {CarouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-2' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}