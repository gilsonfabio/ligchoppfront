'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const slides = [
  {
    image: '/images/produto1.png',
    mobileImage: '/images/prod1-mobile.png',
    text: 'Está em Caldas Novas? Aproveite a versão Pilsen, você vai apreciar um chope leve, refrescante, ideal para todos os momentos.',
    whatsappMsg: 'Olá! Gostaria de saber mais sobre o Chopp Pilsen.',
  },
  {
    image: '/images/produto2.png',
    mobileImage: '/images/prod2-mobile.png',
    text: 'Curtindo Caldas Novas? Escolha a versão Prima Puro Malte, você vai apreciar um chope lager de caráter limpo. Possui aroma de cereais e lúpulos alemães.',
    whatsappMsg: 'Olá! Me interessei pelo produto Prima Puro Malte?',
  },
  {
    image: '/images/produto3.png',
    mobileImage: '/images/prod3-mobile.png',
    text: 'Aproveitando as águas quentes de Caldas Novas, experimente o American IPA, você vai apreciar um chope muito aromático e equilibrado.',
    whatsappMsg: 'Quero saber mais sobre o produto American IPA!',
  },
  {
    image: '/images/produto4.png',
    mobileImage: '/images/prod4-mobile.png',
    text: 'Chope de Vinho refrescante e suave que combina o sabor do vinho com a textura leve do chope, escolha perfeita para momentos especiais em Caldas Novas.',
    whatsappMsg: 'Quero saber mais sobre o produto Chopp Vinho!',
  },
]

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-[16/5] overflow-hidden">
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
            src={isMobile ? slides[index].mobileImage : slides[index].image}
            alt="Produto"
            fill
            className="object-cover object-left"
          />

          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Conteúdo */}
          <div className="absolute inset-0 z-20 flex flex-col justify-start pt-20 sm:justify-center sm:pt-0 px-4 text-white text-start sm:text-center">
            <motion.h2
              key={slides[index].text}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-4xl leading-relaxed sm:leading-loose font-semibold max-w-3xl md:ml-auto md:mr-50 md:text-right">
              {slides[index].text}
            </motion.h2>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              href={`https://wa.me/556492386166?text=${encodeURIComponent(slides[index].whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6"
            >
              <Button size="lg" variant="secondary" className="text-base rounded-xl shadow-md md:ml-96">
                Peça o seu no WhatsApp
              </Button>
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
