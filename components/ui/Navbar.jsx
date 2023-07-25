import React from "react";
import {
  BiHomeAlt,
  BiTrendingUp,
  BiBroadcast,
  BiUserCheck,
  BiSpreadsheet,
  BiChip,
  BiConversation,
} from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="hidden sm:grid">
      <a
        href="#/"
        title="Inicio"
        className=" group fixed z-50 top-[200px] right-10 bg-[#03ab03] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#03152D]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">Home</h1>
        </span>
        <span className="group-hover:hidden">
          <BiHomeAlt size={25} />
        </span>
      </a>

      <a
        href="#ventajas"
        title="Ventajas"
        className=" group fixed z-50 top-[250px] right-10 bg-[#03ab03] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#03152D]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">NAV 1</h1>
        </span>
        <span className="group-hover:hidden">
          <BiTrendingUp size={25} />
        </span>
      </a>
      <a
        href="#servicios"
        title="Servicios"
        className=" group fixed z-50 top-[300px] right-10 bg-[#03ab03] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#03152D]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">NAV 2</h1>
        </span>
        <span className="group-hover:hidden">
          <BiBroadcast size={25} />
        </span>
      </a>

      <a
        href="#clientes"
        title="Clientes"
        className=" group fixed z-50 top-[350px] right-10 bg-[#03ab03] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#03152D]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">NAV 3</h1>
        </span>
        <span className="group-hover:hidden">
          <BiUserCheck size={25} />
        </span>
      </a>

      <a
        href="#polizas"
        title="Polizas"
        className=" group fixed z-50 top-[400px] right-10 bg-[#03ab03] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#03152D]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">NAV 4</h1>
        </span>
        <span className="group-hover:hidden">
          <BiSpreadsheet size={25} />
        </span>
      </a>

      <a
        href="#contacto"
        title="Contacto"
        className=" group fixed z-50 top-[450px] right-10 bg-[#03ab03] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#03152D]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">NAV 5 </h1>
        </span>
        <span className="group-hover:hidden">
          <BiConversation size={25} />
        </span>
      </a>
    </div>
  );
};

export default Navbar;
