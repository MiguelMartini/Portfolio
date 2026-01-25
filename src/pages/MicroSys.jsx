import FooterSection from "@/features/Layout/footer/FooterSection";
import Header from "@/features/Layout/header/Header";
import React from "react";

import microsysHome from "../assets/microsys.png";
import CarouselSection from "@/features/Projects/Carousel/CarouselSection";
import About from "@/features/Projects/ProjectAbout/About";
import Dev from "@/features/Projects/Dev/Dev";

const imgs = [microsysHome];

const texts = [
  "O projeto MicroSys propõe o desenvolvimento de um sistema web integrado a um modelo de inteligência artificial, com foco no apoio a micro e pequenos empreendedores. A solução tem como objetivo facilitar a gestão de negócios por meio de uma interface moderna e responsiva, acessível em diferentes dispositivos, promovendo praticidade e eficiência no dia a dia do empreendedor.",
  "A inteligência artificial integrada ao sistema atua como um consultor empresarial digital, oferecendo recomendações automáticas e personalizadas com base nos dados fornecidos pelo usuário. Dessa forma, o MicroSys auxilia na tomada de decisões estratégicas, contribuindo para uma gestão mais organizada, assertiva e orientada a resultados.",
  "Na sua versão atual, o MicroSys disponibiliza funcionalidades essenciais para o auxílio de pequenos e médios empreendedores, permitindo o controle e acompanhamento de informações relevantes do negócio. O sistema foi concebido com foco na usabilidade e escalabilidade, possibilitando futuras evoluções e a incorporação de novos recursos conforme as necessidades dos usuários."
];

const techs = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/inertiajs/inertiajs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
];

function MicroSys() {
  return (
    <div className="bg-[#EDECED]">
      <Header />
      <CarouselSection title={"MicroSys"} imgs={imgs} />
      <About texts={texts} />
      <Dev
        title={"Desenvolvimento"}
        text={
          "Como desenvolvedor Full-Stack, fui responsável pelo Back-end e pelo Front-end. Realizei levantamento de requisitos funcionais e não funcionais, modelo relacional de banco de dados e testes manuais da aplicação."
        }
        techs={
          "Tecnologias utilizadas: PHP, Laravel, MySQL, Typescript, React.TS, Inertia, Git, GitHub."
        }
        techIcons={techs}
        repoTitle={"MicroSys - Landing Page"}
        repoLink={"https://microsys-lp.vercel.app/"}
      />
      <FooterSection />
    </div>
  );
}

export default MicroSys;
