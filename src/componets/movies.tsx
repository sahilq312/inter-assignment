import { MovieCard } from "./movie-card"

export const Movies = () => {
    
    return (
        <div className="grid grid-cols-4 gap-4">
            <MovieCard movie={{
                title: "Mia and Me",
                year: "2012–2023",
                imdbID: "tt2203143",
                type: "series",
                poster: "https://m.media-amazon.com/images/M/MV5BNmNmMTI0NTItYjg2ZC00ZGM3LTlkNzctNGVjYjJlNTNmNWFhXkEyXkFqcGc@._V1_SX300.jpg"
            }}/>
        </div>
    )
}