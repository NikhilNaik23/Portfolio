import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
export const Card = ({
  name,
  description,
  technologies,
  github,
  site,
  cn,
}) => {

  return (
    <div className={twMerge("sticky top-30 max-w-4xl mx-auto px-4", cn)}>
      <div className="p-6 rounded-xl w-full border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition bg-gradient-to-r from-gray-300 to-blue-900">
        <h3 className="text-xl mb-2 font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          {name}
        </h3>
        <p className="text-gray-900 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {technologies.map((tech, key) => (
            <span
              key={key}
              className="bg-blue-500/10 text-blue-900 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
              hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between pt-8">
          <div className="flex justify-between gap-5 items-center">
            <a
              href={github}
              className="text-blue-500 hover:text-blue-900 transition-colors my-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code {"->"}
            </a>
            
          </div>
          <a
              href={site}
              className="text-blue-500 hover:text-blue-900 transition-colors my-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site {"->"}
            </a>
        </div>
      </div>
      
      
    </div>
  );
};
