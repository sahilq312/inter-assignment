import { useState, useEffect } from "react";
import Image1 from "@/assets/carousel1.png";
import Image2 from "@/assets/carousel2.png";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const CarouselImages = [
    {
        id: 1,
        image: Image1,
        alt: "carousel image 1"
    },
    {
        id: 2,
        image: Image2,
        alt: "carousel image 2"
    }
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
        <div className="relative w-full flex justify-center items-center bg-red-300">
            <img
                src={CarouselImages[(currentIndex - 1 + CarouselImages.length) % CarouselImages.length].image} 
                alt={CarouselImages[(currentIndex - 1 + CarouselImages.length) % CarouselImages.length].alt} 
                className="w-[10vw] h-[36vh] object-cover transition-opacity p-2 rounded-lg duration-500 absolute left-0"
            />
            <section className="w-[80vw] h-[36vh] overflow-hidden relative ">
                <div className="flex justify-center items-center rounded-lg">
                    <img
                        src={CarouselImages[currentIndex].image} 
                        alt={CarouselImages[currentIndex].alt} 
                        className="w-full h-full object-cover transition-opacity p-2  duration-1000 "
                    />
                </div>
            </section>
            <img
                src={CarouselImages[(currentIndex + 1) % CarouselImages.length].image} 
                alt={CarouselImages[(currentIndex + 1) % CarouselImages.length].alt} 
                className="w-[10vw] h-[36vh] object-cover transition-opacity p-2 rounded-lg duration-500 absolute right-0"
            />
            <button onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded">
                <ArrowLeftIcon />
            </button>
            <button onClick={handleNext} className="absolute right-20 top-1/2 transform -translate-y-1/2 text-white p-2 rounded">
                <ArrowRightIcon />
            </button>
        </div>
    );
};
