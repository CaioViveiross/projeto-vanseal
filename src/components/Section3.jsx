export default function Section3() {
    return (
        <section id="sobre" className="relative w-full min-h-screen pt-12 sm:pt-16 lg:pt-20">
            <div className="w-full flex flex-col md:flex-row items-center py-10 justify-center bg-azul text-white">

                <div className="w-full md:w-1/2 flex justify-center p-8 sm:p-12 md:p-16 lg:p-20">
                    <img
                        src="/images/equipe.png"
                        alt="Equipe Vanseal"
                        className="w-64 sm:w-72 md:w-80 lg:w-140 max-w-full object-contain"
                    />
                </div>

                <div className="w-full md:w-1/2 flex items-center flex-col p-6 sm:p-10 md:p-16 lg:p-20 text-center">
                    <h2 className="font-titulo font-light italic text-lg sm:text-xl">
                        Sobre Nós
                    </h2>

                    <h1 className="font-titulo text-2xl sm:text-3xl max-w-sm sm:max-w-lg font-medium mt-4 sm:mt-6">
                        Mais do que fornecedores. Parceiros técnicos.
                    </h1>

                    <p className="font-corpo font-light max-w-sm sm:max-w-lg text-base sm:text-lg md:text-xl mt-4 sm:mt-6">
                        Nossa empresa é o resultado da união estratégica e da sinergia de três sócios fundadores, cada um com uma vasta e comprovada trajetória profissional no setor.
                    </p>

                    <p className="font-corpo font-light max-w-sm sm:max-w-lg text-base sm:text-lg md:text-xl mt-4 sm:mt-6">
                        Esta consolidação de décadas de experiência especializada em engenharia de materiais e aplicações críticas confere à Vanseal uma base de conhecimento técnico incomparável.
                    </p>

                    <button className="px-6 sm:px-8 py-2 sm:py-3 text-black mt-8 sm:mt-10 bg-amarelo rounded-3xl text-base sm:text-lg md:text-xl font-semibold cursor-pointer hover:bg-[#be851b] transition-colors">
                        Solicite agora seu orçamento
                    </button>
                </div>
            </div>
        </section>
    );
}