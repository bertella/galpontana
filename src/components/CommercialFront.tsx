import { useState } from "react";
import { Layers, Eye, CarFront } from "lucide-react";
import { motion } from "motion/react";
import { projectConfig } from "../config/projectConfig";

export function CommercialFront() {
  const [imageError, setImageError] = useState(false);
  const highlights = [
    {
      icon: Eye,
      title: "Dos frentes vidriados",
      description: "Fachada moderna con ventanales de piso a techo que maximizan la visibilidad comercial.",
    },
    {
      icon: Layers,
      title: "Posibilidad de integración",
      description: "Estructura pensada para operar como dos unidades independientes o unificarse en un gran salón continuo.",
    },
    {
      icon: CarFront,
      title: "Estacionamiento frontal",
      description: "Área de estacionamiento demarcada al frente para comodidad de clientes y proveedores.",
    },
  ];

  return (
    <section id="locales" className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-[#E5E3DD] relative">
      <span id="proyecto" className="absolute -top-20" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Text & Highlights (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-6 rounded-full bg-[#BC4726]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#BC4726]">
                Frente Comercial
              </span>
            </div>

            <h2
              id="locales-section-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1E2022] leading-tight"
            >
              Dos locales integrables
            </h2>

            <p
              id="locales-section-text"
              className="mt-4 text-base text-[#57595B] leading-relaxed"
            >
              El proyecto cuenta con dos unidades comerciales al frente que pueden operar de forma totalmente autónoma o unificarse en un amplio salón continuo. Diseñados con carpintería vidriada de gran porte para potenciar la visibilidad y el tráfico de clientes sobre Santa Ana.
            </p>

            {/* Highlights blocks */}
            <div className="mt-8 space-y-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 rounded-lg border border-[#E5E3DD] bg-white p-3.5 sm:p-4 shadow-2xs"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#FAF9F6] text-[#BC4726] border border-[#E5E3DD]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1E2022]">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-[#57595B] leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Image fteloc.png (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-2xl border border-[#E5E3DD] bg-stone-100 shadow-sm">
              {!imageError ? (
                <img
                  id="img-locales-front"
                  src={projectConfig.images.locales}
                  alt="Dos locales comerciales integrables y estacionamiento frontal"
                  onError={() => setImageError(true)}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[3/2] sm:aspect-[16/10] object-cover"
                />
              ) : (
                <div className="w-full aspect-[16/10] flex items-center justify-center bg-stone-100 text-stone-500 text-xs">
                  Frente comercial - Santa Ana 3845
                </div>
              )}
            </div>

            {/* Architectural caption below the image */}
            <p
              id="caption-locales-front"
              className="mt-3 text-center sm:text-left text-xs font-medium text-[#707376]"
            >
              Frente comercial sobre Santa Ana: dos locales integrables con ventanales y dársenas de estacionamiento vehicular.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
