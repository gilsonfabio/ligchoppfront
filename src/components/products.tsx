"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

const products = [
  {
    name: "PILSEN",
    type: "CHOPP PILSEN TRADICIONAL",
    description:
      "Nosso chopp tipo Pilsen, leve, refrescante, com espuma branca, cremosa e notas suaves de lúpulos. Uma boa opção para refrescar nos dias quentes.",
    abv: "4,9%",
    ibu: "12",
    bgColor: "bg-amber-400",
    textColor: "text-black",
    icon: "/images/icon-pilsen.png",
  },
  {
    name: "PRIMA",
    type: "CHOPP TIPO PRIMA",
    description:
      "Nosso chopp refrescante, lager, levemente maltado com lúpulos alemães. Companheiro ideal para os amantes de chope!",
    abv: "5,0%",
    ibu: "18",
    bgColor: "bg-red-800",
    textColor: "text-white",
    icon: "/images/icon-prima.png",
  },
  {
    name: "IPA",
    type: "CHOPP PURO MALTE",
    description:
      "Nosso chopp forte, de coloração âmbar, aroma intenso de lúpulos cítricos, frutados e florais. Combina em qualquer momento e ocasião!",
    abv: "6,5%",
    ibu: "50",
    bgColor: "bg-green-800",
    textColor: "text-white",
    icon: "/images/icon-ipa.png",
  },
  {
    name: "CHOPP VINHO",
    type: "CHOPP PILSEN TRADICIONAL",
    description:
      "Você vai apreciar um Chope de Vinho de característica refrescante e suave que combina o sabor do vinho com a textura leve do chope.",
    abv: "7,2%",
    ibu: null,
    bgColor: "bg-purple-800",
    textColor: "text-white",
    icon: "/images/icon-vinho.png",
  },
];

export default function Products() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 bg-slate-900 px-2 sm:px-2 lg:px-6 py-10 ">
      {products.map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className={`flex flex-col ${product.bgColor} rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300`}
        >
          <div className="flex justify-center py-6">
            <Image
              src={product.name === "CHOPP VINHO" ? "/images/barrilvinho.png" : "/images/barriloktos.png"}
              alt={`Barril ${product.name}`}
              width={250}
              height={300}
            />
          </div>

          <div className="flex items-center justify-between px-6">
            <h2 className={`text-2xl font-black ${product.textColor}`}>{product.name}</h2>
            <Image src={product.icon} alt="Ícone" width={30} height={30} />
          </div>

          <div className={`text-lg font-semibold ${product.textColor} px-6 mb-4`}>{product.type}</div>
          <p className={`text-sm ${product.textColor} px-6 mb-6`}>{product.description}</p>

          <div className="flex justify-between px-6 mb-6">
            <div className="flex flex-col items-center">
              <Image src="/images/caneca-de-cerveja.png" alt="ABV" width={40} height={40} />
              <span className={`font-bold text-xs mt-1 ${product.textColor}`}>ABV</span>
              <span className={`text-sm ${product.textColor}`}>{product.abv}</span>
            </div>
            {product.ibu && (
              <div className="flex flex-col items-center">
                <Image src="/images/cevada.png" alt="IBU" width={40} height={40} />
                <span className={`font-bold text-xs mt-1 ${product.textColor}`}>IBU</span>
                <span className={`text-sm ${product.textColor}`}>{product.ibu}</span>
              </div>
            )}
          </div>

          <div className="flex justify-center pb-6">
            <Link
              href="https://wa.me/556492386166"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                className={`hover:brightness-110 border ${product.textColor} ${product.bgColor} border-opacity-50`}
              >
                PEÇA O SEU!
              </Button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
