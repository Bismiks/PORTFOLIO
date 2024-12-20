import React, { useEffect, useState } from "react";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import github from "../../assets/images/github-dark.png";
import reactimage from "../../assets/images/react.png";
import javascript from "../../assets/images/javascript.png";
import mongodb from "../../assets/images/mongodb.png";
import bootstrap from "../../assets/images/bootstrap.png";
import mui from "../../assets/images/MUI.png";
import redux from "../../assets/images/redux.png";
import jwt from "../../assets/images/jwt.png";
import typescript from "../../assets/images/typescript.png";
import postman from "../../assets/images/Postman.png";
import dotnet from "../../assets/images/NET core.png";
import csharp from "../../assets/images/C# (CSharp).png";
import jira from "../../assets/images/Jira.png";
import sql from "../../assets/images/Microsoft SQL Server.png";

const skills = [
  {
    id: 1,
    src: reactimage,
    title: "React.js",
    style: "shadow-blue-500",
  },
  {
    id: 2,
    src: redux,
    title: "Redux Toolkit",
    style: "shadow-purple-600",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: dotnet,
    title: ".Net Core",
    style: "shadow-yellow-500",
  },
  {
    id: 5,
    src: csharp,
    title: "C#",
    style: "shadow-gray-500",
  },
  {
    id: 6,
    src: sql,
    title: "MSSQL",
    style: "shadow-gray-500",
  },
  {
    id: 7,
    src: postman,
    title: "Postman",
    style: "shadow-yellow-500",
  },
  {
    id: 8,
    src: jira,
    title: "Jira",
    style: "shadow-yellow-500",
  },
  {
    id: 9,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 10,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 11,
    src: mui,
    title: "Material UI",
    style: "shadow-blue-500",
  },
  {
    id: 12,
    src: bootstrap,
    title: "Bootstrap",
    style: "shadow-purple-400",
  },
  {
    id: 13,
    src: typescript,
    title: "TypeScript",
    style: "shadow-blue-400",
  },
  {
    id: 14,
    src: mongodb,
    title: "MongoDB",
    style: "shadow-green-400",
  },
  {
    id: 15,
    src: jwt,
    title: "JSON Web Token",
    style: "shadow-blue-400",
  },
  {
    id: 16,
    src: github,
    title: "GitHub",
    style: "shadow-gray-500",
  }
];

const Skills = () => {
  const [scaleItem, setScaleItem] = useState(0);

  useEffect(() => {
    const changeScaleItem = setInterval(() => {
      setScaleItem((prev) => (prev >= skills.length - 1 ? 0 : prev + 1));
    }, 300);

    return () => clearInterval(changeScaleItem);
  }, [scaleItem]);

  return (
    <div
      id="skills"
      className="w-full px-7 py-14 sm:py-16 flex flex-col bg-[#f9f9f9] items-center justify-center min-h-[80vh] lg:min-h-[100vh]"
    >
      <div className="" data-aos="fade-up">
        <h1 className="text-xl uppercase text-[#0284c7] text-center font-semibold">
          Tech Stack
        </h1>
        <div className="max-w-[70rem] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 sm:gap-8 text-center py-6">
          {skills.map(({ id, src, title, style }, i) => (
            <div
              key={id}
              className={`shadow-lg md:hover:scale-110 z-10 grid place-content-center bg-[#f9f9f9] h-[7.3rem] sm:h-[8.2rem] w-auto cursor-pointer duration-500 p-2 rounded-lg ${style} ${scaleItem === i && "scale-110"
                }`}
            >
              <img
                src={src}
                alt={title}
                className="w-[3.5rem] lg:w-[50%] rounded-sm mx-auto"
                loading="lazy"
              />
              <p className="mt-2 text-[12px] overflow-hidden sm:text-base cursor-default font-medium">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
