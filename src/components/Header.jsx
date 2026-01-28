export default function Header() {
  return (
    <header className="flex items-center justify-between text-white w-full px-28 py-24">
      <img src="/images/logo_vanseal_azul.svg" alt="Vanseal Logo" className="w-80" />
      <ul className="flex items-center gap-16 font-corpo">
        <li className="text-xl font-semibold hover:text-amarelo transition-colors cursor-pointer">Catálogo</li>
        <li className="text-xl font-semibold hover:text-amarelo transition-colors cursor-pointer">Sobre Nós</li>
        <li className="text-xl font-semibold hover:text-amarelo transition-colors cursor-pointer">Valores</li>
        <button className="px-6 py-2 bg-[#1E1E1E] rounded-3xl text-xl font-semibold hover:bg-amarelo transition-colors cursor-pointer">Fale com um especialista</button>
      </ul>
    </header>
  );
}
