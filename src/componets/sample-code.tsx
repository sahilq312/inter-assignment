import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Menu, Search } from "lucide-react"
import Image1 from "@/assets/carousel1.png"

export default function Component() {
  return  (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg" alt="BookMyShow" width={150} height={40} className="w-auto h-8" />
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10 pr-4 py-2 w-80 rounded-md"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:flex items-center">
              Durgapur
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="default" size="sm">
              Sign in
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
      <nav className="border-b">
        <div className="container mx-auto px-4 py-2 flex items-center space-x-6 overflow-x-auto">
          {["Movies", "Stream", "Events", "Plays", "Sports", "Activities"].map((item) => (
            <Button key={item} variant="ghost" className="text-sm font-medium">
              {item}
            </Button>
          ))}
        </div>
      </nav>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="relative rounded-lg overflow-hidden mb-8 w-full lg:w-[95vw] mx-auto" style={{ height: '35vh' }}>
            <img
              src={Image1}
              alt="Credit Card Offer"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="p-4 md:p-8 text-white">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Your next credit card gets you 24 free* tickets!</h2>
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Recommended Movies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[{ title: "Venom: The Last Dance", rating: "8.1/10", votes: "31K Votes" },
              { title: "Bohurupi", rating: "8.8/10", votes: "19.7K Votes" },
              { title: "Vicky Vidya ka Woh Wala Video", rating: "7/10", votes: "27.6K Votes" },
              { title: "Jigra", rating: "7.6/10", votes: "58K Votes" },
              { title: "Tekka", rating: "7.4/10", votes: "10.9K Votes" }
            ].map((movie, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`/placeholder.svg?height=300&width=200&text=${movie.title}`}
                  alt={movie.title}
                  width={200}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1">{movie.title}</h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="text-red-500 mr-1">★</span>
                    {movie.rating} • {movie.votes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          © 2024 BookMyShow Clone. All rights reserved.
        </div>
      </footer>
    </div>
  );
}