import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useEffect, useState } from "react";

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

const CARD_WIDTH = 340; 
const GAP = 24;
const VISIBLE_CARDS = 4;

export default function ProductCarousel() {
  const [index, setIndex] = useState(VISIBLE_CARDS); 
  const [animate, setAnimate] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    ...produtos.slice(-VISIBLE_CARDS), 
    ...produtos,
    ...produtos.slice(0, VISIBLE_CARDS), 
  ];

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    if (index >= slides.length - VISIBLE_CARDS) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(VISIBLE_CARDS);
        setTimeout(() => setAnimate(true), 50);
      }, 500);
    }

    if (index <= 0) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(slides.length - VISIBLE_CARDS * 2);
        setTimeout(() => setAnimate(true), 50);
      }, 500);
    }
  }, [index, slides.length]);

  return (
    <div 
      className="relative w-full max-w-7xl mt-16 flex items-center justify-center gap-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Botão esquerda - FORA do carrossel */}
      <button
        onClick={prev}
        className="w-10 h-10 rounded-full border-2 border-amarelo text-amarelo
        flex items-center justify-center shrink-0
        hover:bg-amarelo hover:text-white transition-all duration-300
        cursor-pointer z-20"
        aria-label="Produto anterior"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Viewport do carrossel */}
      <div className="overflow-hidden flex-1 max-w-[1100px]">
        <div
          className={`flex gap-6 ${
            animate ? "transition-transform duration-500 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`, 
          }}
        >
          {slides.map((produto, i) => (
            <div
              key={i}
              className="min-w-[340px] bg-white overflow-hidden duration-300"
            >
              {/* Cabeçalho do card */}
              <div className="bg-amarelo text-black text-center py-4 text-lg">
                {produto.titulo}
              </div>

              {/* Imagem do produto */}
              <div className="flex items-center justify-center h-52">
                <img
                  src={produto.imagem}
                  alt={produto.titulo}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Lista de características */}
              <div className="bg-[#D9D9D9] h-38 p-6 mt-4 space-y-3">
                {produto.itens.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check size={18} className="mt-0.5 text-amarelo shrink-0" />
                    <span className="text-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botão direita - FORA do carrossel */}
      <button
        onClick={next}
        className="w-10 h-10 rounded-full border-2 border-amarelo text-amarelo
        flex items-center justify-center shrink-0
        hover:bg-amarelo hover:text-white transition-all duration-300
        z-20 cursor-pointer"
        aria-label="Próximo produto"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}