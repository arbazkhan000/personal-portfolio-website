import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useMemo } from "react";
import { useEffect, useState } from "react";

const ParticlesEffect = () => {
    const [init, setInit] = useState(false);

    // Initialize tsParticles engine once
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // Use loadSlim for a smaller bundle size
        }).then(() => setInit(true));
    }, []);

    // Particle options
     const options = useMemo(
         () => ({
             autoPlay: true,
             background: {
                 color: { value: "#000" },
             },
             fullScreen: {
                 enable: true,
                 zIndex: -1,
             },
             detectRetina: true,
             fpsLimit: 120,
             interactivity: {
                 events: {
                     onHover: {
                         enable: true,
                         mode: "trail",
                     },
                 },
                 modes: {
                     trail: {
                         delay: 0.005,
                         quantity: 5,
                         particles: {
                             color: { value: "#ff0000" },
                             move: {
                                 speed: 2,
                             },
                             size: {
                                 value: { min: 1, max: 5 },
                             },
                         },
                     },
                 },
             },
             particles: {
                 number: {
                     value: 100,
                     density: { enable: true },
                 },
                 color: { value: "#EA7227" },
                 size: {
                     value: { min: 1, max: 3 },
                     animation: {
                         enable: true,
                         speed: 3,
                     },
                 },
                 move: {
                     enable: true,
                     speed: 2,
                     outModes: { default: "out" },
                 },
                 links: {
                     enable: true,
                     distance: 100,
                     color: "#ffffff",
                     opacity: 0.5,
                     width: 1,
                 },
             },
         }),
         []
     );



    if (!init) return null;

    return <Particles id="tsparticles" options={options} />;
};

export default ParticlesEffect;
