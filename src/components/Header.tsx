import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { projectConfig, buildWhatsAppLink } from "../config/projectConfig";

interface HeaderProps {
  customWhatsAppMessage?: string;
}

export function Header({ customWhatsAppMessage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = buildWhatsAppLink(
    customWhatsAppMessage || projectConfig.messages.heroWhatsapp
  );

  const navLinks = [
    { name: "Locales", href: "#locales" },
    { name: "Salón y Depósito", href: "#espacios" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#E5E3DD]"
          : "bg-gradient-to-b from-black/60 via-black/20 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        {/* Project Brand */}
        <a
          id="header-brand-logo"
          href="#"
          className="group flex flex-col focus:outline-none"
        >
          <span
            className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
              isScrolled ? "text-[#1E2022]" : "text-white"
            }`}
          >
            {projectConfig.name}
          </span>
          <span
            className={`text-[11px] uppercase tracking-wider transition-colors ${
              isScrolled ? "text-[#707376]" : "text-stone-300"
            }`}
          >
            Santa Ana 3845 · Córdoba
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          id="header-desktop-nav"
          className="hidden md:flex items-center space-x-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-link-${link.name.toLowerCase()}`}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#BC4726] ${
                isScrolled ? "text-[#4A4D50]" : "text-stone-200 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center space-x-3">
          {/* Always visible WhatsApp CTA */}
          <a
            id="header-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#BC4726] px-3.5 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#A63D1F] active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">Consultar por WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            id="header-mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            className={`flex h-10 w-10 md:hidden items-center justify-center rounded-lg transition-colors ${
              isScrolled
                ? "text-[#1E2022] hover:bg-stone-200/50"
                : "text-white hover:bg-white/10"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="header-mobile-dropdown"
          className="border-b border-[#E5E3DD] bg-[#FAF9F6] px-4 py-4 md:hidden shadow-lg"
        >
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#1E2022] hover:bg-[#EAE8E1] hover:text-[#BC4726] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
