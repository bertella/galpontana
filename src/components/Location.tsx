import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { motion } from "motion/react";
import { projectConfig } from "../config/projectConfig";

export function Location() {
  return (
    <section id="ubicacion" className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-[#E5E3DD]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Info & Action (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-6 rounded-full bg-[#BC4726]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#BC4726]">
                Ubicación
              </span>
            </div>

            <h2
              id="ubicacion-section-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1E2022] leading-tight"
            >
              Sobre Santa Ana, en Barrio La Madrid
            </h2>

            <p
              id="ubicacion-section-text"
              className="mt-4 text-base text-[#57595B] leading-relaxed"
            >
              Un proyecto comercial sobre calle Santa Ana 3845, Barrio La Madrid, Córdoba.
            </p>

            <div className="mt-6 rounded-xl border border-[#E5E3DD] bg-white p-5 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#BC4726]/10 text-[#BC4726]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1E2022]">
                    Dirección de obra
                  </h3>
                  <p className="mt-0.5 text-sm text-[#4A4D50]">
                    {projectConfig.address.street}
                  </p>
                  <p className="text-xs text-[#707376]">
                    {projectConfig.address.neighborhood} · {projectConfig.address.city}, Argentina
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button: Ver ubicación with [LINK_GOOGLE_MAPS] */}
            <div className="mt-8">
              <a
                id="btn-ver-ubicacion"
                href={projectConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#BC4726] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-sm transition-all hover:bg-[#A63D1F] active:scale-[0.98]"
              >
                <span>Ver ubicación</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Prepared Google Maps Integration Block (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div
              id="google-maps-block"
              className="relative overflow-hidden rounded-2xl border border-[#E5E3DD] bg-white shadow-sm"
            >
              {/* Interactive map preview container */}
              <div className="relative h-[340px] sm:h-[400px] w-full bg-[#EAE8E3]">
                {/* Embedded OpenStreetMap / Google Maps iframe placeholder for instant rendering */}
                <iframe
                  title="Mapa de ubicación Santa Ana 3845"
                  className="h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
                  loading="lazy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-64.238%2C-31.428%2C-64.218%2C-31.412&layer=mapnik&marker=-31.420%2C-64.228"
                />

                {/* Architectural Pin Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="relative flex flex-col items-center">
                    <div className="flex items-center gap-2 rounded-lg bg-[#1E2022] px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl">
                      <span className="h-2 w-2 rounded-full bg-[#BC4726]" />
                      <span>Santa Ana 3845</span>
                    </div>
                    <div className="h-2 w-2 rotate-45 bg-[#1E2022] -mt-1" />
                    <div className="h-3 w-3 rounded-full bg-[#BC4726] border-2 border-white shadow-sm mt-1 animate-ping" />
                  </div>
                </div>

                {/* Bottom Bar inside map card */}
                <div className="absolute inset-x-0 bottom-0 border-t border-[#E5E3DD] bg-white/95 backdrop-blur-xs px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#57595B]">
                    <Navigation className="h-3.5 w-3.5 text-[#BC4726]" />
                    <span>Santa Ana 3845, Barrio La Madrid</span>
                  </div>
                  <a
                    href={projectConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#BC4726] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Abrir en Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
