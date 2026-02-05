import { MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row items-center md:items-center md:justify-between text-white w-full px-6 sm:px-10 lg:px-28 py-8 sm:py-10 bg-amarelo gap-6 md:gap-4">

            <div className="flex flex-col gap-4 items-center md:items-start">
                <img src="/images/logo_vanseal_footer.svg" alt="Logo Vanseal" className="w-44 sm:w-52 md:w-64" />
            </div>

            <div className="flex flex-col gap-4 items-center md:items-end text-black">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-center sm:text-end">
                    <p>R. André Franco Montoro, 238 - São Bernardo do Campo, SP</p>
                    <div className="flex items-center justify-center sm:justify-end gap-2">
                        <MapPin size={24} className="inline-block stroke-1" />
                        <p>Matriz</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-center sm:text-end">
                    <p>R. Samuel Heusi Júnior, 94 - Itajaí, SC</p>
                    <div className="flex items-center justify-center sm:justify-end gap-2">
                        <MapPin size={24} className="inline-block stroke-1" />
                        <p>Filial</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}