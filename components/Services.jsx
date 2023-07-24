import React from "react";
import Service from "./ManagedServices/Service";

const Services = () => {
  return (
    <div className="bg-[#e1e1e1]  lg:h-screen pt-10">
      <h1 className="text-black pb-10 text-3xl sm:text-7xl lg:text-5xl text-center font-bold">
        Managed Services
      </h1>

      <section className="lg:flex justify-center lg:pt-10 gap-12">
        <Service
          id="1"
          title="Structured cabling"
          image="I_Cableadoestructurado"
          ancho="80"
        />
        <Service
          id="2"
          title="Wireless Networks (WiFi)"
          image="I_Redesinalambricas"
          ancho="80"
        />
        <Service
          id="3"
          title="High availability "
          image="I_Altadisponibilidad"
          ancho="72"
        />
      </section>
      <section className="lg:flex justify-center lg:pt-20 gap-12">
        <Service
          id="4"
          title="Video surveillance"
          image="I_videovigilancia"
          ancho="80"
        />
        <Service
          id="5"
          title="Cybersecurity"
          image="I_Ciberseguridad"
          ancho="80"
        />
      </section>
      <section className="lg:flex justify-center lg:pt-20 gap-12">
        <Service
          id="6"
          title="Office interconnection"
          image="I_Interconexiondeoficinas"
          ancho="80"
        />
        <Service
          id="7"
          title="Network Consulting"
          image="I_Asesoramientodered"
          ancho="80"
        />
      </section>
    </div>
  );
};

export default Services;
