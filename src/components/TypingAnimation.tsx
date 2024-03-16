import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const TypingAnimation = ({ title = "", typingSpeed = 100 }) => {
    const [displayedTitle, setDisplayedTitle] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5, // Adjust this value based on when you want the animation to start
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
                transition={{ duration: 0.5 }}
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
