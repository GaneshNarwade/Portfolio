import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import TextSpan from "../utils/textSpan";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";


const Skills = () => {
    const name = "Let's stay in touch!".split("");

    return (
        <section>
            <div className="flex flex-col items-center justify-center w-full min-h-screen">
                {/*container*/}
                <div className="grid items-center w-full gap-8 justify-items-center">
                    {/*title*/}
                    <motion.div
                        className="text-3xl font-bold text-center md:text-4xl lg:text-5xl text-v "
                        variants={fadeIn("right", 0.1)}
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
                    {/*Contact Details*/}
                    <div>
                        <motion.p
                            className=" text-neutral-500 mt-5 mb-10 w-[300px] md:w-[400px] md:text-[18px] text-center"
                            variants={fadeIn("down", 0.4)}
                            initial={"hidden"}
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            <a href="mailto:ganeshdnarwade7@gmail.com">ganeshdnarwade7@gmail.com</a>
                        </motion.p>

                        {/*<div className="flex text-justify text-neutral-500 items-center justify-center gap-4 mt-5 mb-10 "> */}
                        <div className="grid grid-cols-4 gap-3 mx-auto md:gap-6 lg:gap-8 lg:grid-cols-5 ">

                            <a
                                href="https://www.linkedin.com/in/ganeshnarwade/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-800 pr-8 hover:text-v transition-colors duration-300"
                            >
                                <FaLinkedinIn size={25} />
                            </a>
                            <a
                                href="https://github.com/ganeshnarwade"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-800 pr-8 hover:text-v transition-colors duration-300"
                            >
                                <FaGithub size={25} />
                            </a>
                            <a
                                href="https://instagram.com/__g_n7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-800 pr-8 hover:text-v transition-colors duration-300"
                            >
                                <FaInstagram size={25} />
                            </a>
                            <a
                                href="https://www.x.com/__g_n7/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-800 hover:text-v transition-colors duration-300"
                            >
                                <FaTwitter size={25} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
