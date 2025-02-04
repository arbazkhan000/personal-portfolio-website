import { ScrollBarFramer } from "@/utils/scollbarFramer";
import bootstrapImage from "../assets/bootstrap.webp";
import cssImage from "../assets/css.webp";
import expressImage from "../assets/express.webp";
import HtmlImage from "../assets/html.webp";
import jsImage from "../assets/JavaScript.webp";
import python from "../assets/python.webp";
import tailwindImage from "../assets/Tailwindcss.webp";
import reactjsImage from '../assets/react.png';
import nodejsImage from '../assets/nodejs.png';
import githubImage from '../assets/github.png'
import gitImage from '../assets/git.png'
import monodbImage from '../assets/mongodb.png'

import { motion } from "framer-motion";

const ServicePage = () => {
    const techSkillImage = [
        HtmlImage,
        cssImage,
        jsImage,
        tailwindImage,
        bootstrapImage,
        reactjsImage,
        nodejsImage,
        githubImage,
        gitImage,
        expressImage,
        monodbImage ,
        python,
    ];

    return (
        <div className="text-white px-5 sm:px-10 py-8">
            <motion.div
                variants={ScrollBarFramer("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
            >
                <h1 className="text-4xl font-bold text-center mb-8">
                    <i className="italic underline decoration-orange-500">
                        Tools I work with
                    </i>
                </h1>
                {/* border  grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-6xl mx-auto */}
                {/* Responsive Grid */}
                <div className="  w-full  gap-5 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8  max-w-6xl mx-auto  ">
                    {techSkillImage.map((elem, index) => (
                        <img
                            className="h-20 w-20 sm:h-24 sm:w-24 object-contain   border-orange-500 rounded-lg hover:backdrop-blur hover:scale-95 duration-500 cursor-pointer"
                            key={index}
                            src={elem}
                            alt="Tech stack image"
                        />
                    ))}
                </div>
            </motion.div>
            {/* Project List Section */}
            <div className="py-8">{/* <ProjectListTab /> */}</div>
        </div>
    );
};

export default ServicePage;
