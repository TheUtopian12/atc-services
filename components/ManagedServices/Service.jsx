import Image from "next/image";
import React, { Fragment } from "react";

const Service = ({ id, title, image, ancho }) => {
  return (
    <div className="pt-10 md:flex md:flex-col justify-center items-center">
      <div className="relative">
        <Image
          src={`/img/ManagedServices/${image}.png`}
          width={500}
          height={100}
          alt="Servicio"
        />
        <div
          className="absolute h-10 w-10 sm:h-16 sm:w-16  -top-4 sm:-top-6  right-14  bg-white rounded-full
      border-4 border-green-900
      flex justify-center items-center
      "
        >
          <span className="text-black text-3xl font-bold">{id}</span>
        </div>
        <h1
          className={`absolute top-10 left-[120px] sm:left-32 md:left-36 md:top-14 text-white text-lg sm:text-4xl md:text-2xl font-bold text-center
      md:w-${ancho}
      `}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Service;
