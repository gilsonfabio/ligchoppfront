import Carousel from "@/components/Carousel";
import Faq from "@/components/faq";
import Growler from "@/components/growler";
import Products from "@/components/products";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-slate-900">
      <div>
        <Carousel />
      </div>
      <div className="flex flex-col w-full md:px-20">
        <Products />
      </div>
      <div className="flex flex-col w-full h-full">
        <Growler />        
      </div>
      <div className="flex flex-col w-full bg-slate-900">
        <Faq />
      </div>      
    </div>
  );
}
