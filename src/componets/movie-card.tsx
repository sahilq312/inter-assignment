import { Card } from "@/components/ui/card"

type CardProps = {
    title: string
    year: string
    imdbID: string
    type: string
    poster: string
}
type MovieCardProps = {
    movie: CardProps
}   

export const MovieCard = ({movie}: MovieCardProps) => {
    return (
        <Card className="w-36 h-48 rounded-md">
            <div className="w-full h-full">
                <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover"/>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">{movie.title}</p>
                <p className="text-xs text-gray-500">{movie.year}</p>
            </div>
        </Card>
    )
}
/* 
{
      "Title": "Mia and Me",
      "Year": "2012–2023",
      "imdbID": "tt2203143",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmNmMTI0NTItYjg2ZC00ZGM3LTlkNzctNGVjYjJlNTNmNWFhXkEyXkFqcGc@._V1_SX300.jpg"
    },
     */