import Header from "@/_components/Header";
import ContactPage from "@/pages/ContactPage";
import { ScrollBarFramer } from "@/utils/scollbarFramer";
import { motion } from "framer-motion";

const RootLayout = ({ children }) => {
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

            {children}

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

export default RootLayout;
