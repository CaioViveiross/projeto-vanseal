import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="flex items-center justify-between text-white w-full px-4 sm:px-8 md:px-14 lg:px-31 py-6 sm:py-10 md:py-16 lg:py-25">
      <img
        src="/images/logo_vanseal_branca.svg"
        alt="Vanseal Logo"
        className="w-36 sm:w-40 md:w-60 lg:w-60"
      />

      <ul className="hidden md:flex items-center gap-6 lg:gap-16 font-corpo">
        <li 
          className="text-base lg:text-xl font-semibold hover:text-amarelo transition-colors cursor-pointer"
          onClick={() => scrollToSection("catalogo")}
        >
          Catálogo
        </li>
        <li 
          className="text-base lg:text-xl font-semibold hover:text-amarelo transition-colors cursor-pointer"
          onClick={() => scrollToSection("sobre")}
        >
          Sobre Nós
        </li>
        <li 
          className="text-base lg:text-xl font-semibold hover:text-amarelo transition-colors cursor-pointer"
          onClick={() => scrollToSection("valores")}
        >
          Valores
        </li>
        <button 
          className="px-4 lg:px-6 py-2 bg-[#1E1E1E] rounded-3xl text-base lg:text-xl font-semibold hover:bg-amarelo transition-colors cursor-pointer"
          onClick={() => scrollToSection("contato")}
        >
          Fale com um especialista
        </button>
      </ul>

      <button
        className="md:hidden flex items-center justify-center p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {menuOpen && (
        <nav className="md:hidden fixed inset-0 top-0 left-0 w-full h-full bg-black/90 z-100 flex flex-col items-center justify-center gap-8 font-corpo">
          <button
            className="absolute top-6 right-4 text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={28} />
          </button>

          <li 
            className="text-xl font-semibold hover:text-amarelo transition-colors cursor-pointer list-none"
            onClick={() => scrollToSection("catalogo")}
          >
            Catálogo
          </li>
          <li 
            className="text-xl font-semibold hover:text-amarelo transition-colors cursor-pointer list-none"
            onClick={() => scrollToSection("sobre")}
          >
            Sobre Nós
          </li>
          <li 
            className="text-xl font-semibold hover:text-amarelo transition-colors cursor-pointer list-none"
            onClick={() => scrollToSection("valores")}
          >
            Valores
          </li>
          <button
            className="px-6 py-3 bg-[#1E1E1E] rounded-3xl text-xl font-semibold hover:bg-amarelo transition-colors cursor-pointer"
            onClick={() => scrollToSection("contato")}
          >
            Fale com um especialista
          </button>
        </nav>
      )}
    </header>
  );
}