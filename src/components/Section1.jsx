import { MoveRight } from "lucide-react";
import Header from "./Header";


export default function Section1() {

  return (
    <section
      className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/home_background.png')" }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative">
        <Header />
        <div className="px-4 sm:px-8 md:px-14 lg:px-34 mt-10 sm:mt-16 md:mt-20 lg:mt-28 flex flex-col gap-6 sm:gap-8 lg:gap-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-amarelo font-titulo font-bold">
            SOLUÇÕES EM VEDAÇÕES
          </h1>
          <p className="font-corpo text-base sm:text-lg md:text-xl max-w-lg">
            Com nossa expertise técnica consolidada, garantimos a{" "}
            <strong>segurança</strong>, a <strong>eficiência</strong> e a{" "}
            <strong>longevidade</strong> nos produtos aos nossos clientes.
          </p>
         <div
            className="flex gap-3 sm:gap-4 items-center cursor-pointer mt-6 sm:mt-8 lg:mt-10 mb-10 sm:mb-12 lg:mb-18"
            role="button"
            tabIndex={0}
            onClick={() => {
              const el = document.getElementById("catalogo");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
                const el = document.getElementById("catalogo");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <p className="text-base sm:text-lg md:text-xl italic" >
              Conheça nossas soluções
            </p>
            <MoveRight size={24} className="sm:w-7 sm:h-7" />
          </div>
        </div>
      </div>
    </section>
  );
}