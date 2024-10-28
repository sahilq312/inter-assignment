import { useScreenSize } from "@/hooks/mobile-section"
import HomeIcon from "@/assets/redshow-icon.png"
import MovieIcon from "@/assets/streams-icon.png"
import LiveEventsIcon from "@/assets/liveevents-icon.png"
import ProfileIcon from "@/assets/profile-icon.png"
import { useSelectionContext } from "@/hooks/select-option-context"
interface NavbarProp {
    children : React.ReactNode
}


export const Navbar = ({children}: NavbarProp) => {
    const {isMobile} = useScreenSize()
    const {selectedOption, setSelectedOption} = useSelectionContext()

    console.log(selectedOption)
    return (
        <div className="w-full">
            {isMobile ? (<nav className="flex w-full absolute bottom-0 list-none text-sm p-2  h-16  justify-around items-center">
                <div className="text-red-800 flex flex-col items-center" onClick={() => setSelectedOption('movies')}><img className="w-6" src={HomeIcon}/><li>Home</li></div>
                <div className="flex flex-col items-center" onClick={() => setSelectedOption('stream')}><img className="w-6" src={MovieIcon}/><li>Movies</li></div>
                <div className=" flex flex-col items-center" onClick={() => setSelectedOption('events')}><img className="w-6" src={LiveEventsIcon}/><li>Live Events</li></div>
                <div className="flex flex-col items-center"><img className="w-6" src={ProfileIcon}/><li>Profile</li></div>
            </nav>) : 
            (<nav className="flex justify-around text-base  h-10 items-center list-none ">
                <div className="flex gap-3">
                <li onClick={() => setSelectedOption('movies')} className={`cursor-pointer ${selectedOption === 'movies' ? 'text-red-800' : ''}`}>Movies</li>
                <li onClick={() => setSelectedOption('stream')} className={`cursor-pointer ${selectedOption === 'stream' ? 'text-red-800' : ''}`}>Stream</li>
                <li onClick={() => setSelectedOption('events')} className={`cursor-pointer ${selectedOption === 'events' ? 'text-red-800' : ''}`}>Events</li>
                <li>Plays</li>
                <li>Sports</li>
                <li>Activites</li>
                </div>
                <div className="flex gap-3">
                    <li>ListYourShow</li>
                    <li>Corporates</li>
                    <li>offers</li>
                    <li>Gift Cards</li>
                </div>
                </nav>)}
            
            <div>
            {children}
            </div>
        </div>
    )
}
