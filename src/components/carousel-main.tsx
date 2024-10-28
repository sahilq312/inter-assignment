import { useState, useEffect } from 'react';
import Image3 from '@/assets/carousel3.png';
import Image4 from '@/assets/carousel4.png';
import Image5 from '@/assets/carousel5.png';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

const CarouselImages = [
  {
    id: 3,
    image: Image3,
    alt: 'carousel image 3',
  },
  {
    id: 4,
    image: Image4,
    alt: 'carousel image 4',
  },
  {
    id: 5,
    image: Image5,
    alt: 'carousel image 5',
  },
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CarouselImages.length) % CarouselImages.length);
  };

  return (
    <div className="relative w-full h-[35vh] flex flex-col items-center">
      <div className="flex w-full items-center justify-center space-x-4">
        {/* Left Image */}
        <img
          src={CarouselImages[(currentIndex - 1 + CarouselImages.length) % CarouselImages.length].image}
          alt={CarouselImages[(currentIndex - 1 + CarouselImages.length) % CarouselImages.length].alt}
          className="w-[15vw] h-[34vh] object-cover transition-all rounded-2xl duration-500"
        />

        {/* Main Image */}
        <section className="w-[80vw] h-[35vh] overflow-hidden relative">
          <div className="flex justify-center items-center rounded-lg">
            <img
              src={CarouselImages[currentIndex].image}
              alt={CarouselImages[currentIndex].alt}
              className="w-full min-h-[35vh] object-cover transition-all p-2 rounded-2xl duration-1000"
            />
          </div>
        </section>

        {/* Right Image */}
        <img
          src={CarouselImages[(currentIndex + 1) % CarouselImages.length].image}
          alt={CarouselImages[(currentIndex + 1) % CarouselImages.length].alt}
          className="w-[15vw] h-[34vh] object-cover transition-all rounded-2xl duration-500"
        />

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 w-10 h-10 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
        >
          <ArrowLeftIcon />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 w-10 h-10 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
        >
          <ArrowRightIcon />
        </button>
      </div>

      {/* Dot Indicators */}
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
};
