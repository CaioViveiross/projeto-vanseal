import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

const produtos = [
  {
    titulo: "Escova de Vedação",
    imagem: "/images/escova_vedacao.png",
    itens: [
      "Aprovado pela Norma ABNT-NBR15: 969-2",
      "Com Barreira e Sem Barreira",
    ],
  },
  {
    titulo: "Espuma de Vedação",
    imagem: "/images/fita_vedacao.png",
    itens: [
      "Aprovada pela Norma ABNT-NBR",
      "Resistência Avançada",
      "Alta e Baixa Densidade",
    ],
  },
  {
    titulo: "Tela Mosquiteira",
    imagem: "/images/tela_mosquiteira.png",
    itens: [
      "Trama em Fibra de Vidro",
      "Anti-chamas",
      "Alta resistência",
    ],
  },
  {
    titulo: "Vedação Quadri Fin",
    imagem: "/images/quadri_fin.png",
    itens: [
      "Alta durabilidade",
      "Resistência UV",
      "Isolamento Térmico e Sonoro",
    ],
  },
];

const GAP = 24;

function getVisibleCards(windowWidth) {
  if (windowWidth < 640) return 1;
  if (windowWidth < 1024) return 2;
  if (windowWidth < 1400) return 3;
  return 4;
}

function getCardWidth(viewportWidth, visibleCards) {
  return (viewportWidth - GAP * (visibleCards - 1)) / visibleCards;
}

export default function ProductCarousel() {
  const viewportRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );

  const measureViewport = useCallback(() => {
    if (viewportRef.current) {
      setViewportWidth(viewportRef.current.getBoundingClientRect().width);
    }
  }, []);

  useEffect(() => {
    measureViewport();
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      measureViewport();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [measureViewport]);

  const visibleCards = getVisibleCards(windowWidth);
  const cardWidth = viewportWidth > 0 ? getCardWidth(viewportWidth, visibleCards) : 340;

  const [index, setIndex] = useState(visibleCards);
  const [animate, setAnimate] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setAnimate(false);
    setIndex(visibleCards);
    setTimeout(() => setAnimate(true), 50);
  }, [visibleCards]);

  const slides = [
    ...produtos.slice(-visibleCards),
    ...produtos,
    ...produtos.slice(0, visibleCards),
  ];

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    if (index >= slides.length - visibleCards) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(visibleCards);
        setTimeout(() => setAnimate(true), 50);
      }, 500);
    }

    if (index <= 0) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(slides.length - visibleCards * 2);
        setTimeout(() => setAnimate(true), 50);
      }, 500);
    }
  }, [index, slides.length, visibleCards]);

  return (
    <div
      className="relative w-full max-w-7xl mt-10 sm:mt-14 lg:mt-16 px-4 sm:px-6 md:px-8 lg:px-16 flex items-center justify-center gap-2 sm:gap-4 lg:gap-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button
        onClick={prev}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-amarelo text-amarelo
        flex items-center justify-center shrink-0
        hover:bg-amarelo hover:text-white transition-all duration-300
        cursor-pointer z-20"
        aria-label="Produto anterior"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>

      <div ref={viewportRef} className="overflow-hidden flex-1 relative z-0">
        <div
          className={`flex gap-6 ${
            animate ? "transition-transform duration-500 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${index * (cardWidth + GAP)}px)`,
          }}
        >
          {slides.map((produto, i) => (
            <div
              key={i}
              className="bg-white overflow-hidden duration-300 shrink-0 flex flex-col"
              style={{ width: `${cardWidth}px` }}
            >
              <div className="w-full bg-amarelo text-black py-3 sm:py-4 px-4 text-base sm:text-lg font-semibold flex items-center justify-center text-center leading-snug min-h-[48px] sm:min-h-[56px]">
                {produto.titulo}
              </div>

              <div className="w-full h-40 sm:h-48 md:h-52">
                <img
                  src={produto.imagem}
                  alt={produto.titulo}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="w-full bg-[#D9D9D9] p-4 sm:p-5 md:p-6 mt-4 space-y-2 sm:space-y-3 flex-1">
                {produto.itens.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700">
                    <Check size={16} className="mt-0.5 text-amarelo shrink-0 sm:w-[18px] sm:h-[18px]" />
                    <span className="text-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={next}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-amarelo text-amarelo
        flex items-center justify-center shrink-0
        hover:bg-amarelo hover:text-white transition-all duration-300
        z-20 cursor-pointer"
        aria-label="Próximo produto"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>
    </div>
  );
}