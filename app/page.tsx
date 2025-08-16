"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import HeroTitle from "./_components/heroTitle";
import Bubble from "./_components/bubble";
import { IoArrowDown, IoCartOutline, IoCubeOutline, IoPricetagOutline, IoSearch } from "react-icons/io5";
import { BiCategory, BiGroup } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useMediaQuery } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from 'aos'
import 'aos/dist/aos.css';
import AboutSection from "./_components/aboutSection";

gsap.registerPlugin(ScrollTrigger);

const vwToPx = (value: string | number) => {
  if (typeof value === "number") return value;
  if (value.endsWith("vw")) {
    return (parseFloat(value) / 100) * window.innerWidth;
  }
  return parseFloat(value);
};

export default function Home() {

  const ref = useRef(null);
  const isBiggerThanLg = useMediaQuery("(min-width:1200px)");
  const isSmallScreen = useMediaQuery("(max-width:500px");
  const buttonRef = useRef(null);
  const test = useRef(null);

  // track scroll for button
  const { scrollYProgress: buttonProgress } = useScroll({
    target: buttonRef,
    offset: ["start 0%", "end start"],
  });

  const bubbles = [
    {
      title: 'Music',
      summary: 'Discover our handpicked selection of premium 3D models and assets from top creators.',
      initialX: isBiggerThanLg ? "-40vw" : "-30vw", initialY: isBiggerThanLg ? -550 : -300, largeOnly: false,
      icon: <IoCubeOutline className='text-blue-500 text-[1.1rem] sm:text-3xl' />
    },
    { initialX: "40vw", title: '3D Models', summary: 'Browse thousands of high-quality 3D models for your projects...', initialY: isBiggerThanLg ? -350 : -250, largeOnly: false, icon: <IoCartOutline className='text-lime-600 text-[1.1rem] sm:text-2xl' /> },
    { initialX: "-28vw", title: 'Checkout', summary: 'Fast and secure payments for your 3D model purchases.', initialY: 50, largeOnly: false, icon: <IoPricetagOutline className='text-orange-500 text-[1.1rem] sm:text-2xl' /> },
    { initialX: 30, title: 'pricing', summary: 'Flexible pricing options for creators and businesses.', initialY: 80, largeOnly: false, icon: <BiGroup className='text-purple-500 text-[1.1rem] sm:text-2xl' /> },
    { initialX: '38vw', title: 'Community', summary: 'Join thousands of 3D artists and designers.', initialY: 50, largeOnly: false, icon: <BiCategory className='text-blue-500 text-[1.1rem] sm:text-2xl' /> },
    { initialX: '-30vw', title: 'Search', summary: 'Find exactly what you need with our powerful search tools.', initialY: -300, largeOnly: true, icon: <IoSearch className='text-blue-500 text-[1.1rem] sm:text-2xl' /> },
    { initialX: '-35vw', title: 'Downloads', summary: 'Access your purchased models anywhere, anytime.', initialY: -100, largeOnly: true, icon: <IoArrowDown className='text-sky-500 text-[1.1rem] sm:text-2xl' /> },
    { initialX: '-45vw', title: 'Favroits', summary: 'Save models you love for quick', initialY: 10, largeOnly: true, icon: <MdOutlineFavoriteBorder className='text-red-500 text-[1.1rem] sm:text-2xl' /> },
  ]

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".bubble-item").forEach((bubble) => {
        const initialX = vwToPx(bubble.dataset.x || 0);
        const initialY = vwToPx(bubble.dataset.y || 0);

        gsap.fromTo(
          bubble,
          { x: initialX, y: initialY, opacity: 1 },
          {
            x: 0,
            y: 0,
            scale: 0.4,
            opacity: 0,
            ease: "sine",
            scrollTrigger: {
              trigger: bubble,
              start: isSmallScreen ? "top 20%" : 'top 1%',
              end: "+=200",
              scrub: true,
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, [isBiggerThanLg, isSmallScreen]);

  useEffect(() => {

    //  if its a small screen skip animation
    if (isSmallScreen) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".text-animation-element").forEach((text) => {
        gsap.to(
          text,
          {
            x: 0,
            y: -500,
            opacity: 0,
            ease: "sine",
            scrollTrigger: {
              trigger: text,
              start: isSmallScreen ? "top 40%" : 'bottom 1%',
              end: "+=400",
              scrub: true,
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, [isBiggerThanLg, isSmallScreen]);

  const textOpacityInverse = useTransform(buttonProgress, [0, 0.9], [0, 1]);
  const smoothOpacity = useSpring(textOpacityInverse, {
    stiffness: 40,
    damping: 10
  })

  return (
    <div className=" scroll-smooth h-[300vh] relative">
      <div className={` h-[200vh] scroll-smooth md:h-[240vh] overflow-hidden`}>
        <main ref={ref} className={`flex h-screen  ${ isSmallScreen ? "relative" : 'fixed' } top-0 justify-center pt-20 flex-col gap-[32px] w-full row-start-2 items-center`}>
          <div className="relative z-1 md:pb-10">

            <div className="text-animation-element">
              <HeroTitle />
            </div>
            {
              isSmallScreen ? (
                <p className="text-animation-element text-[0.66rem] sm:text-lg text-center leading-1.4 whitespace-nowrap md:font-semibold text-neutral-400">
                  Your one-stop digital platform for 3D models and digital creations. <br /> Join our community of creators and collectors today.
                </p>
              ) : (
                <p
                  className=" text-animation-element text-[0.66rem] sm:text-lg text-center leading-1.4 whitespace-nowrap md:font-semibold text-neutral-400">
                  Your one-stop digital platform for 3D models and digital creations. Join our <br /> community of creators and collectors today.
                </p>
              )
            }
            <div>
              <span className="bg-[#ef233c] absolute bottom-0 -md:left-[50%] -left-[30%] md:top-[-30%] block blur-3xl bg-blend-multiply filter h-72 lg:h-96 lg:w-96 opacity-10 rounded-full w-72">
              </span>
              <span className="-md:ml-20 bg-[#04868b] absolute md:left-5 -right-10 md:top-[10%] -top-20 block blur-3xl filter h-72 lg:h-96 lg:w-96 mt-40 opacity-10 rounded-full w-72"></span>
            </div>
          </div>

          <motion.div ref={test}
            className="text-animation-element relative bg-[linear-gradient(-45deg,transparent_15%,rgba(68,68,68,.8)_70%,transparent_75%,transparent_100%)]
                  max-w-md border border-slate-400/30
                 bg-[length:250%_250%,100%_100%] bg-no-repeat cursor-pointer px-8 rounded-full md:py-3 py-2 
                 hover:bg-[#262626]"
            animate={{ backgroundPosition: ["100% 0", "-200% 0"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <h3 className="font-medium tracking-tight text-white text-[0.66rem] md:text-[1rem] md:font-normal">Explore all products</h3>
            {
              bubbles.map((bubble, i) => (
                <Bubble
                  key={`bubble-${ i }-${ bubble.initialX }`}
                  itemKey={`bubble-${ i }-${ bubble.initialX }`}
                  largeScreenOnly={bubble.largeOnly}
                  initial={{ x: bubble.initialX, y: bubble.initialY }}
                  data-x={bubble.initialX}
                  data-y={bubble.initialY}
                  avatarIcon={bubble.icon}
                  tooltipSummary={bubble.summary}
                  tooltipTitle={bubble.title}
                  icon={bubble.icon}
                />

              ))
            }
          </motion.div>

          <div ref={buttonRef} className="absolute top-[120vh]"></div>

          <AboutSection
            isSmallScreen={isSmallScreen}
            smoothOpacity={smoothOpacity}
          />

        </main>
      </div>

    </div>
  );
}
