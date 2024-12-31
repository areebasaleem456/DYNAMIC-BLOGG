"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const navbar = () => {
  const [currentDateTime,setCurrentDateTime]= useState ('');
  useEffect(() =>{
    const updateDateTime =() => {
      const now= new Date();
      const options:Intl.DateTimeFormatOptions ={
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",
        hour:"2-digit",
        minute:'2-digit',
        second:"2-digit",
        hour12:false
      }
      setCurrentDateTime (now.toLocaleDateString (`en-US`,options)+''+now.toLocaleTimeString(`en-US`,{hour12 : false})
    );
    }
    updateDateTime();
    const interValid= setInterval(updateDateTime,1000)
    return()=>clearInterval(interValid)
  },[]);
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        
          <span className="flex-1 text-xl font-semibold text-black">{currentDateTime}</span>
        
        <nav className=" md:ml-auto flex flex-wrap items-center justify-center text-gray-900">
          <Link
            className="mr-10 hover:text-gray-900 hover:cursor-pointer hover:underline trasition-colors duration-300 transform hover:scale-105"
            href={"http://localhost:3000/"}
          >
            Home
          </Link>
          <Link
            className="mr-10 hover:text-gray-900 hover:cursor-pointer hover:underline trasition-colors duration-300 transform hover:scale-105"
            href={"/authorcard"} target="_blank"
          >
            About
          </Link>
          <Link
            className="mr-10 hover:text-gray-900 hover:cursor-pointer hover:underline trasition-colors duration-300 transform hover:scale-105"
            href={"/mega"} target="_blank"
          >
            Blog
          </Link>
          <Link
            className="mr-10 hover:text-gray-900  hover:cursor-pointer hover:underline trasition-colors duration-300 transform hover:scale-105"
            href={"/contact"} target="_blank"
          >
            Contact
          </Link>
        </nav>
        <button className="inline-flex items-center bg-blue-600 text-white  border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded text-base mt-4 md:mt-0">
          Linkedin
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default navbar;
