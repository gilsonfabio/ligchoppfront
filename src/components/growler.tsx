import Image from "next/image";

export default function Growler(){
    return(
        <div className="flex flex-row w-full h-full px-20 mb-10 mt-10">
            <div className="flex flex-row items-center justify-between w-[50%]">
                <Image src={'/images/growler.png'} alt="Growler" width={400} height={400} />
            </div>   
            <div className="flex flex-col items-center justify-center w-[50%]">
                <div className="text-4xl font-bold text-red-900">LEVE SEU CHOPP PREFERIDO PARA</div>
                <div className="text-4xl font-bold text-red-900">QUALQUER LUGAR QUE DESEJAR.</div>
                <div className="text-3xl font-bold text-white">Encomente o Growler Oktos e divirta-se!</div>
            </div>    
        </div>
    )
}