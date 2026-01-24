import React from "react";

function About({ texts }) {
  return (
    <div
      className="w-full my-10 px-6 
    lg:px-30 lg:py-10 bg-white"
    >
      <h1
        className="pt-6 text-3xl font-bold text-[#374B22] 
            lg:text-5xl"
        id="sobre"
      >
        Sobre
      </h1>
      <div className="flex flex-col gap-4 py-4">
        {texts.map((text, index) => (
          <p
            className="text-[#374B22]
           text-base
           leading-relaxed
           text-justify
           indent-6
           lg:text-xl
           lg:leading-loose"
            key={index}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default About;
