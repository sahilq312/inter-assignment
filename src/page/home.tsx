
import { Header } from "@/componets/header";
import { Movies } from "@/componets/movies";
import { Navbar } from "@/componets/navbar";


export default function Home() {
  return  (
    <div>
      <Header/>
       <Navbar>
       {/*  <SwiperComponent/> */} 
       {/*  <Carousel/> */}
      <Movies/>
    </Navbar>
    </div>
  );
}