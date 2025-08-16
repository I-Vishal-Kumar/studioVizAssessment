"use client";
import { useState, useEffect } from "react";

const phrases = [
    "Instant Payouts,<br/>Full Control, No Limits",
    "Buy Once, Download <br/> Anytime, Keep Forever",
    "Discover, Buy, and Sell <br/> Digital Products",
    "Sell for Free, <br/> Pay Only When You Earn"
];

export default function HeroTitle() {

    const [current, setCurrent] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[current].replace(/<br\/?>/g, "\n");
        const typingSpeed = isDeleting ? 50 : 80;

        if (!isDeleting && displayed === currentPhrase) {
            // Finished typing wait 3s
            setTimeout(() => setIsDeleting(true), 3000);
            return;
        }

        if (isDeleting && displayed === "") {
            //  wait 1s before next phrase
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % phrases.length);
                setIsDeleting(false);
            }, 1000);
            return;
        }

        const timer = setTimeout(() => {
            setDisplayed((prev) =>
                isDeleting
                    ? currentPhrase.substring(0, prev.length - 1)
                    : currentPhrase.substring(0, prev.length + 1)
            );
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayed, isDeleting, current]);

    return (
        <div className="h-25 sm:h-40">
            <h1 className="relative pr-2 sm:text-5xl text-3xl font-extrabold text-white whitespace-nowrap text-center">
                <span dangerouslySetInnerHTML={{ __html: displayed.replace(/\n/g, "<br/>") }} />
                <span className="inline-block w-[5px] h-[1em] bg-white animate-blink align-top mx-1" />
            </h1>
        </div>
    );
}
