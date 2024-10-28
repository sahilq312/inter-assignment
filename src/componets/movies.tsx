import { useSelectionContext } from "@/hooks/select-option-context"
import { useEffect, useState } from "react"
import { fetchEvents, fetchMovies, fetchStream } from "@/lib/fetch"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { MovieCard } from "./movie-card"
export interface Movie {
    imdbID: string
    Title: string
    Poster: string
    Year: string
}

export const Movies = () => {
    const [data, setData] = useState<Movie[] | undefined>(undefined)
    const {selectedOption} = useSelectionContext()
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            switch(selectedOption) {
                case 'movies':
                    return fetchMovies()
                case 'stream':
                    return fetchStream()
                case 'events':
                    return fetchEvents()
                default:
                    return Promise.resolve(undefined)
            }
        }

        fetchData().then((data) => setData(data))
    }, [selectedOption])

    const handleScroll = (direction: 'left' | 'right') => {
        const container = document.getElementById('movie-container')
        if (container) {
            const scrollAmount = 800
            const newPosition = direction === 'left' 
                ? scrollPosition - scrollAmount 
                : scrollPosition + scrollAmount
            
            // Smooth scroll animation
            container.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            })
            setScrollPosition(newPosition)
        }
    }

 
    return (
        <div className="flex justify-center items-center w-full p-3 px-2 sm:px-4 ">
            <section className="relative w-full max-w-[90rem]">
                <h1 className="text-xl sm:text-2xl font-bold capitalize mb-4 sm:mb-6 px-2">
                    Recommended {selectedOption}
                </h1>
                
                <div className="relative group">
                    {/* Scroll Buttons - Hidden on mobile */}
                    <button 
                        onClick={() => handleScroll('left')}
                        className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    
                    <button 
                        onClick={() => handleScroll('right')}
                        className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Movie Container */}
                    <div 
                        id="movie-container"
                        className="flex p-2 sm:p-4 gap-2 sm:gap-12 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
                    >
                        {data && data.length > 0 ? data.map((movie: Movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                           
                        )) : (
                            <div className="w-full flex justify-center items-center py-20">
                                <p className="text-base sm:text-lg">Loading...</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Movies;
