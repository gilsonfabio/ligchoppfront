import Image from "next/image";

export default function Footer(){
    return (
        <div className="flex flex-row w-full h-50 items-center justify-between bg-slate-950 px-20 ">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-4">
                    <Image src="/images/ligchoppwhite.png" alt="Logo LigChopp" width={200} height={100} className="object-contain" />
                </div>
                <div className="flex items-center text-3xl text-amber-600 font-bold">
                    62.98289-7455
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-4">
                    <Image src="/images/oktoswhite.png" alt="Logo LigChopp" width={200} height={100} className="object-contain" />
                </div>
            </div>
        </div>
    )
}