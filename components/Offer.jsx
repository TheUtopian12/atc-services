import Image from "next/image";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Offer = () => {
  return (
    <>
      <div className="h-screen bg-gray-200 relative -z-10">
        <div className="absolute md:-left-20 md:-top-12 lg:-left-32 lg:-top-28">
          <img
            src="/img/Backgrounds/Que ofrecemos_low.jpg"
            alt=""
            className="md:w-[300px] md:h-[300px]  lg:w-[400px]  lg:h-[400px] xl:w-[800px] xl:h-[800px] md:rounded-full shadow-black shadow-2xl"
            style={{
              filter:
                "invert(30%) sepia(66%) saturate(250%) hue-rotate(94deg) brightness(70%) contrast(180%)",
            }}
          />
        </div>

        <div className="relative mx-5 sm:mx-0 top-[40%] sm:top-[60%]  md:top-[35%] md:pl-[0%] lg:top-[35%] lg:pl-[20%] xl:top-[30%] xl:pl-[40%] text-md lg:text-xl  xl:text-2xl">
          <div className="flex">
            <AiFillCheckCircle className="w-10 text-green-600 hidden sm:flex" />
            <h1 className=" pb-5">
              We provide{" "}
              <span className="font-bold">
                solutions for projects and help the customer
              </span>{" "}
              with a model that offers, <br /> commitment and service at
              competitive prices.
            </h1>
          </div>

          <div className="flex">
            <AiFillCheckCircle className="w-10 text-green-600 hidden sm:flex" />
            <h1 className=" pb-5">
              We add <span className="font-bold">value</span> through
              experience.
            </h1>
          </div>

          <div className="flex">
            <AiFillCheckCircle className="w-10 text-green-600 hidden sm:flex" />
            <h1 className="pb-5">
              {" "}
              We help to manage and implement your communication projects.
            </h1>
          </div>
          <div className="flex">
            <AiFillCheckCircle className="w-10 text-green-600 hidden sm:flex" />
            <h1 className="  pb-5">
              We offer an{" "}
              <span className="font-bold">
                efficient and quality engineering
              </span>{" "}
              service, <br /> attending each phase of the project
              implementation.
            </h1>
          </div>
          <div className="flex">
            <AiFillCheckCircle className="w-10 text-green-600 hidden sm:flex" />
            <h1 className="  pb-5">
              Looking for the execution in the{" "}
              <span className="font-bold">best time</span> and with the{" "}
              <span className="font-bold">highest possible efficiency.</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
