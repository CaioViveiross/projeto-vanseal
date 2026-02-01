import { MoveRight } from "lucide-react";

export default function Section5() {
    return (
        <section id="contato" className="relative w-full min-h-screen flex flex-col items-center justify-center text-black bg-white px-4 sm:px-6">
            <h1 className="font-titulo text-2xl sm:text-3xl font-medium mb-4 sm:mb-6 text-center">
                Prontos para Atender Seu Projeto!
            </h1>

            <p className="font-titulo font-light text-base sm:text-lg text-center max-w-xl">
                Nossa equipe técnica está pronta para oferecer suporte e orientação personalizada.
            </p>

            <div className="w-full max-w-7xl flex flex-col md:flex-row mt-10 sm:mt-14 lg:mt-16">

                <div className="w-full md:w-1/3 p-6 sm:p-8 bg-[#1C1F88] flex items-center justify-center min-h-48 md:min-h-0">
                    <img
                        src="/images/atendente.png"
                        alt="Contato Vanseal"
                        className="w-40 sm:w-48 md:w-56 lg:w-64 max-w-full object-contain"
                    />
                </div>

                <div className="w-full md:w-2/3 p-6 sm:p-10 md:p-12 lg:p-16 border-[#1C1F88] border-1 flex gap-4 flex-col">
                    <div>
                        <p className="text-sm ml-2 mb-2 font-titulo">Nome</p>
                        <input type="text" className="border-1 rounded-full ps-3 w-full p-1 font-titulo text-sm focus:outline-none" />
                    </div>
                    <div>
                        <p className="text-sm ml-2 mb-2 font-titulo">E-mail</p>
                        <input type="text" className="border-1 rounded-full ps-3 w-full p-1 font-titulo text-sm focus:outline-none" />
                    </div>
                    <div>
                        <p className="text-sm ml-2 mb-2 font-titulo">Telefone</p>
                        <input type="text" className="border-1 rounded-full ps-3 w-full p-1 font-titulo text-sm focus:outline-none" />
                    </div>
                    <div className="mt-4">
                        <textarea
                            className="border-1 rounded-3xl px-4 py-3 w-full h-32 sm:h-36 lg:h-40 resize-none font-titulo focus:outline-none text-sm" />
                    </div>

                    <div className="flex text-end gap-4 mr-1 sm:mr-4 mt-2 items-center justify-end">
                        <button className="">Enviar</button>
                        <MoveRight size={20} />
                    </div>
                </div>
            </div>
        </section>
    );
}