// components/WhatsAppButton.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = "556492386166"; 
  const message = "Olá, gostaria de mais informações!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-16 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      title="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
