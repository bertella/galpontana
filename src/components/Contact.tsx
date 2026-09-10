import React, { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { projectConfig } from "../config/projectConfig";

interface ContactProps {
  detectedOrigin?: string | null;
}

export function Contact({ detectedOrigin }: ContactProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState<"Venta" | "Alquiler" | "Ambos">("Ambos");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const baseMessage = "Hola, quisiera recibir información sobre los locales comerciales con depósito de Santa Ana 3845.";

    const hasExtraDetails = name.trim() || phone.trim() || message.trim();
    const fullMessage = hasExtraDetails
      ? `${baseMessage}

*Datos de contacto:*
• *Nombre:* ${name.trim() || "No especificado"}
• *Teléfono:* ${phone.trim() || "No especificado"}
${email.trim() ? `• *Email:* ${email.trim()}\n` : ""}• *Interés:* ${interest}
${message.trim() ? `• *Mensaje:* ${message.trim()}` : ""}`
      : baseMessage;

    const waLink = `https://wa.me/5493512042270?text=${encodeURIComponent(fullMessage)}`;

    setSubmitted(true);
    // Open WhatsApp in new tab
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-[#151719] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Info, Direct WhatsApp link (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-6 rounded-full bg-[#BC4726]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#BC4726]">
                Contacto Directo
              </span>
            </div>

            <h2
              id="contacto-section-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight"
            >
              Conocé el proyecto y coordiná una visita a obra
            </h2>

            <p
              id="contacto-section-text"
              className="mt-4 text-base text-stone-300 leading-relaxed"
            >
              Solicitá planos, condiciones de venta o alquiler y disponibilidad.
            </p>

            {/* Direct Contact Details */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#BC4726]/20 text-[#BC4726]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-stone-400">
                    WhatsApp Comercial
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {projectConfig.contact.whatsappDisplay}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#BC4726]/20 text-[#BC4726]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-stone-400">
                    Correo Electrónico
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {projectConfig.contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#BC4726]/20 text-[#BC4726]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-stone-400">
                    Ubicación de obra
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Santa Ana 3845 · Barrio La Madrid, Córdoba
                  </p>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                id="contacto-direct-wa"
                href={`https://wa.me/${projectConfig.contact.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(projectConfig.messages.contactGeneral)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#BC4726] hover:text-[#D46B4C] font-semibold transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Escribir directamente sin formulario</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-white/10 bg-[#1D2023] p-6 sm:p-8 shadow-xl">
              
              <h3 className="text-lg font-bold text-white mb-1">
                Formulario de consulta
              </h3>
              <p className="text-xs text-stone-400 mb-6">
                Completá los campos y te redirigiremos a WhatsApp con tu solicitud lista para enviar.
              </p>

              {submitted && (
                <div className="mb-6 flex items-center gap-3 rounded-lg border border-[#BC4726]/40 bg-[#BC4726]/10 p-3.5 text-xs text-stone-200">
                  <CheckCircle2 className="h-4 w-4 text-[#BC4726] shrink-0" />
                  <span>Tu mensaje ha sido preparado. Si WhatsApp no se abrió automáticamente, podés hacer clic nuevamente en el botón.</span>
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="form-nombre"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5"
                  >
                    Nombre y Apellido *
                  </label>
                  <input
                    id="form-nombre"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej: Martín Rodríguez"
                    className="w-full rounded-lg border border-white/15 bg-black/30 px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:border-[#BC4726] focus:outline-none focus:ring-1 focus:ring-[#BC4726]"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label
                    htmlFor="form-telefono"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5"
                  >
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    id="form-telefono"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej: 351 555 1234"
                    className="w-full rounded-lg border border-white/15 bg-black/30 px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:border-[#BC4726] focus:outline-none focus:ring-1 focus:ring-[#BC4726]"
                  />
                </div>

                {/* Email Opcional */}
                <div>
                  <label
                    htmlFor="form-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5"
                  >
                    Email <span className="text-stone-500 lowercase">(opcional)</span>
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nombre@empresa.com"
                    className="w-full rounded-lg border border-white/15 bg-black/30 px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:border-[#BC4726] focus:outline-none focus:ring-1 focus:ring-[#BC4726]"
                  />
                </div>

                {/* Interés: Venta / Alquiler / Ambos */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                    Tipo de interés *
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {(["Venta", "Alquiler", "Ambos"] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setInterest(option)}
                        className={`rounded-lg border py-2 text-xs font-semibold transition-all ${
                          interest === option
                            ? "border-[#BC4726] bg-[#BC4726] text-white shadow-sm"
                            : "border-white/15 bg-black/20 text-stone-300 hover:border-white/30"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="form-mensaje"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5"
                  >
                    Mensaje o consulta
                  </label>
                  <textarea
                    id="form-mensaje"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Quisiera coordinar una visita a obra y solicitar planos comerciales..."
                    className="w-full rounded-lg border border-white/15 bg-black/30 px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:border-[#BC4726] focus:outline-none focus:ring-1 focus:ring-[#BC4726]"
                  />
                </div>

                {/* Botón Principal: Consultar por WhatsApp */}
                <button
                  id="form-submit-whatsapp"
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#BC4726] px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg transition-all hover:bg-[#A63D1F] active:scale-[0.99] cursor-pointer"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  <span>Consultar por WhatsApp</span>
                </button>

              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
