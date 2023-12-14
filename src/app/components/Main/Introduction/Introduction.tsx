"use client";

import styles from "./Introduction.module.scss";

import Link from "next/link";
import { HeaderIntroduction } from "./HeaderIntroduction/HeaderIntroduction";

import { motion } from "framer-motion";
import { introduction, btnAnimation } from "motion/framer";

export const Introduction = () => {
    return (
        <section
            className={styles.section_introduction}
            aria-label="a little introducation about me"
        >
            <motion.div
                className={styles.container}
                variants={introduction}
                initial="hidden"
                animate="visible"
            >
                <HeaderIntroduction />

                <motion.div
                    className={styles.btn_container}
                    variants={btnAnimation}
                >
                    <Link href="#works" className={styles.btn_intro}>
                        see my works
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};
