"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  const phoneNumber = "+33607117838";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={64}
        height={64}
        className="w-16 h-16 object-contain drop-shadow-lg"
      />
    </a>
  );
}
