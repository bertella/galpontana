import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { projectConfig, buildWhatsAppLink } from "../config/projectConfig";

interface FloatingWhatsAppProps {
  detectedOrigin: string | null;
}

export function FloatingWhatsApp({ detectedOrigin }: FloatingWhatsAppProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    // Show a helpful floating teaser after 3.5 seconds
    const timer = setTimeout(() => {
      if (!tooltipDismissed) {
        setShowTooltip(true);
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, [tooltipDismissed]);

  const message = detectedOrigin === "cartel"
    ? projectConfig.messages.cartelOriginWhatsapp
    : projectConfig.messages.heroWhatsapp;

  const whatsappUrl = buildWhatsAppLink(message);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end"
    >
      {/* Subtle floating bubble prompt */}
      {showTooltip && (
        <div
          id="floating-whatsapp-tooltip"
          className="mb-3 max-w-xs animate-fade-in rounded-xl border border-stone-200 bg-white p-3.5 shadow-xl text-xs text-[#1E2022]"
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-bold text-[#1E2022]">
                {detectedOrigin === "cartel" ? "¿Consultás desde la obra?" : "¿Tenés dudas del proyecto?"}
              </p>
              <p className="mt-0.5 text-stone-600">
                Escribinos por WhatsApp para recibir planos y coordinar visita.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setShowTooltip(false);
                setTooltipDismissed(true);
              }}
              aria-label="Cerrar notificación"
              className="text-stone-400 hover:text-stone-600 p-0.5"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-block text-[11px] font-bold uppercase tracking-wider text-[#BC4726] hover:underline"
          >
            Chatear ahora →
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        id="btn-whatsapp-flotante"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-108 hover:bg-[#20bd5a] active:scale-95"
      >
        {/* Soft pulse wave */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="relative h-7 w-7 fill-white/20 transition-transform group-hover:scale-105" />

        {/* Status Dot */}
        <span className="absolute top-0.5 right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#BC4726]" />
      </a>
    </div>
  );
}
