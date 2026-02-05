import { AtSign, Headphones, Linkedin, MoveRight } from "lucide-react";

export default function Section5() {
    return (
        <section 
            id="contato" 
            className="relative w-full min-h-screen flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat mt-12 sm:mt-16 lg:mt-20 text-[#D9D9D9] px-4 sm:px-6 py-10 sm:py-14"
            style={{ backgroundImage: "url('/images/background_contato.png')" }}
        >
            <h1 className="font-titulo text-2xl sm:text-3xl font-medium mb-4 sm:mb-6 text-center">
                Prontos para Atender Seu Projeto!
            </h1>

            <p className="font-titulo font-light text-base sm:text-lg text-center max-w-2xl">
                Nossa equipe técnica está pronta para oferecer suporte e orientação personalizada.
            </p>

            <div className="w-full gap-6 sm:gap-8 lg:gap-12 max-w-7xl flex flex-col md:flex-row mt-8 sm:mt-10 lg:mt-16">
                
                {/* Formulário */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-16 border-white backdrop-blur-sm border-1 flex gap-4 flex-col">
                    <div>
                        <p className="text-sm ml-2 mb-2 font-titulo">Nome</p>
                        <input type="text" className="border-1 rounded-full ps-3 w-full p-1 font-titulo text-sm focus:outline-none text-[#D9D9D9]" />
                    </div>
                    <div>
                        <p className="text-sm ml-2 mb-2 font-titulo">E-mail</p>
                        <input type="text" className="border-1 rounded-full ps-3 w-full p-1 font-titulo text-sm focus:outline-none text-[#D9D9D9]" />
                    </div>
                    <div>
                        <p className="text-sm ml-2 mb-2 font-titulo">Telefone</p>
                        <input type="text" className="border-1 rounded-full ps-3 w-full p-1 font-titulo text-sm focus:outline-none text-[#D9D9D9]" />
                    </div>
                    <div className="mt-4">
                        <p className="text-sm ml-2 mb-2 font-titulo">No que podemos te ajudar?</p>
                        <textarea
                            className="border-1 rounded-3xl px-4 py-3 w-full h-32 sm:h-36 lg:h-40 resize-none font-titulo focus:outline-none text-sm text-[#D9D9D9]" 
                        />
                    </div>

                    <div className="flex gap-3 mr-1 sm:mr-4 mt-4 items-center justify-end">
                        <button
                            className="
                                group
                                flex items-center gap-2
                                border-[#D9D9D9] border text-[#D9D9D9]
                                px-6 py-2 rounded-full
                                font-titulo text-sm
                                transition-all duration-300
                                cursor-pointer
                            "
                        >
                            Enviar
                            <MoveRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                    </div>
                </div>

                {/* Cards de contato */}
                <div className="w-full md:w-1/2 flex gap-6 sm:gap-8 lg:gap-10 flex-col text-white">
                    
                    {/* Card: Atendimento */}
                    <div className="border-b border-l border-r h-1/3 border-white flex flex-col items-center relative pt-6 sm:pt-8 pb-6 sm:pb-8 backdrop-blur-sm">
                        <div className="absolute -top-[1px] left-0 right-0 flex items-start justify-center">
                            <div className="border-t border-white flex-1"></div>
                            <h2 className="px-3 sm:px-4 font-titulo text-sm sm:text-base lg:text-xl relative -top-2 sm:-top-3 bg-transparent">
                                Atendimento
                            </h2>
                            <div className="border-t border-white flex-1"></div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-20 w-full h-full">
                            <div className="flex gap-2 items-center">
                                <Headphones size={20} className="sm:w-6 sm:h-6" />
                                <p className="font-light text-sm sm:text-base">(11) 4342 4130</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src="/images/whatsapp.svg" alt="Whatsapp" className="w-5 h-5 sm:w-7 sm:h-7" />
                                <p className="font-light text-sm sm:text-base">(11) 93331-8373</p>
                            </div>
                        </div>
                    </div>

                    {/* Card: E-mail */}
                    <div className="border-b border-l border-r h-1/3 border-white flex flex-col items-center relative pt-6 sm:pt-8 pb-6 sm:pb-8 backdrop-blur-sm">
                        <div className="absolute -top-[1px] left-0 right-0 flex items-start justify-center">
                            <div className="border-t border-white flex-1"></div>
                            <h2 className="px-3 sm:px-4 font-titulo text-sm sm:text-base lg:text-xl relative -top-2 sm:-top-3 bg-transparent">
                                E-mail
                            </h2>
                            <div className="border-t border-white flex-1"></div>
                        </div>
                        <div className="flex items-center justify-center w-full h-full">
                            <div className="flex gap-2 items-center">
                                <AtSign size={20} className="sm:w-6 sm:h-6" />
                                <p className="font-light text-sm sm:text-base break-all">comercial@vanseal.com.br</p>
                            </div>
                        </div>
                    </div>

                    {/* Card: Redes Sociais */}
                    <div className="border-b border-l border-r h-1/3 border-white flex flex-col items-center relative pt-6 sm:pt-8 pb-6 sm:pb-8 backdrop-blur-sm">
                        <div className="absolute -top-[1px] left-0 right-0 flex items-start justify-center">
                            <div className="border-t border-white flex-1"></div>
                            <h2 className="px-3 sm:px-4 font-titulo text-sm sm:text-base lg:text-xl relative -top-2 sm:-top-3 bg-transparent">
                                Redes Sociais
                            </h2>
                            <div className="border-t border-white flex-1"></div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full h-full">
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-20">
                                <div className="flex gap-2 items-center">
                                    <img src="/images/instagram.svg" alt="Instagram" className="w-5 h-5 sm:w-7 sm:h-7" />
                                    <p className="font-light text-sm sm:text-base">@vanseal.br</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <img src="/images/facebook.svg" alt="Facebook" className="w-5 h-5 sm:w-7 sm:h-7" />
                                    <p className="font-light text-sm sm:text-base">Vanseal Oficial</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Linkedin size={20} className="sm:w-6 sm:h-6" />
                                <p className="font-light text-sm sm:text-base">Vanseal Vedações</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}