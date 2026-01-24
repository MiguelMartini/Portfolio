import DevIcon from "@/components/DevIcon";
import React from "react";

function Dev({ title, text, techs, techIcons, repoTitle, repoLink }) {
  return (
    <div
      className="bg-[#374B22] text-[#EDECED] py-10 px-6 
    lg:px-30 lg:py-10"
    >
      <p className="text-2xl font-bold lg:text-4xl">{title}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="my-4">
          <p
            className="text-[#EDECED]
           text-base
           leading-relaxed
           text-justify
           indent-6
           lg:text-xl
           lg:leading-loose"
          >
            {text}
          </p>
          <ul
            className="text-[#EDECED]
           text-base
           leading-relaxed
           text-justify
           lg:text-xl
           lg:leading-loose list-disc"
          >
            <li>
              Repositório:{" "}
              <a
                href={repoLink}
                className="underline text-gray-400"
                target="_blank"
              >
                {repoTitle}
              </a>
            </li>
          </ul>
          <div className="border-t-2 border-[#EDECED] mt-4 pt-4"></div>
          <p
            className="text-[#EDECED]
           text-base
           leading-relaxed
           text-justify
           lg:text-xl
           lg:leading-loose"
          >
            {techs}
          </p>
        </div>
        <div>
          <div className="p-10 bg-neutral-300 flex items-center flex-col gap-5 h-fit rounded-xl">
            <p className="text-xl lg:text-2xl font-semibold text-[#374B22]">
              Tecnologias
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2">
              {techIcons.map((techIcon, index) => (
                <DevIcon key={index} link={techIcon} alt={`icone-tecnlogia`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dev;
