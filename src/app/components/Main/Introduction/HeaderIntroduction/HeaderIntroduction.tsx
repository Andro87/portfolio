"use client";

import styles from "./HeaderIntroduction.module.scss";

import { Montez } from "next/font/google";

const montez = Montez({ subsets: ["latin"], weight: "400" });

import { motion } from "framer-motion";
import { header, letter } from "motion/framer";

const sentence1 = "Hello, I am ";

const myName = "Giusy";

const sentence2 = " and I am a Frontend Developer";

export const HeaderIntroduction = () => {
    return (
        <motion.h1
            className={styles.header}
            variants={header}
            initial="hidden"
            animate="visible"
        >
            {sentence1.split("").map((char, index) => {
                return (
                    <motion.span variants={letter} key={char + index}>
                        {char}
                    </motion.span>
                );
            })}

            {myName.split("").map((char, index) => {
                return (
                    <motion.span
                        variants={letter}
                        key={char + index}
                        className={`${styles.header_name} ${montez.className}`}
                    >
                        {char}
                    </motion.span>
                );
            })}

            <br />
            {sentence2.split("").map((char, index) => {
                return (
                    <motion.span variants={letter} key={char + index}>
                        {char}
                    </motion.span>
                );
            })}
        </motion.h1>
    );
};
