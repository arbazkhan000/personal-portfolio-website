import { motion } from "framer-motion";
import Header from "@/_components/Header";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import HeroPage from "@/pages/HeroPage";
import ServicePage from "@/pages/ServicePage";
 // New Portfolio Section
import { ScrollBarFramer } from "../utils/scollbarFramer"; // Animation Utility

const Layout = () => {
    return (
        <div>
            <motion.div
                variants={ScrollBarFramer("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
            >
                <Header />
            </motion.div>

            {/* Hero Section */}
            <motion.div
                variants={ScrollBarFramer("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
            >
                <HeroPage />
            </motion.div>

            {/* About Section */}
            <motion.div
                variants={ScrollBarFramer("left", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
            >
                <AboutPage />
            </motion.div>

            {/* Services Section */}
            <motion.div
                variants={ScrollBarFramer("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
            >
                <ServicePage />
            </motion.div>

            {/* Contact Section */}
            <motion.div
                variants={ScrollBarFramer("down", 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
            >
                <ContactPage />
            </motion.div>
        </div>
    );
};

export default Layout;
