import { MoveRight } from "lucide-react";
import Header from "./header";

export default function Section1() {
  return (
    <section
      className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/home_background.png')" }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10">
        <Header />
        <div className="px-34 mt-28 flex flex-col gap-10">
            <h1 className="text-5xl text-amarelo font-titulo">SOLUÇÕES EM VEDAÇÕES</h1>
            <p className="font-corpo text-xl max-w-lg">Com nossa expertise técnica consolidada, garantimos a <strong>segurança</strong>, a <strong>eficiência</strong> e a <strong>longevidade</strong> nos produtos aos nossos clientes.</p>
            <div className="flex gap-4 items-center cursor-pointer mt-12">
                <p className="text-xl italic">Conheça nossas soluções</p>
                <MoveRight size={28} />
            </div>
        </div>
      </div>
    </section>
  );
}
