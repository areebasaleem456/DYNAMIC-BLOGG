import React from "react";
import Image from "next/image";

const Authorcard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <Image
          className="w-36 h-36 rounded-full mr-4 object-cover"
          src={"/mypicture.jpeg"}
          height={100}
          width={100}
          alt="mypicture"
        />
        <div>
          <h3 className="text-xl font-semibold">Areeba Saleem</h3>
          <p className="text-slate-500 pt-2">
            UI/UX Designer | Graphic Designiner{" "}
          </p>
        </div>
      </div>
      <p className="mt-4 text-black leading-relaxed">
        Welcome to my digital portfolio.I am Areeba Saleem.I am learning web
        development curiously.Have 2 years of experience in IT.Makes website
        UI/UX Design using HTML,CSS,TypeScript,JavaScript,Tailwind CSS.
      </p>
      <p className="pt-3">
        Creative coding with a passion for crafting captivating web experiences.
        With a flair for design and a knack for problem-solving, I'm dedicated
        to pushing the boundaries of what's possible in the world of web
        development.
      </p>
      <div className="mt-4 flex space-x-3">
        <a href="https://www.facebook.com/tooba.saleem.3954?mibextid=ZbWKwL" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-300 transition duration-300">Facebook</a>
        <a href="https://github.com/account" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-300 transition duration-300">Github</a>
        <a href="http://www.linkedin.com/in/areeba-saleem-67025a2ba" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-300 transition duration-300">Linkedin</a>
      </div>
    </div>
  );
};

export default Authorcard;
