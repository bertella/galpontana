import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { projectConfig, buildWhatsAppLink } from "../config/projectConfig";

interface MidPageCtaProps {
  detectedOrigin?: string | null;
}

export function MidPageCta({ detectedOrigin: _detectedOrigin }: MidPageCtaProps) {
  const whatsappUrl = buildWhatsAppLink(projectConfig.messages.heroWhatsapp);

  return (
    <section className="bg-[#1E2022] py-14 sm:py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10 backdrop-blur-xs"
        >
          <div className="max-w-2xl text-center md:text-left">
            <span className="inline-block rounded-full bg-[#BC4726]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#D46B4C] mb-3">
              Atención Comercial
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              ¿Buscás un espacio comercial con depósito en Barrio La Madrid?
            </h3>
            <p className="mt-2 text-sm text-stone-300">
              Coordiná una visita a la obra en Santa Ana 3845 y recibí planos actualizados y condiciones comerciales.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              id="mid-cta-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#BC4726] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#A63D1F] active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              <span>Consultar por WhatsApp</span>
            </a>

            <a
              id="mid-cta-form"
              href="#contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-stone-200 transition-colors hover:bg-white/10"
            >
              <span>Ver formulario</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
