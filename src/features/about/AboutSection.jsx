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
          Após o término do ensino médio, em 2023 Miguel começou a cursar o
          técnologo de Ánalise e Desenvolvimento de Sistemas, aprenedndo sobre
          diversos assuntos relacionados a área de T.I, desde Administração,
          Ética, até Programação Orientada a Objetos, Engenharia de Software,
          Banco de Dados. Final de 2023, Miguel realizou o vestibular Unificado
          da UFSC/IFSC/IFC, conseguindo aprovação no bacharelado de Ciência da
          Computação IFSC.
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
          Miguel K. Martini é designer gráfico e programador. Como Designer,
          trabalhou como freelancer para algumas companhias e projetos pessoais,
          utilizando ferramentas como: Photoshop, Canva, Figma. Como
          programador, possui conhecimentos em desenvolvimento WEB, utilizando
          tecnologias como HTML, css, JavaScript, React.JS, PHP, Laravel, Java,
          Git e GitHub para versionamento, MySQL para banco de dados.
        </p>
      </div>
      <div className="flex justify-start items-start mt-9">
        <p
          className="underline text-blue-500 cursor-pointer
                lg:text-xl lg:font-medium"
        >
          <a href="">Entre em contato</a>
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
