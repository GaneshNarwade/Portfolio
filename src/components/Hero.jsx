import React from "react";
import avatar from "../images/Georgie-Home.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { Link } from "react-router-dom";
import TextSpan from "../utils/textSpan";
import { Tooltip } from 'react-tooltip'
import { Typewriter } from "react-simple-typewriter";


const Hero = () => {
  
  const name = "Giorgio Faini".split("");

  return (
    <section className="flex items-center h-screen pt-10 md:pt-0 bg-[#F9F9F9] text-neutral-800">
      <div className="max-w-[1200px] items-center grid mx-auto md:grid-cols-2 gap-7 md:gap-0 lg:gap-16 drop-shadow-sm">
        {/*Immagine*/}
        <motion.img
          data-tooltip-id="george"
          data-tooltip-content={"Yes, that's me!"}
          variants={fadeIn("right", 0.1)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:order-1 w-[250px] mx-auto md:w-[500px] xxl:w-[600px] drop-shadow-lg"
          src={avatar}
          alt=""
        />
        <Tooltip id="george" place="top-end" variant="dark" />

        {/*Container Testo*/}
        <div className="flex flex-col items-center gap-2 px-5 mx-auto text-center md:gap-4 md:text-right md:items-end">
          <motion.p
            className="md:text-3xl"
            variants={fadeIn("left", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            Hi👋, my name is
          </motion.p>

          <motion.div
            className="mb-2 text-4xl font-bold text-v md:text-7xl"
            variants={fadeIn("left", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            {name.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}

            
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-2xl font-semibold md:text-4xl"
            variants={fadeIn("left", 0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="text-neutral-600">I'm a</h2>

            <div className="font-bold text-neutral-800">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Game Developer",
                  "Graphic Designer",
                ]}
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={2000}
                cursor
                loop={false}
              />
            </div>
          </motion.div>
          <motion.p
            className=" text-neutral-500 md:text-[22px]"
            variants={fadeIn("left", 0.4)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            Constantly focused on learning and expanding my expertise, crafting
            ever-improving, high-performing solutions.
          </motion.p>

          <Link to={"About"}>
            <motion.button
              className="px-5 py-2 mt-2 font-bold text-white uppercase border-b-4 rounded-lg bg-vBtn bg-v hover:bg-vBtnHover border-vBtnHover hover:border-v"
              variants={fadeIn("left", 0.5)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              About Me
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
