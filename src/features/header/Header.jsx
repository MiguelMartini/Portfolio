import "../../index.css";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="bg-[#374B22] text-white h-20 md:h-26 lg:h-30">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between ">
        
        <a
          href="https://miguelmartini.github.io/Portfolio/"
          className="flex items-center gap-2"
        >
          <img
            src={Logo}
            alt="Logo"
            className="
            w-14 h-14
            sm:w-18 sm:h-18
            md:w-22 md:h-22
            lg:w-26 lg:h-26"
          />
        </a>

        <nav className="flex gap-8 text-md sm:text-base lg:text-2xl">
          <a
            href="#sobre"
            className="hover:text-[#FCC49E] transition-colors"
          >
            Sobre
          </a>

          <a
            href="#trabalhos"
            className="hover:text-[#FCC49E] transition-colors"
          >
            Projetos
          </a>

          <a
            href="#contato"
            className="hover:text-[#FCC49E] transition-colors"
          >
            Contatos
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
