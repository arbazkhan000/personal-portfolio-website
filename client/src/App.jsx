import { motion } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import ParticlesEffect from "./pages/Particles";
import ServicePage from "./pages/ServicePage";
import Layout from "./layout/Layout";
import RootLayout from "./layout/RootLayout";
import HeroPage from "./pages/HeroPage";
import { ScrollBarFramer } from "./utils/scollbarFramer";

// Define routes
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Layout />

                <ParticlesEffect />
            </>
        ),
    },
    {
        path: "/home",
        element: (
            <>
                <RootLayout>
                    <motion.div
                        variants={ScrollBarFramer("left", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <HeroPage />
                    </motion.div>
                    <ParticlesEffect />
                </RootLayout>
            </>
        ),
    },
    {
        path: "/about",
        element: (
            <>
                <RootLayout>
                    <motion.div
                        variants={ScrollBarFramer("left", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <AboutPage />
                    </motion.div>
                    <ParticlesEffect />
                </RootLayout>
            </>
        ),
    },
    {
        path: "/services",
        element: (
            <>
                <RootLayout>
                    <motion.div
                        variants={ScrollBarFramer("right", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <ServicePage />
                    </motion.div>

                    <ParticlesEffect />
                </RootLayout>
            </>
        ),
    },
    {
        path: "/contact",
        element: (
            <RootLayout>
                <motion.div
                    variants={ScrollBarFramer("down", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.9 }}
                >
                    {/* <ContactPage /> */}
                </motion.div>
                <ParticlesEffect />
            </RootLayout>
        ),
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
