'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const slides = [
  {
    image: '/images/produto1.png',
    text: 'Descubra a nova linha de cuidados naturais para a pele.',
    whatsappMsg: 'Olá! Gostaria de saber mais sobre o produto 1.',
  },
  {
    image: '/images/produto2.png',
    text: 'Sua beleza merece o melhor. Conheça nossos lançamentos.',
    whatsappMsg: 'Olá! Me interessei pelo produto 2. Pode me ajudar?',
  },
  {
    image: '/images/produto3.png',
    text: 'Qualidade e cuidado em cada detalhe.',
    whatsappMsg: 'Quero saber mais sobre o produto 3!',
  },
  {
    image: '/images/produto4.png',
    text: 'O sabor da uva com a refrescancia do chopp. União perfeita!',
    whatsappMsg: 'Quero saber mais sobre o produto 3!',
  },
]

export default function Carousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full aspect-[16/5] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full h-full"
        >
          {/* Imagem de fundo */}
          <Image
            src={slides[index].image}
            alt="Produto"
            fill
            className="object-cover object-left"
          />

          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Conteúdo */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 text-white">
            <motion.h2
              key={slides[index].text}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-4xl font-semibold max-w-3xl"
            >
              {slides[index].text}
            </motion.h2>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              href={`https://wa.me/5562982897455?text=${encodeURIComponent(slides[index].whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6"
            >
              <Button size="lg" variant="secondary" className="text-base rounded-xl shadow-md">
                Fale conosco no WhatsApp
              </Button>
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
