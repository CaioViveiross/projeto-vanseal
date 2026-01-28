import { ChartSpline, ShieldCheck, Target } from "lucide-react";

export default function Section4() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 text-black bg-white">
            <div className="max-w-4xl mb-16 text-center">
                <h2 className="font-titulo font-light italic text-xl mb-4">
                    Missão, visão e valores
                </h2>

                <h1 className="font-titulo text-3xl font-medium mb-6">
                    Fundamentos que Sustentam Nossa Engenharia
                </h1>

                <p className="font-titulo font-light text-xl ">
                    Propósito claro, visão de longo prazo e valores inegociáveis que orientam cada solução que entregamos à indústria.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full h-80">
                 <div className="bg-white border-2 border-gray-900 flex flex-col">
                    <div className="flex items-center gap-2">
                        <div className="p-8 relative bottom-6 right-6 z-10 bg-white flex items-center justify-center">
                            <Target className="text-amarelo stroke-1" size={80} />
                        </div>
                        <h3 className="font-titulo text-2xl font-semibold relative right-8 bottom-4">Missão</h3>
                    </div>

                    <div className="px-8 relative bottom-6">
                        <p className="text-base">
                            Prover o mercado industrial com soluções de vedação e isolamento térmico de altíssima performance e confiabilidade, sendo um parceiro estratégico para a segurança e eficiência dos sistemas de nossos clientes.
                        </p>
                    </div>
                </div>

                <div className="bg-white border-2 border-gray-900 flex flex-col">
                    <div className="flex items-center gap-2">
                        <div className="p-8 relative bottom-6 right-6 z-10 bg-white flex items-center justify-center">
                            <ChartSpline className="text-amarelo stroke-1" size={80} />
                        </div>
                        <h3 className="font-titulo text-2xl font-semibold relative right-8 bottom-4">Visão</h3>
                    </div>

                    <div className="px-8 relative bottom-6">
                        <p className="text-base">
                            Ser reconhecida como a referência técnica em soluções avançadas de vedação e isolamento, expandindo de forma sustentável e inovadora, sempre comprometida com a qualidade e a excelência em cada projeto.
                        </p>
                    </div>
                </div>

                 <div className="bg-white border-2 border-gray-900 flex flex-col">
                    <div className="flex items-center gap-2">
                        <div className="p-8 relative bottom-6 right-6 z-10 bg-white flex items-center justify-center">
                            <ShieldCheck className="text-amarelo stroke-1" size={80} />
                        </div>
                        <h3 className="font-titulo text-2xl font-semibold relative right-8 bottom-4">Valores</h3>
                    </div>

                    <div className="px-8 relative bottom-6">
                        <p className="text-base">
                            Nossa atuação une excelência técnica, inovação contínua e responsabilidade sustentável, com foco na qualidade em cada etapa produtiva e na entrega de soluções de vedação e isolamento alinhadas aos mais altos padrões do mercado.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}