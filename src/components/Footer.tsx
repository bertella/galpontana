import { MessageCircle, Mail, Instagram, MapPin } from "lucide-react";
import { projectConfig, buildWhatsAppLink } from "../config/projectConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#0F1012] text-stone-300 border-t border-white/10 pt-14 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand and Address (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <h3 id="footer-brand-title" className="text-xl font-bold text-white tracking-tight">
              {projectConfig.name}
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#BC4726] font-semibold">
              Proyecto Comercial en Construcción
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <MapPin className="h-3.5 w-3.5 text-[#BC4726] shrink-0" />
              <span>Santa Ana 3845 · Barrio La Madrid · Córdoba, Argentina</span>
            </div>
            <p className="text-xs text-stone-400 max-w-md pt-1">
              Dos locales integrables con frente vidriado, estacionamiento frontal y depósito propio en una sola propuesta comercial flexible.
            </p>
          </div>

          {/* Quick links & Contact (6 cols) */}
          <div className="md:col-span-6 flex flex-col justify-between sm:items-end space-y-4">
            
            {/* Contact Channels */}
            <div className="space-y-2 text-xs sm:text-right">
              <div className="flex items-center sm:justify-end gap-2 text-stone-300">
                <MessageCircle className="h-3.5 w-3.5 text-[#BC4726]" />
                <span>WhatsApp:</span>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white hover:text-[#BC4726] transition-colors underline-offset-2 hover:underline"
                >
                  {projectConfig.contact.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center sm:justify-end gap-2 text-stone-300">
                <Mail className="h-3.5 w-3.5 text-[#BC4726]" />
                <span>Email:</span>
                <a
                  href={`mailto:${projectConfig.contact.email}`}
                  className="font-medium text-white hover:text-[#BC4726] transition-colors underline-offset-2 hover:underline"
                >
                  {projectConfig.contact.email}
                </a>
              </div>

              <div className="flex items-center sm:justify-end gap-2 text-stone-300">
                <Instagram className="h-3.5 w-3.5 text-[#BC4726]" />
                <span>Instagram:</span>
                <a
                  href={projectConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white hover:text-[#BC4726] transition-colors underline-offset-2 hover:underline"
                >
                  {projectConfig.contact.instagram}
                </a>
              </div>
            </div>

            {/* Quick Navigation Anchors */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-stone-400">
              <a href="#proyecto" className="hover:text-white transition-colors">Proyecto</a>
              <a href="#espacios" className="hover:text-white transition-colors">Espacios</a>
              <a href="#galeria" className="hover:text-white transition-colors">Galería</a>
              <a href="#ubicacion" className="hover:text-white transition-colors">Ubicación</a>
              <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
            </div>

          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p id="footer-legal-text" className="text-xs text-stone-500 leading-relaxed max-w-2xl">
            La información, medidas e imágenes son referenciales y pueden estar sujetas a modificación.
          </p>

          <p className="text-xs text-stone-600">
            © {currentYear} {projectConfig.name}. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
