
import { Header } from "@/componets/header";
import { Movies } from "@/componets/movies";
import { Navbar } from "@/componets/navbar";
//import SwiperComponent from "@/componets/swiper";

export default function Home() {
  return  (
    <div>
      <Header/>
    <Navbar>
      <Movies/>
    </Navbar>
    </div>
  );
}