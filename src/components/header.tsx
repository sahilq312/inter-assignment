import BookMyShowSVG from "@/components/bookmyshow-svg";
import { Input } from "@/components/ui/input";
import { useScreenSize } from "@/hooks/mobile-section";
import { ChevronDown, ChevronRight, Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";

interface MovieData {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Plot: string;
    Type: string;
    Response: string;
}

export const Header = () => {
    const [search, setSearch] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [movieData, setMovieData] = useState<MovieData | null>(null);
    const url = `https://www.omdbapi.com/?t=${search}&apikey=${import.meta.env.VITE_API_KEY}`;

    const handleSearchToggle = () => {
        setIsSearchOpen(prev => !prev);
        if (isSearchOpen) setSearch('');
    };

    useEffect(() => {
        if (search.length > 2) {
            setIsSearchOpen(true);
            fetch(url)
                .then(res => res.json())
                .then((data: MovieData) => setMovieData(data))
                .catch(error => console.error("Error fetching movie data:", error));
        } else {
            setMovieData(null); 
        }
    }, [search, url]);

    const { isMobile } = useScreenSize();

    return (
        <div className="flex flex-col w-full items-center bg-gray-100 shadow-lg transition-all duration-300">
            {isMobile ? (
                <header className="flex justify-between items-center w-full p-4 bg-white shadow-md">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-gray-800">It All Starts Here!</h1>
                        <div className="flex items-center text-xs text-red-600">
                            <p className="font-medium">Durgapur</p>
                            <ChevronRight size={16} />
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <button className="px-2 py-1 text-sm font-medium rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200">
                            Use App
                        </button>
                        <Search size={24} className="text-gray-500 cursor-pointer" onClick={handleSearchToggle} />
                    </div>
                    {isSearchOpen && (
                        <Input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search movies..."
                            className="w-full mt-2 rounded-md border border-gray-300 p-2"
                        />
                    )}
                </header>
            ) : (
                <header className="flex justify-evenly gap-24 items-center w-full h-20 px-8 bg-white shadow-lg">
                    <div className="flex items-center gap-6">
                        <BookMyShowSVG className="w-48 h-10" />
                        <Input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search for movies, events, plays, sports, and more"
                            className="w-[500px] h-10 rounded-md border border-gray-300 px-4 shadow-sm focus:outline-none focus:border-red-500 transition-all duration-300"
                        />
                    </div>
                    <div className="flex gap-6 items-center">
                        <div className="flex items-center gap-2 cursor-pointer hover:text-red-600">
                            <p className="text-sm font-medium">Durgapur</p>
                            <ChevronDown size={16} />
                        </div>
                        <button className="px-4 py-2 text-sm font-light text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-300">
                            Sign In
                        </button>
                        <Menu size={24} className="text-gray-500 cursor-pointer" />
                    </div>
                </header>
            )}

            {isSearchOpen && movieData && (
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 mt-4 z-10 bg-white shadow-xl w-full max-w-2xl p-6 rounded-lg border border-gray-200 transition-all duration-300">
                    {movieData.Response === "True" ? (
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">{movieData.Title}</h2>
                            <p className="text-gray-600">Year: {movieData.Year}</p>
                            <p className="text-gray-600">Genre: {movieData.Genre}</p>
                            <p className="text-gray-600">Plot: {movieData.Plot}</p>
                        </div>
                    ) : (
                        <p className="text-gray-500">No results found.</p>
                    )}
                </div>
            )}
        </div>
    );
};
