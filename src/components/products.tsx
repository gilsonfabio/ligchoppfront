import Image from "next/image";

export default function Products(){
    return(
        <div className="grid grid-cols-4 gap-4 bg-white px-20 mt-5 mb-5">
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
            </div>
            <div className="flex flex-col bg-red-800">
                <div className="flex w-full items-center justify-center ">
                    <Image src={'/images/barriloktos.png'} alt="Barril Oktos" width={250} height={300} />
                </div>
                <div className="text-4xl font-bold text-white px-10 mb-6">PRIMA</div>
                <div className="text-2xl font-semibold text-white px-10 mb-10">CHOPP PILSEN TRADICIONAL</div>
                <div className="text-xl font-normal text-white px-10 mb-10">
                    Nosso chopp tipo Pilsen, leve, refrescante, com espuma branca, cremosa e notas suaves de lúpulos. Uma boa opção para refrescar nos dias quentes.
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
                            4,9%
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
                            12
                        </div>
                    </div>                                       
                </div> 
            </div>
            <div className="flex flex-col bg-green-800">
                <div className="flex w-full items-center justify-center ">
                    <Image src={'/images/barriloktos.png'} alt="Barril Oktos" width={250} height={300} />
                </div>
                <div className="text-4xl font-bold text-white px-10 mb-6">IPA</div>
                <div className="text-2xl font-semibold text-white px-10 mb-10">CHOPP PILSEN TRADICIONAL</div>
                <div className="text-xl font-normal text-white px-10 mb-10">
                    Nosso chopp tipo Pilsen, leve, refrescante, com espuma branca, cremosa e notas suaves de lúpulos. Uma boa opção para refrescar nos dias quentes.
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
                            4,9%
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
                            12
                        </div>
                    </div>                                       
                </div> 
            </div> 
            <div className="flex flex-col bg-purple-800">
                <div className="flex w-full items-center justify-center ">
                    <Image src={'/images/barriloktos.png'} alt="Barril Oktos" width={250} height={300} />
                </div>
                <div className="text-4xl font-bold text-white px-10 mb-6">CHOPP VINHO</div>
                <div className="text-2xl font-semibold text-white px-10 mb-10">CHOPP PILSEN TRADICIONAL</div>
                <div className="text-xl font-normal text-white px-10 mb-10">
                    Nosso chopp tipo Pilsen, leve, refrescante, com espuma branca, cremosa e notas suaves de lúpulos. Uma boa opção para refrescar nos dias quentes.
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
                            4,9%
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
                            12
                        </div>
                    </div>                                       
                </div> 
            </div>           
        </div>
    )
}