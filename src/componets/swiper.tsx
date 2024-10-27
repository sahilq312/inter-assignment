
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';
import Image1 from "@/assets/carousel1.png";
import Image2 from "@/assets/carousel2.png";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function App() {
  return (
    <div className='h-[32vh] w-full'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Image1} alt="Slide 1"/></SwiperSlide>
        <SwiperSlide><img src={Image2} alt="Slide 1"/></SwiperSlide>
      </Swiper>
    </div>
  );
}
