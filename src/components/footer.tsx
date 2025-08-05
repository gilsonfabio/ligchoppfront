import Image from "next/image";
import WhatsAppButton from "./WhatsappButtom";

export default function Footer(){
    return (
        <div className="flex flex-col md:flex-row w-full h-50 items-center justify-between bg-slate-800 px-20 ">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-4">
                    <Image src="/images/ligchoppwhite.png" alt="Logo LigChopp" width={200} height={100} className="object-contain" />
                </div>
                <div className="flex items-center text-3xl text-amber-600 font-bold mb-5 md:mb-0">
                    64 9238-6166
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mb-5 md:mb-0">
                <div className="flex items-center gap-4">
                    <Image src="/images/oktoswhite.png" alt="Logo LigChopp" width={200} height={100} className="object-contain" />
                </div>
            </div>
            <WhatsAppButton />
        </div>
    )
}