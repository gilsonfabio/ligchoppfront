import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Growler() {
  return (
    <section className="w-full px-4 py-10 md:px-20 bg-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagem do Growler */}
        <div className="flex justify-center">
          <Image
            src="/images/growler.png"
            alt="Growler"
            width={400}
            height={400}
            className="object-contain w-full max-w-xs md:max-w-md"
            priority
          />
        </div>

        {/* Texto e botão */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400">
            LEVE SEU CHOPP PREFERIDO PARA
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400">
            QUALQUER LUGAR QUE DESEJAR.
          </h2>
          <p className="text-xl md:text-2xl text-white font-semibold">
            Encomende os Growlers Oktos e divirta-se!
          </p>
          <div className="mt-4 md:mt-6">
            <Link
              href="https://wa.me/556492386166"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-6 py-3 rounded-xl shadow-md transition duration-200">
                PEÇA O SEU!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
