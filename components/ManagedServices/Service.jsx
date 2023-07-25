import Image from "next/image";
import React, { Fragment } from "react";

const Service = ({ id, title, image, ancho }) => {
  return (
    <div className="pt-10 sm:flex md:flex md:flex-col  justify-center items-center">
      <div className="relative">
        <Image
          src={`/img/ManagedServices/${image}.png`}
          width={400}
          height={100}
          alt="Servicio"
          className="lg:w-[300px]"
        />
        <div
          className="absolute h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-10 lg:w-10  -top-4 sm:-top-6   right-14  lg:right-8  bg-white rounded-full
      border-4 border-green-900
      flex justify-center items-center
      "
        >
          <span className="text-black text-3xl font-bold">{id}</span>
        </div>
        <h1
          className={`absolute top-10 left-[120px] sm:left-28 md:left-34 md:top-12 
         ${
           id === "5" ? "lg:top-8" : id === "2" ? "lg:top-1" : "lg:top-5"
         }   lg:left-24 text-white text-lg sm:text-xl md:text-2xl
          
          lg:text-lg font-bold text-center
      md:w-${ancho} lg:w-0
      `}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Service;
