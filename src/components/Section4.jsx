import { ChartSpline, ShieldCheck, Target } from "lucide-react";

export default function Section4() {
    return (
        <section id="valores" className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 lg:py-20 text-black bg-white">
            <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-16 text-center">
                <h2 className="font-titulo font-light italic text-lg sm:text-xl mb-3 sm:mb-4">
                    Missão, visão e valores
                </h2>

                <h1 className="font-titulo text-2xl sm:text-3xl font-medium mb-4 sm:mb-6">
                    Fundamentos que Sustentam Nossa Engenharia
                </h1>

                <p className="font-titulo font-light text-base sm:text-lg lg:text-xl">
                    Propósito claro, visão de longo prazo e valores inegociáveis que orientam cada solução que entregamos à indústria.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">

                <div className="bg-white border-2 border-gray-900 flex flex-col">
                    <div className="flex items-center gap-2">
                        <div className="p-4 lg:p-8 relative bottom-3 lg:bottom-6 right-3 lg:right-6 z-10 bg-white flex items-center justify-center">
                            <Target className="text-amarelo stroke-1 w-10 h-10 lg:w-20 lg:h-20" />
                        </div>
                        <h3 className="font-titulo text-xl lg:text-2xl font-semibold relative right-4 lg:right-8 bottom-2 lg:bottom-4">Missão</h3>
                    </div>

                    <div className="px-4 lg:px-8 relative bottom-2 lg:bottom-6">
                        <p className="text-sm sm:text-base">
                            Prover o mercado industrial com soluções de vedação e isolamento térmico de altíssima performance e confiabilidade, sendo um parceiro estratégico para a segurança e eficiência dos sistemas de nossos clientes.
                        </p>
                    </div>
                </div>

                <div className="bg-white border-2 border-gray-900 flex flex-col">
                    <div className="flex items-center gap-2">
                        <div className="p-4 lg:p-8 relative bottom-3 lg:bottom-6 right-3 lg:right-6 z-10 bg-white flex items-center justify-center">
                            <ChartSpline className="text-amarelo stroke-1 w-10 h-10 lg:w-20 lg:h-20" />
                        </div>
                        <h3 className="font-titulo text-xl lg:text-2xl font-semibold relative right-4 lg:right-8 bottom-2 lg:bottom-4">Visão</h3>
                    </div>

                    <div className="px-4 lg:px-8 relative bottom-2 lg:bottom-6">
                        <p className="text-sm sm:text-base">
                            Ser reconhecida como a referência técnica em soluções avançadas de vedação e isolamento, expandindo de forma sustentável e inovadora, sempre comprometida com a qualidade e a excelência em cada projeto.
                        </p>
                    </div>
                </div>

                <div className="bg-white border-2 border-gray-900 flex flex-col">
                    <div className="flex items-center gap-2">
                        <div className="p-4 lg:p-8 relative bottom-3 lg:bottom-6 right-3 lg:right-6 z-10 bg-white flex items-center justify-center">
                            <ShieldCheck className="text-amarelo stroke-1 w-10 h-10 lg:w-20 lg:h-20" />
                        </div>
                        <h3 className="font-titulo text-xl lg:text-2xl font-semibold relative right-4 lg:right-8 bottom-2 lg:bottom-4">Valores</h3>
                    </div>

                    <div className="px-4 lg:px-8 relative bottom-2 lg:bottom-6">
                        <p className="text-sm sm:text-base">
                            Nossa atuação une excelência técnica, inovação contínua e responsabilidade sustentável, com foco na qualidade em cada etapa produtiva e na entrega de soluções de vedação e isolamento alinhadas aos mais altos padrões do mercado.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}