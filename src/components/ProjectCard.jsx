import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ srcImg, alt, title, href }) {
  return (
    <Link to={href}
    onClick={() => window.scrollTo(0, 0)}>
      
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
    </Link>
  );
}

export default ProjectCard;
