import React from "react";
import works from "../Data/works";

import Carousel from "nuka-carousel";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GraphicDesign = () => {
  const config = {
    containerClassName: "",
    nextButtonClassName: "rounded-full",
    nextButtonText: <FaChevronRight />,
    pagingDotsClassName: "me-2",
    pagingDotsContainerClassName: "",
    prevButtonClassName: "rounded-full",
    prevButtonText: <FaChevronLeft />,
  };

  return (
    <section>
      {/*Container*/}
      <div className="pb-8 mx-5 ">
        {/*Card container*/}
        <div className="grid gap-5 lg:grid-cols-3 max-w-[1500px] items-center">
          {works.design.map((project, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", project.duration)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true, amount: 'some' }}
              >
                <div className="grid gap-3 p-8 mx-5 duration-200 ease-in-out bg-white shadow-lg rounded-2xl hover:-translate-y-3">
                  <Carousel
                    className="rounded-lg"
                    defaultControlsConfig={config}
                    wrapAround
                    autoplay
                  >
                    {project.image.map((pic, index) => (
                      <div className="md:h-[300px] h-[200px] max-w-full">
                        <img className="object-contain w-full h-full" key={index} src={pic} />
                      </div>
                    ))}
                  </Carousel>

                  <p className="text-[20px] md:text-2xl font-bold cursor-pointer">{project.title}</p>

                  <p>{project.description}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-semibold">Built with:</span>
                    <span className=" text-vBrd">{project.stack}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GraphicDesign;
