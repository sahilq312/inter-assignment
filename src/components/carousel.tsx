import { useScreenSize } from "@/hooks/mobile-section";
import { Carousel } from "./carousel-main";
import { CarouselPhone } from "./carousel-phone";


export const CarouselComponent = () => {
    const {isMobile} = useScreenSize()

    return (
        <div>
            {isMobile ? <CarouselPhone/> : <Carousel/>}
        </div>
    );
};
