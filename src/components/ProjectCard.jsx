import React from "react";

function ProjectCard({ srcImg, alt, title }) {
  return (
    <div className="bg-[#EDECED] inset-shadow-sm inset-shadow-neutral-500/50 p-2 rounded-t-xl rounded-b-md">
      <div className="p-2 ">
        <img src={srcImg} alt={alt} className="rounded-md" />
      </div>
      <div className="pl-2">
        <p className="text-lg font-semibold text-[#374B22]">{title}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
