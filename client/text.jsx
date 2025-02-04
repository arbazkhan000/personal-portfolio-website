import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useMemo } from "react";
import { useEffect, useState } from "react";

const HeroPage = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const options = useMemo(
        () => ({
            fullScreen: {
                enable: true,
                zIndex: -1,
            },
            background: {
                color: "#000",
            },
            fpsLimit: 60,
            emitters: {
                direction: "top",
                life: {
                    count: 0,
                    duration: 0.1,
                    delay: 0.1,
                },
                rate: {
                    delay: 0.15,
                    quantity: 1,
                },
                size: {
                    width: 100,
                    height: 0,
                },
                position: {
                    y: 100,
                    x: 50,
                },
            },
            particles: {
                number: {
                    value: 0,
                },
                destroy: {
                    mode: "split",
                    split: {
                        count: 1,
                        factor: { value: 0.333333 },
                        rate: { value: 100 },
                        particles: {
                            color: {
                                value: [
                                    "#ff595e",
                                    "#ffca3a",
                                    "#8ac926",
                                    "#1982c4",
                                    "#6a4c93",
                                ],
                            },
                            stroke: {
                                width: 0,
                            },
                            shape: {
                                type: "circle",
                            },
                            opacity: {
                                value: { min: 0.1, max: 1 },
                                animation: {
                                    enable: true,
                                    speed: 0.7,
                                    sync: false,
                                    startValue: "max",
                                    destroy: "min",
                                },
                            },
                            size: {
                                value: { min: 1, max: 2 },
                                animation: {
                                    enable: true,
                                    speed: 5,
                                    sync: false,
                                    startValue: "min",
                                    destroy: "none",
                                },
                            },
                            life: {
                                count: 1,
                                duration: {
                                    value: { min: 1, max: 2 },
                                },
                            },
                            move: {
                                enable: true,
                                gravity: {
                                    enable: true,
                                    acceleration: 9.81,
                                    inverse: false,
                                },
                                decay: 0.05,
                                speed: { min: 10, max: 25 },
                                direction: "none",
                                outModes: "destroy",
                            },
                        },
                    },
                },
                life: {
                    count: 1,
                },
                shape: {
                    type: "line",
                },
                size: {
                    value: { min: 0.1, max: 50 },
                    animation: {
                        enable: true,
                        sync: true,
                        speed: 90,
                        startValue: "max",
                        destroy: "min",
                    },
                },
                stroke: {
                    color: {
                        value: "#ffffff",
                    },
                    width: 1,
                },
                rotate: {
                    path: true,
                },
                move: {
                    enable: true,
                    gravity: {
                        acceleration: 15,
                        enable: true,
                        inverse: true,
                        maxSpeed: 100,
                    },
                    speed: { min: 10, max: 20 },
                    outModes: {
                        default: "destroy",
                        top: "none",
                    },
                    trail: {
                        enable: true,
                        length: 10,
                        fill: {
                            color: {
                                value: "#000",
                            },
                        },
                    },
                },
            },
        }),
        []
    );

    if (!init) return null;

    return <Particles id="tsparticles" options={options} />;
};

export default HeroPage;
