import BookMyShowSVG from "@/components/bookmyshow-svg"
import { Input } from "@/components/ui/input"
import { useScreenSize } from "@/hooks/mobile-section"
import { ChevronDown, ChevronRight, Menu, Search } from "lucide-react"

export const Header = () => {
    const {isMobile} = useScreenSize()
    return (
        <div className="flex justify-center w-full h-16 items-center">
            {isMobile ? 
             (<header className="flex justify-between items-center w-full p-3 ">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-600">It All Starts Here!</h1>
                    <div className="flex items-center text-xs  text-red-500">
                        <p className="font-medium ">Durgapur</p>
                        <ChevronRight size={16}/>
                    </div>
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <button className=" p-[0.2rem] rounded-md border border-gray-300 text-sm">Use App</button>
                    <Search size={20} className="text-gray-500 "/>
                </div>
             </header>) :
             (<header className="flex justify-evenly gap-4 items-center w-full">
                <div className="flex justify-center items-center">
                <BookMyShowSVG className="w-56"/>
                <Input type="text" placeholder="Search for movies, events, plays, sports and more" className="w-[600px] h-10"/>
                </div>
                <div className="flex gap-4 justify-center items-center ">
                    <div className="flex gap-2 justify-center items-center">
                    <p className="text-sm">Durgapur</p>
                    <ChevronDown size={16}/>
                    </div>
                    <button className="bg-red-500 font-light text-sm text-white p-2 rounded-md">Signin</button>
                    <Menu size={24}/>
                </div>
                </header>)}
        </div>
    )
}