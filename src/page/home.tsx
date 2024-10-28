
import { CarouselComponent } from "@/components/carousel";
import { Header } from "@/components/header";
import { Movies } from "@/components/movies";
import { Navbar } from "@/components/navbar";


export default function Home() {
  return  (
    <div>
      <Header/>
          <Navbar>
          <CarouselComponent/>
          <Movies/>
        </Navbar>
    </div>
  );
}