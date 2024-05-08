import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export const TypingAnimation = ({ title = "", typingSpeed = 100 }) => {
    const [displayedTitle, setDisplayedTitle] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, {
        once: true,
        margin: "0px 0px -200px 0px",
    });

    useEffect(() => {
        if (inView && charIndex < title.length) {
            const timer = setTimeout(() => {
                setDisplayedTitle((displayed) => displayed + title[charIndex]);
                setCharIndex(charIndex + 1);
            }, typingSpeed);

            return () => clearTimeout(timer);
        }
    }, [inView, charIndex, title, typingSpeed]);

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                {displayedTitle}
            </motion.div>
            <div
                style={{
                    height: "1px",
                    overflowY: "clip",
                    opacity: 0,
                }}
            >
                {title}
            </div>
        </>
    );
};
