import { useState } from "react";
import { Store, Warehouse, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { projectConfig } from "../config/projectConfig";

export function SpacesAndWarehouse() {
  const [salonImgError, setSalonImgError] = useState(false);
  const [depositoImgError, setDepositoImgError] = useState(false);

  const salonFeatures = [
    "Modulación estructural adaptable a diversos rubros",
    "Frente vidriado continuo con excelente iluminación natural",
    "Espacio para showroom, exhibición o atención al público",
    "Sanitarios proyectados y sector administrativo",
  ];

  const depositoFeatures = [
    "Portón metálico de acceso vehicular (3 m de ancho x 4 m de alto)",
    "Piso de hormigón de alta resistencia para almacenamiento",
    "Conexión operativa directa con los locales al frente",
    "Recepción y despacho de mercadería ágil e independiente",
  ];

  return (
    <section
      id="espacios"
      className="py-16 sm:py-24 bg-white border-b border-[#E5E3DD] relative"
    >
      <span id="deposito" className="absolute top-1/2" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-6 rounded-full bg-[#BC4726]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#BC4726]">
              Configuración Operativa
            </span>
          </div>

          <h2
            id="spaces-section-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1E2022] leading-tight"
          >
            Salón comercial y depósito integrado
          </h2>

          <p
            id="spaces-section-subtitle"
            className="mt-4 text-base sm:text-lg text-[#57595B] leading-relaxed"
          >
            Una propuesta arquitectónica diseñada para resolver en una misma ubicación comercial la atención y venta al público con la logística y el stock operativo.
          </p>
        </div>

        {/* Two Structured Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Card 1: Salón comercial (salonedi2.png) */}
          <motion.article
            id="card-salon-comercial"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col rounded-2xl border border-[#E5E3DD] bg-[#FAF9F6] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image Container: salonedi2.png */}
            <div className="relative overflow-hidden bg-stone-100 border-b border-[#E5E3DD]">
              {!salonImgError ? (
                <img
                  id="img-card-salon"
                  src={projectConfig.images.salon}
                  alt="Salón comercial - Santa Ana 3845"
                  onError={() => setSalonImgError(true)}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/10] object-cover"
                />
              ) : (
                <div className="w-full aspect-[16/10] flex items-center justify-center bg-stone-100 text-stone-500 text-xs">
                  Salón comercial - Santa Ana 3845
                </div>
              )}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-[#1E2022]/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xs">
                  <Store className="h-3.5 w-3.5 text-[#BC4726]" />
                  Salón Comercial
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
              <div>
                <h3
                  id="title-card-salon"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E2022]"
                >
                  Salón comercial
                </h3>

                <p
                  id="text-card-salon"
                  className="mt-3 text-sm sm:text-base text-[#57595B] leading-relaxed"
                >
                  Interior diáfano con excelente modulación estructural e iluminación natural a través de ventanales hacia la calle. Su planta libre permite organizar áreas de atención al público, exposición de productos, oficinas administrativas y sanitarios propios.
                </p>

                {/* Features Checklist */}
                <div className="mt-6 space-y-2.5 pt-5 border-t border-[#E5E3DD]">
                  {salonFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4D50]">
                      <CheckCircle2 className="h-4 w-4 text-[#BC4726] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E3DD]/70 flex items-center justify-between text-xs text-[#707376]">
                <span>Planta diáfana modulable</span>
                <span className="font-semibold text-[#BC4726]">Frente vidriado</span>
              </div>
            </div>
          </motion.article>

          {/* Card 2: Depósito integrado (editadaref.png) */}
          <motion.article
            id="card-deposito-integrado"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col rounded-2xl border border-[#E5E3DD] bg-[#FAF9F6] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image Container: editadaref.png */}
            <div className="relative overflow-hidden bg-stone-100 border-b border-[#E5E3DD]">
              {!depositoImgError ? (
                <img
                  id="img-card-deposito"
                  src={projectConfig.images.deposito}
                  alt="Depósito integrado con portón vehicular - Santa Ana 3845"
                  onError={() => setDepositoImgError(true)}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/10] object-cover"
                />
              ) : (
                <div className="w-full aspect-[16/10] flex items-center justify-center bg-stone-100 text-stone-500 text-xs">
                  Depósito integrado - Santa Ana 3845
                </div>
              )}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-[#1E2022]/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xs">
                  <Warehouse className="h-3.5 w-3.5 text-[#BC4726]" />
                  Depósito Integrado
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
              <div>
                <h3
                  id="title-card-deposito"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E2022]"
                >
                  Depósito integrado
                </h3>

                <p
                  id="text-card-deposito"
                  className="mt-3 text-sm sm:text-base text-[#57595B] leading-relaxed"
                >
                  Nave posterior conectada directamente con el frente comercial, dotada de portón metálico de 3 metros de ancho por 4 metros de alto para un cómodo acceso y maniobra vehicular. Piso de hormigón de alta resistencia para almacenamiento de mercadería y despacho ágil.
                </p>

                {/* Features Checklist */}
                <div className="mt-6 space-y-2.5 pt-5 border-t border-[#E5E3DD]">
                  {depositoFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4D50]">
                      <CheckCircle2 className="h-4 w-4 text-[#BC4726] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E3DD]/70 flex items-center justify-between text-xs text-[#707376]">
                <span>Portón 3 m x 4 m</span>
                <span className="font-semibold text-[#BC4726]">Acceso vehicular directo</span>
              </div>
            </div>
          </motion.article>

        </div>

      </div>
    </section>
  );
}
