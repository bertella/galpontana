import { MessageCircle, ArrowDown } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { projectConfig, buildWhatsAppLink } from "../config/projectConfig";

interface HeroProps {
  customWhatsAppMessage?: string;
}

export function Hero({ customWhatsAppMessage }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const whatsappUrl = buildWhatsAppLink(
    customWhatsAppMessage || projectConfig.messages.heroWhatsapp
  );

  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] sm:min-h-screen w-full flex items-center overflow-hidden bg-[#181A1C]"
    >
      {/* Panoramic Background Render: frete2.png */}
      <div className="absolute inset-0 z-0">
        {!imageError && (
          <img
            id="hero-bg-image"
            src={projectConfig.images.hero}
            alt="Fachada principal de Santa Ana Comercial con locales, acceso a depósito y estacionamiento"
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-[center_35%] sm:object-[center_40%]"
          />
        )}

        {/* Soft dark overlay: smooth gradient from left ensuring maximum legibility while showcasing the render */}
        <div
          id="hero-gradient-overlay"
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25 sm:via-black/45 sm:to-black/20"
        />

        {/* Bottom subtle transition gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF9F6] to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Container: Left-aligned editorial hierarchy */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-2xl text-left">
          {/* Status Tag */}
          <motion.div
            id="hero-status-tag"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-stone-200 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-[#BC4726] animate-pulse" />
            <span>PROYECTO EN CONSTRUCCIÓN</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            id="hero-main-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
          >
            Dos locales integrables con depósito
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            id="hero-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-lg sm:text-xl font-medium text-stone-200 leading-snug"
          >
            Una propuesta comercial flexible sobre Santa Ana 3845, Barrio La Madrid.
          </motion.p>

          {/* Descriptive text */}
          <motion.p
            id="hero-short-description"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed max-w-xl"
          >
            Dos frentes comerciales vidriados con posibilidad de unificación, estacionamiento frontal para clientes y depósito integrado con portón vehicular en un mismo predio de 472 m².
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            id="hero-actions-group"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            {/* Primary Button: WhatsApp */}
            <a
              id="hero-primary-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#BC4726] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:bg-[#A63D1F] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              <span>Solicitar información</span>
            </a>

            {/* Secondary Button */}
            <a
              id="hero-secondary-btn"
              href="#locales"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.98]"
            >
              <span>Conocer el proyecto</span>
              <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
