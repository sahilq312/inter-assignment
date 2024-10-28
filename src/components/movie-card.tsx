
import { Movie } from "@/components/movies"

type MovieCardProps = {
    movie: Movie
}   

export const MovieCard = ({movie}: MovieCardProps) => {
    return (
        <div 
           className="flex-none w-[160px] sm:w-[200px] md:w-[240px] border"
        >
            <div className=" overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover/card:scale-105">
                <img 
                    src={movie.Poster} 
                    alt={movie.Title}
                    className="w-full h-[240px] sm:h-[360px] md:h-[370px] object-cover"/>
            </div>
            <div className="p-1">
                <h2 className="text-black text-base sm:text-base md:text-lg font-semibold line-clamp-2">
                    {movie.Title}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{movie.Year}</p>
            </div>
        </div>
    )
}
