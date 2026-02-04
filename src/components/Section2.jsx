import ProductCarousel from "./ProductCarousel";

export default function Section2() {
  return (
    <section
      id="catalogo"
      className="relative w-full min-h-screen flex flex-col items-center pt-16 sm:pt-24 md:pt-32 lg:pt-40 text-black px-4 sm:px-6"
    >
      <h2 className="font-titulo font-light italic text-lg sm:text-xl text-center" >
        Catálogo
      </h2>

      <h1 className="font-titulo text-2xl sm:text-3xl max-w-sm sm:max-w-xl font-medium text-center mt-4 sm:mt-6">
        Soluções de Alta Performance e Tecnologia
      </h1>

      <p className="font-titulo font-light max-w-lg sm:max-w-2xl text-base sm:text-lg md:text-xl text-center mt-4 sm:mt-6">
        Com materiais certificados e tecnologias de ponta, garantimos a
        conformidade e a estabilidade de cada aplicação.
      </p>

      <ProductCarousel />
    </section>
  );
}