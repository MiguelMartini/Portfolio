import React from "react";

function ProjectCard({ srcImg, alt, title, href }) {

  return (
    <a href={href} className="cursor-pointer" target="_blank">
      <div className="bg-[#EDECED] inset-shadow-sm inset-shadow-neutral-500/50 p-2 rounded-t-xl rounded-b-md lg:p-4">
        <div className="p-2 ">
          <img
            src={srcImg}
            alt={alt}
            className="rounded-md w-full max-h-80 object-cover"
          />
        </div>
        <div className="pl-2">
          <p className="text-lg font-semibold text-[#374B22]">{title}</p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
