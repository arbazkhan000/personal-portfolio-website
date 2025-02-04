import { FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { ScrollBarFramer } from "@/utils/scollbarFramer";

const ContactPage = () => {
    return (
        <motion.div
            variants={ScrollBarFramer("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.9 }}
            className="min-h-screen text-white flex items-center justify-center px-5 py-10"
        >
            <div className="max-w-4xl w-full rounded-lg shadow-lg p-8 space-y-8">
                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        <i className="italic underline decoration-orange-500">
                            Get in Touch
                        </i>
                    </h1>
                    <p className="text-gray-400 mt-2">
                        Feel free to reach out for collaborations or just a
                        chat!
                    </p>
                </div>

                {/* Form Section */}
                <form className="space-y-5">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className="text-sm">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            required
                            className="bg-transparent border border-orange-500 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="text-sm">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            required
                            className="bg-transparent border border-orange-500 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="message" className="text-sm">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Your Message"
                            required
                            className="bg-transparent border border-orange-500 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-md shadow-lg hover:scale-105 transition-transform"
                    >
                        Send Message
                    </button>
                </form>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-8 pt-5">
                    <motion.a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-3xl text-gray-400 hover:text-white transition-colors"
                        aria-label="Visit GitHub Profile"
                    >
                        <FaGithub />
                    </motion.a>

                    <motion.a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-3xl text-gray-400 hover:text-pink-500 transition-colors"
                        aria-label="Visit Instagram Profile"
                    >
                        <FaInstagram />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactPage;
