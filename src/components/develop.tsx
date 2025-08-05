import Link from "next/link";

export default function Develop(){
    return(
        <div className="flex flex-col w-full h-10 bg-black items-center justify-center">
            <div className="flex flex-row w-full items-center justify-center">
                <div className="text-white text-xs font-semibold">
                    Desenvolvido por:
                </div>
                <div className="text-amber-400 text-xs font-semibold ml-2">
                    <Link href="https://wa.me/5562982897455" target="_blank" rel="noopener noreferrer">
                        Innvento Soluções Tecnologicas
                    </Link>
                </div>
            </div>
        </div>
    )
}