import Head from "next/head";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <Head>
        <title>ICT - Services</title>
        <meta name="description" content="ATC - Services" />
      </Head>

      <div className="bgImage bgImage h-screen bg-cover bg-center md:grid hidden">
        <article className="absolute top-[45%] left-[25%] md:top-[50%] md:left-[10%] lg:left-[20%]">
          <Image
            src="/img/xcien-logo-blanco.svg"
            width={100}
            height={100}
            alt="Logo Xcien"
            className="md:w-48"
            priority={true}
          />
          <h1 className="text-white text-4xl md:text-8xl font-semibold mt-4">
            ICT Services
          </h1>
        </article>
      </div>
      <div className="bgImageMobile bgImage h-screen bg-cover bg-center md:hidden">
        <article className="absolute top-[45%] left-[25%] md:top-[50%] md:left-[10%] lg:left-[20%]">
          <Image
            src="/img/xcien-logo-blanco.svg"
            width={100}
            height={100}
            alt="Logo Xcien"
            className="md:w-48"
            priority={true}
          />
          <h1 className="text-white text-4xl md:text-8xl font-semibold mt-4">
            ICT Services
          </h1>
        </article>
      </div>
    </>
  );
};

export default Hero;
