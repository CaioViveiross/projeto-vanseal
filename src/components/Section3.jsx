export default function Section3() {
    return (
        <section className="relative w-full min-h-screen pt-40 ">
            <div className="w-full flex items-center justify-center bg-azul text-white">
                <div className="p-20 w-1/2 flex justify-center">
                    <img src="/images/equipe.png" alt="Equipe Vanseal" className="w-220" />
                </div>
                <div className="flex items-center flex-col p-20 w-1/2">
                    <h2 className="font-titulo font-light italic text-xl text-center">
                        Sobre Nós
                    </h2>
                    <h1 className="font-titulo text-3xl max-w-lg font-medium text-center mt-6">
                        Mais do que fornecedores. Parceiros técnicos.
                    </h1>
                    <p className="font-corpo font-light max-w-lg text-xl text-center mt-6">
                        Nossa empresa é o resultado da união estratégica e da sinergia de três sócios fundadores, cada um com uma vasta e comprovada trajetória profissional no setor.
                    </p>
                    <p className="font-corpo font-light max-w-lg text-xl text-center mt-6">
                        Esta consolidação de décadas de experiência especializada em engenharia de materiais e aplicações críticas confere à Vanseal uma base de conhecimento técnico incomparável.
                    </p>
                    <button className="px-8 py-2 text-black mt-10 bg-amarelo rounded-3xl text-xl font-semibold cursor-pointer hover:bg-[#be851b] transition-colors">Solicite agora seu orçamento</button>
                </div>
            </div>
        </section>
    );
}
