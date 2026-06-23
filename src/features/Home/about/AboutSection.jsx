import React from "react";

const AboutSection = () => {
  return (
    <div
      className="my-10 mx-6 
    lg:px-30 lg:py-10"
    >
      <div>
        <h1
          className="text-3xl font-bold mb-6 text-[#374B22] 
            lg:text-5xl" id="sobre"
        >
          Sobre
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 lg:gap-6">
        <p
          className="text-[#374B22]
           text-base
           leading-relaxed
           text-justify
           indent-6
           lg:text-xl
           lg:leading-loose"
        >
          Miguel K. Martini é um estudante de Ánalise e Desenvolvimento de
          Sistemas pelo SENAC e estudante de Ciência da Computação pelo
          Instituto Federal de Santa Catarina (IFSC). Iniciou seus estudos na
          área de tecnologia em 2020 durante a Pandemia do Corona Vírus. Começou
          aprendendo sobre Hardware, no final de 2023 iniciou seus estudos em
          desenvolvimento Web, onde atua e amplia seus conhecimentos.
        </p>
        <p
          className="text-[#374B22]
           text-base
           leading-relaxed
           text-justify
           indent-6
           lg:text-xl
           lg:leading-loose"
        >
          Durante sua formação em Análise e Desenvolvimento de Sistemas (2023-2025), teve contato com diversos conceitos fundamentais da área de Tecnologia da Informação, incluindo Programação Orientada a Objetos, Engenharia de Software, Banco de Dados, Desenvolvimento Web, Gestão de Projetos, Ética e Administração. Ainda em 2023, foi aprovado no vestibular unificado UFSC/IFSC/IFC para o curso de Bacharelado em Ciência da Computação do IFSC, ampliando sua formação acadêmica e aprofundando seus conhecimentos em computação.
        </p>
        <p
          className="text-[#374B22]
           text-base
           leading-relaxed
           text-justify
           indent-6
           lg:text-xl
           lg:leading-loose"
        >
          Como desenvolvedor, possui experiência no desenvolvimento de aplicações web, trabalhando com tecnologias como HTML, CSS, JavaScript, React.js, PHP, Laravel e Java. Também possui conhecimentos em versionamento de código com Git e GitHub, além de modelagem e gerenciamento de bancos de dados utilizando MySQL e PostgreSQL.
        </p>
      </div>
      <div className="flex justify-start items-start mt-9">
        <p
          className="underline text-blue-500 cursor-pointer
                lg:text-xl lg:font-medium"
        >
          <a href="#contato">Entre em contato</a>
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
