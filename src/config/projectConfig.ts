/**
 * CONFIGURACIÓN PRINCIPAL DEL PROYECTO
 * =====================================
 * Este archivo centraliza los datos de contacto, enlaces, precios y condiciones comerciales.
 * Modificá estos valores fácilmente para actualizar la landing page completa.
 */

export interface ProjectConfig {
  name: string;
  tagline: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    province: string;
    country: string;
    fullText: string;
  };
  contact: {
    // Número con código de país sin espacios ni guiones para la API de WhatsApp (Ej: "5493510000000")
    whatsappNumber: string;
    // Número formateado para visualización amigable en pantalla
    whatsappDisplay: string;
    email: string;
    instagram: string;
    instagramUrl: string;
    googleMapsUrl: string;
  };
  commercial: {
    price: string; // "Consultar"
    conditions: string; // "Venta o Alquiler disponible"
    status: string; // "PROYECTO EN CONSTRUCCIÓN"
  };
  specs: {
    frenteTerreno: string;
    fondoTerreno: string;
    superficieTerreno: string;
    portonDeposito: string;
    locales: string;
    estacionamiento: string;
    sanitarios: string;
  };
  messages: {
    heroWhatsapp: string;
    contactGeneral: string;
    cartelOriginWhatsapp: string;
  };
  images: {
    hero: string;
    locales: string;
    salon: string;
    deposito: string;
  };
}

export const projectConfig: ProjectConfig = {
  name: "Santa Ana Comercial",
  tagline: "Locales comerciales con depósito en Santa Ana 3845 | Barrio La Madrid",
  address: {
    street: "Santa Ana 3845",
    neighborhood: "Barrio La Madrid",
    city: "Córdoba",
    province: "Córdoba",
    country: "Argentina",
    fullText: "Santa Ana 3845, Barrio La Madrid, Córdoba, Argentina",
  },
  contact: {
    whatsappNumber: "5493512042270",
    whatsappDisplay: "+54 9 351 204-2270",
    email: "contacto@santaanacomercial.com",
    instagram: "@santaanacomercial",
    instagramUrl: "https://instagram.com",
    // Enlace directo a Google Maps para la dirección Santa Ana 3845, Barrio La Madrid, Córdoba
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Ana+3845+Barrio+La+Madrid+Cordoba+Argentina",
  },
  commercial: {
    price: "Consultar",
    conditions: "Venta o Alquiler disponible",
    status: "PROYECTO EN CONSTRUCCIÓN",
  },
  specs: {
    frenteTerreno: "14 m de frente",
    fondoTerreno: "33,77 m de fondo",
    superficieTerreno: "472,8 m² aprox.",
    portonDeposito: "3 m de ancho x 4 m de alto",
    locales: "Dos locales comerciales con posibilidad de integración",
    estacionamiento: "Estacionamiento frontal proyectado",
    sanitarios: "Sanitarios proyectados",
  },
  messages: {
    // Mensaje predeterminado para todos los botones de consulta
    heroWhatsapp: "Hola, quisiera recibir información sobre los locales comerciales con depósito de Santa Ana 3845.",
    contactGeneral: "Hola, quisiera recibir información sobre los locales comerciales con depósito de Santa Ana 3845.",
    cartelOriginWhatsapp: "Hola, quisiera recibir información sobre los locales comerciales con depósito de Santa Ana 3845.",
  },
  images: {
    hero: "/images/frete2.png",
    locales: "/images/fteloc.png",
    salon: "/images/salonedi2.png",
    deposito: "/images/editadaref.png",
  },
};

export interface ProjectRenderItem {
  id: string;
  filename: string;
  src: string;
  title: string;
  caption: string;
  tag: string;
  sectionTarget: string;
}

export const projectRenders: ProjectRenderItem[] = [
  {
    id: "render-hero",
    filename: "frete2.png",
    src: projectConfig.images.hero,
    title: "Fachada Principal y Accesos",
    caption: "Fachada frontal sobre Santa Ana 3845: dos locales integrables, acceso vehicular al depósito y estacionamiento.",
    tag: "Hero / Fachada",
    sectionTarget: "#hero-section",
  },
  {
    id: "render-locales",
    filename: "fteloc.png",
    src: projectConfig.images.locales,
    title: "Dos Locales Integrables",
    caption: "Perspectiva de los dos frentes comerciales vidriados y dársenas de estacionamiento vehicular.",
    tag: "Dos Locales Integrables",
    sectionTarget: "#locales",
  },
  {
    id: "render-salon",
    filename: "salonedi2.png",
    src: projectConfig.images.salon,
    title: "Espacios Flexibles",
    caption: "Interior diáfano del salón comercial con estructura modulada de hormigón a la vista y luz natural.",
    tag: "Espacios Flexibles",
    sectionTarget: "#espacios",
  },
  {
    id: "render-deposito",
    filename: "editadaref.png",
    src: projectConfig.images.deposito,
    title: "Depósito Integrado",
    caption: "Interior de la nave de depósito con portón metálico de acceso vehicular y piso de hormigón.",
    tag: "Depósito Integrado",
    sectionTarget: "#deposito",
  },
];

/**
 * Función utilitaria para construir enlaces directos a WhatsApp con texto codificado
 */
export function buildWhatsAppLink(customMessage?: string): string {
  const number = projectConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");
  const message = customMessage || projectConfig.messages.heroWhatsapp;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
