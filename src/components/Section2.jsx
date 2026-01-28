import ProductCarousel from "./ProductCarousel";

export default function Section2() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center pt-40 text-black"
    >
      <h2 className="font-titulo font-light italic text-xl text-center">
        Catálogo
      </h2>

      <h1 className="font-titulo text-3xl max-w-xl font-medium text-center mt-6">
        Soluções de Alta Performance e Tecnologia
      </h1>

      <p className="font-titulo font-light max-w-2xl text-xl text-center mt-6">
        Com materiais certificados e tecnologias de ponta, garantimos a
        conformidade e a estabilidade de cada aplicação.
      </p>

      <ProductCarousel />
    </section>
  );
}
