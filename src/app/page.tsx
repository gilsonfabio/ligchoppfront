import Carousel from "@/components/Carousel";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Growler from "@/components/growler";
import Header from "@/components/header";
import Products from "@/components/products";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-slate-900 ">
      <div>
        <Carousel />
      </div>
      <div className="flex flex-col w-full px-20 ">
        <Faq />
      </div>
      <div className="flex flex-col w-full h-full bg-slate-900">
        <Products />
      </div>
      <div className="flex flex-col w-full bg-amber-500">
        <Growler />
      </div>      
    </div>
  );
}
