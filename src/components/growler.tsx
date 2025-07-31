import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Growler(){
    return(
        <div className="flex flex-row w-full h-full px-2 md:px-20 mb-10 mt-10">
            <div className="flex flex-row items-center justify-between w-[50%]">
                <Image src={'/images/growler.png'} alt="Growler" width={400} height={400} />
            </div>   
            <div className="flex flex-col items-center justify-center w-[50%]">
                <div className="text-4xl font-bold text-red-900">LEVE SEU CHOPP PREFERIDO PARA</div>
                <div className="text-4xl font-bold text-red-900">QUALQUER LUGAR QUE DESEJAR.</div>
                <div className="text-3xl font-bold text-white">Encomente os Growlers Oktos e divirta-se!</div>
                <div className="flex justify-center mt-22 md:mt-6 mb-6">
                    <Link href="https://wa.me/556492386166" target="_blank" rel="noopener noreferrer" >
                        <Button variant="default" className="bg-amber-500 hover:bg-amber-600 border border-amber-700 text-white">
                            PEÇA O SEU!
                        </Button>
                    </Link>
                </div> 
            </div>    
        </div>
    )
}