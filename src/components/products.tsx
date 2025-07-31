import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Products(){
    return(
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 bg-slate-900 px-1 md:px-20 mt-5 mb-5">
            <div className="flex flex-col bg-amber-400">
                <div className="flex w-full items-center justify-center ">
                    <Image src={'/images/barriloktos.png'} alt="Barril Oktos" width={250} height={300} />
                </div>
                <div className="text-4xl font-black text-black px-10 mb-6">PILSEN</div>
                <div className="text-2xl font-semibold text-black px-10 mb-10">CHOPP PILSEN TRADICIONAL</div>
                <div className="text-xl font-normal text-black px-10 mb-10">
                    Nosso chopp tipo Pilsen, leve, refrescante, com espuma branca, cremosa e notas suaves de lúpulos. Uma boa opção para refrescar nos dias quentes.
                </div>
                <div className="flex flex-row w-full items-center justify-between text-xl font-normal text-black ">
                    <div className=" flex flex-col text-xl font-normal text-black px-10">
                        <div className=" flex flex-row text-xl font-normal text-black items-center justify-center">
                            <div className="mr-5">
                                <Image src={'/images/caneca-de-cerveja.png'} alt="ABV" width={40} height={40} />    
                            </div>
                            <div className="text-xl font-bold text-black mt-5 ">
                                ABV 
                            </div>
                        </div>
                        <div className="text-[18px] font-bold text-black px-10">
                            Teor Alcoólico
                        </div>
                        <div className="text-[18px] font-bold text-black px-10 mb-20">
                            4,9%
                        </div>
                    </div> 
                    <div className=" flex flex-col text-xl font-normal text-black px-10">
                        <div className=" flex flex-row text-xl font-normal text-black items-center justify-center">
                            <div className="mr-5">
                                <Image src={'/images/cevada.png'} alt="ABV" width={40} height={40} />    
                            </div>
                            <div className="text-xl font-bold text-black mt-5 ">
                                IBU 
                            </div>
                        </div>
                        <div className="text-[18px] font-bold text-black px-10">
                            Amargor
                        </div>
                        <div className="text-[18px] font-bold text-black px-10 mb-20">
                            12
                        </div>                        
                    </div>                    
                </div> 
                <div className="flex justify-center mb-6">
                    <Link href="https://wa.me/556492386166" target="_blank" rel="noopener noreferrer" >
                        <Button variant="default" className="bg-amber-400 hover:bg-amber-600 border border-amber-600 text-black">
                            PEÇA O SEU!
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col bg-red-800">
                <div className="flex w-full items-center justify-center ">
                    <Image src={'/images/barriloktos.png'} alt="Barril Oktos" width={250} height={300} />
                </div>
                <div className="text-4xl font-bold text-white px-10 mb-6">PRIMA</div>
                <div className="text-2xl font-semibold text-white px-10 mb-10">CHOPP TIPO PRIMA</div>
                <div className="text-xl font-normal text-white px-10 mb-10">
                    Nosso chopp refrescante, lager, levemente maltado com lúpulos alemães. Companheiro ideal para os amantes de chope!
                </div>
                <div className="flex flex-row w-full items-center justify-between text-xl font-normal text-white">
                    <div className=" flex flex-col text-xl font-normal text-white px-10">
                        <div className=" flex flex-row text-xl font-normal text-white items-center justify-center">
                            <div className="mr-5">
                                <Image src={'/images/caneca-de-cerveja.png'} alt="ABV" width={40} height={40} />    
                            </div>
                            <div className="text-xl font-bold text-white mt-5 ">
                                ABV 
                            </div>
                        </div>
                        <div className="text-[18px] font-bold text-white px-10">
                            Teor Alcoólico
                        </div>
                        <div className="text-[18px] font-bold text-white px-10 mb-20">
                            5,0%
                        </div>
                    </div> 
                    <div className=" flex flex-col text-xl font-normal text-white px-10">
                        <div className=" flex flex-row text-xl font-normal text-white items-center justify-center">
                            <div className="mr-5 text-white">
                                <Image src={'/images/cevada.png'} alt="ABV" width={40} height={40} />    
                            </div>
                            <div className="text-xl font-bold text-white mt-5 ">
                                IBU 
                            </div>
                        </div>
                        <div className="text-[18px] font-bold text-white px-10">
                            Amargor
                        </div>
                        <div className="text-[18px] font-bold text-white px-10 mb-20">
                            18
                        </div>
                    </div>                                       
                </div>
                <div className="flex justify-center mt-6 mb-6">
                    <Link href="https://wa.me/556492386166" target="_blank" rel="noopener noreferrer" >
                        <Button variant="default" className="bg-red-800 hover:bg-red-900 border border-red-500 text-white">
                            PEÇA O SEU!
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col bg-green-800">
                <div className="flex w-full items-center justify-center ">
                    <Image src={'/images/barriloktos.png'} alt="Barril Oktos" width={250} height={300} />
                </div>
                <div className="text-4xl font-bold text-white px-10 mb-6">IPA</div>
                <div className="text-2xl font-semibold text-white px-10 mb-10">CHOPP PURO MALTE</div>
                <div className="text-xl font-normal text-white px-10 mb-10">
                Nosso chopp forte, de coloração âmbar, aroma intenso de lúpulos cítricos, frutados e florais.
                Combina em qualquer momento e ocasião!
                </div>
                <div className="flex flex-row w-full items-center justify-between text-xl font-normal text-white">
                    <div className=" flex flex-col text-xl font-normal text-black px-10">
                        <div className=" flex flex-row text-xl font-normal text-white items-center justify-center">
                            <div className="mr-5">
                                <Image src={'/images/caneca-de-cerveja.png'} alt="ABV" width={40} height={40} />    
                            </div>
                            <div className="text-xl font-bold text-white mt-5 ">
                                ABV 
                            </div>
                        </div>
                        <div className="text-[18px] font-bold text-white px-10">
                            Teor Alcoólico
                        </div>
                        <div className="text-[18px] font-bold text-white px-10 mb-20">
                            6,5%
                        </div>
                    </div> 
                    <div className=" flex flex-col text-xl font-normal text-white px-10">
                        <div className=" flex flex-row text-xl font-normal text-white items-center justify-center">
                            <div className="mr-5">
                                <Image src={'/images/cevada.png'} alt="ABV" width={40} height={40} />    
                            </div>
                            <div className="text-xl font-bold text-white mt-5 ">
                                IBU 
                            </div>
                        </div>
                        <div className="text-[18px] font-bold text-white px-10">
                            Amargor
                        </div>
                        <div className="text-[18px] font-bold text-white px-10 mb-20">
                            50
                        </div>
                    </div>                                       
                </div>
                <div className="flex justify-center mt-22 md:mt-6 mb-6">
                    <Link href="https://wa.me/556492386166" target="_blank" rel="noopener noreferrer" >
                        <Button variant="default" className="bg-green-800 hover:bg-green-900 border border-green-500 text-white">
                            PEÇA O SEU!
                        </Button>
                    </Link>
                </div> 
            </div> 
            <div className="flex flex-col bg-purple-800">
                <div className="flex w-full items-center justify-center ">
                    <Image src={'/images/barriloktos.png'} alt="Barril Oktos" width={250} height={300} />
                </div>
                <div className="text-4xl font-bold text-white px-10 mb-6">CHOPP VINHO</div>
                <div className="text-2xl font-semibold text-white px-10 mb-10">CHOPP PILSEN TRADICIONAL</div>
                <div className="text-xl font-normal text-white px-10 mb-10">
                    Você vai apreciar um Chope de Vinho de característica refrescante e suave que combina o sabor do vinho com a textura leve do chope.
                </div>
                <div className="flex flex-row w-full items-center justify-between text-xl font-normal text-white">
                    <div className=" flex flex-col text-xl font-normal text-black px-10">
                        <div className=" flex flex-row text-xl font-normal text-white items-center justify-center">
                            <div className="mr-5">
                                <Image src={'/images/caneca-de-cerveja.png'} alt="ABV" width={40} height={40} />    
                            </div>
                            <div className="text-xl font-bold text-white mt-5 ">
                                ABV 
                            </div>
                        </div>
                        <div className="text-[18px] font-bold text-white px-10">
                            Teor Alcoólico
                        </div>
                        <div className="text-[18px] font-bold text-white px-10 mb-20">
                            7,2%
                        </div>
                    </div>                                                         
                </div>
                <div className="flex justify-center mt-12 mb-6">
                    <Link href="https://wa.me/556492386166" target="_blank" rel="noopener noreferrer" >
                        <Button variant="default" className="bg-purple-800 hover:bg-purple-900 border border-purple-500 text-white">
                            PEÇA O SEU!
                        </Button>
                    </Link>
                </div>   
            </div>                     
        </div>
    )
}