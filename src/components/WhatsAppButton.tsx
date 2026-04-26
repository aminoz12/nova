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
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={28}
        height={28}
        className="w-7 h-7 object-contain"
      />
    </a>
  );
}
