import { MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="flex items-center justify-between text-white w-full px-28 py-10 mt-20 bg-amarelo">
            <div className="flex flex-col gap-4 items-start">
                <img src="/images/logo_vanseal_footer.svg" alt="Logo Vanseal" className="w-64" />
                <div className="text-black ml-10 flex gap-2 flex-col">
                    <div className="flex gap-2">
                         <img src="/images/telefone.svg" alt="Telefone" className="w-5" />
                         <p>(11) 4342 4130</p>
                    </div>
                    <div className="flex gap-2">
                         <img src="/images/whatsapp.svg" alt="Whatsapp" className="w-5" />
                         <p> (11) 93331-8373</p>
                    </div>
                </div>
            </div>
             <div className="flex flex-col gap-4 items-end text-black">
                <div className="flex items-center gap-2 ">
                    <p>R. André Franco Montoro, 238 - São Bernardo do Campo, SP</p>
                    <MapPin size={24} className="inline-block stroke-1" />
                    <p>Matriz</p>
                </div>
                <div className="flex items-center gap-2 ">
                    <p>R. Samuel Heusi Júnior, 94 - Itajaí, SC</p>
                    <MapPin size={24} className="inline-block stroke-1" />
                    <p>Filial</p>
                </div>
            </div>
        </footer>
    );
}
