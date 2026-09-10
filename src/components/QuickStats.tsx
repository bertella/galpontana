import { MapPin, ArrowLeftRight, Maximize2, Store, Warehouse } from "lucide-react";
import { motion } from "motion/react";

export function QuickStats() {
  const stats = [
    {
      id: "stat-location",
      icon: MapPin,
      label: "Ubicación",
      value: "Santa Ana 3845",
      detail: "Barrio La Madrid · Córdoba",
    },
    {
      id: "stat-frente",
      icon: ArrowLeftRight,
      label: "Frente de terreno",
      value: "14 m de frente",
      detail: "33,77 m de fondo",
    },
    {
      id: "stat-superficie",
      icon: Maximize2,
      label: "Superficie de lote",
      value: "472,8 m²",
      detail: "Terreno aproximado",
    },
    {
      id: "stat-locales",
      icon: Store,
      label: "Frente comercial",
      value: "Dos locales",
      detail: "Integrables en un salón",
    },
    {
      id: "stat-deposito",
      icon: Warehouse,
      label: "Espacio operativo",
      value: "Depósito integrado",
      detail: "Con acceso propio",
    },
  ];

  return (
    <section
      id="datos-destacados"
      className="relative z-20 -mt-10 sm:-mt-14 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col justify-between rounded-xl border border-[#E5E3DD] bg-[#FAF9F6] p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#707376]">
                  {item.label}
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#BC4726]/10 text-[#BC4726]">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold tracking-tight text-[#1E2022]">
                  {item.value}
                </p>
                <p className="mt-0.5 text-xs text-[#57595B]">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
