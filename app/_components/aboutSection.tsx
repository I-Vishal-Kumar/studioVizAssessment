import Aos from 'aos'
import { motion, MotionValue } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function AboutSection({
    smoothOpacity,
    isSmallScreen,
}: {
    smoothOpacity: MotionValue,
    isSmallScreen: boolean,
}) {
    const [vissible, setvissible] = useState(false);

    useEffect(() => {
        Aos.refresh();
    }, [isSmallScreen, vissible]);

    useEffect(() => {
        const unsubscribe = smoothOpacity.on("change", (newVal: number) => {
            if (newVal === 0) {
                setvissible(false)
            } else {
                setvissible(true);
            }
        });
        return () => unsubscribe();
    }, [smoothOpacity, isSmallScreen]);

    return (
        <motion.section
            style={
                isSmallScreen
                    ? { opacity: 1 }
                    : { opacity: smoothOpacity }
            }
            className="flex gap-8 absolute w-full top-[100vh] md:top-[30vh] left-0 z-20 flex-col md:flex-row pb-20"
        >
            <div className="text-center flex-1 w-full flex flex-col items-center md:items-start md:pl-20 gap-8 md:gap-5 md:text-start">
                <h3
                    key={`mdi-title-${ vissible }`}
                    data-aos="fade-up" className="text-[1.1em] md:text-[1.5em]">Meet 3DIMLI</h3>

                {isSmallScreen ? (
                    <h2 className="text-3xl font-semibold">
                        {["Your ", "All-in-one ", "Digital \n", "Commerce ", "Platform"].map((word, i) => (
                            <span
                                key={`${ i }-${ vissible }`}
                                data-aos="fade-up"
                                data-aos-delay={i * 10}
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                ) : (
                    <h2 className="text-5xl font-semibold">
                        {["Your ", "All-in-one ", "Digital \n", "Commerce ", "Platform "].map((part, i) => (
                            <span
                                key={`${ i }-${ vissible }`}
                                data-aos="fade-up"
                                className="whitespace-pre-wrap"
                                data-aos-offset="300"
                                data-aos-delay={i * 200}
                            >
                                {part}
                            </span>
                        ))}
                    </h2>
                )}

                <p
                    key={`summary-${ vissible }`}
                    data-aos="fade-up"
                    className="text-neutral-400 text-xs md:text-[1.19rem] not-md:px-5"
                >
                    <span className="text-white font-semibold">Sell 3D Models, E-books, and digital products</span> effortlessly. Manage your store, deliver products seamlessly, and reach a global audience.
                </p>

                <motion.div
                    data-aos="fade-up"
                    className="relative bg-[linear-gradient(-45deg,transparent_15%,rgba(68,68,68,.8)_70%,transparent_75%,transparent_100%)]
                        max-w-md border border-slate-400/30
                        bg-[length:250%_250%,100%_100%] bg-no-repeat cursor-pointer px-8 rounded-full md:py-3 py-2 
                        hover:bg-[#262626] w-fit"
                    animate={{ backgroundPosition: ["100% 0", "-200% 0"] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <h3 className="font-medium tracking-tight text-white text-[0.66rem] md:text-[1rem] md:font-normal">
                        Start Selling Now &nbsp; &nbsp; &gt;
                    </h3>
                </motion.div>
            </div>

            <div
                key={`buttom-${ vissible }`}
                data-aos="fade-up-left"
                data-aos-delay={isSmallScreen ? 0 : 400}
                className="pl-6 flex-1 w-full self-center"
            >
                <div className="w-full rounded-l-full bg-red-400 h-50 md:h-60"></div>
            </div>
        </motion.section>
    )
}
