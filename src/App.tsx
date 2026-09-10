/**
 * Santa Ana Comercial - Landing Page
 * Santa Ana 3845, Barrio La Madrid, Córdoba, Argentina
 */

import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { QuickStats } from "./components/QuickStats";
import { CommercialFront } from "./components/CommercialFront";
import { SpacesAndWarehouse } from "./components/SpacesAndWarehouse";
import { MidPageCta } from "./components/MidPageCta";
import { Location } from "./components/Location";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { projectConfig } from "./config/projectConfig";

export default function App() {
  // Detection and preservation of QR code source parameter (?origen=cartel)
  const [detectedOrigin, setDetectedOrigin] = useState<string | null>(null);

  useEffect(() => {
    // Check URL search parameters on initial load
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const originParam = urlParams.get("origen");

      if (originParam) {
        setDetectedOrigin(originParam);
        sessionStorage.setItem("visita_origen", originParam);

        // Remove the parameter from the visible URL bar without reloading the page
        const newUrl = window.location.pathname + window.location.hash;
        window.history.replaceState(null, "", newUrl);
      } else {
        const storedOrigin = sessionStorage.getItem("visita_origen");
        if (storedOrigin) {
          setDetectedOrigin(storedOrigin);
        }
      }
    } catch {
      // Graceful fallback if URL/sessionStorage isn't accessible
    }
  }, []);

  const heroWhatsAppMessage = detectedOrigin === "cartel"
    ? projectConfig.messages.cartelOriginWhatsapp
    : projectConfig.messages.heroWhatsapp;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1E2022] font-sans selection:bg-[#BC4726]/15 selection:text-[#BC4726]">
      {/* 1. Header */}
      <Header customWhatsAppMessage={heroWhatsAppMessage} />

      <main>
        {/* 2. Hero Section: frete2.png */}
        <Hero customWhatsAppMessage={heroWhatsAppMessage} />

        {/* 3. Featured Quick Stats Indicators Block */}
        <QuickStats />

        {/* 4. Commercial Front Section: fteloc.png ("Dos locales integrables") */}
        <CommercialFront />

        {/* 5. Spaces and Warehouse: Cards for "Salón comercial" (salonedi2.png) and "Depósito integrado" (editadaref.png) */}
        <SpacesAndWarehouse />

        {/* 6. Focused Direct Inquiry CTA */}
        <MidPageCta detectedOrigin={detectedOrigin} />

        {/* 7. Location Section */}
        <Location />

        {/* 8. Contact Form & Direct Inquiries Section */}
        <Contact detectedOrigin={detectedOrigin} />
      </main>

      {/* 9. Footer with legal notes */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp detectedOrigin={detectedOrigin} />
    </div>
  );
}
