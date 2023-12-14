"use client";

import styles from "./About.module.scss";
import Link from "next/link";

import { motion } from "framer-motion";
import { aboutAnimation, aboutImage, aboutInfo } from "motion/framer";

export const About = () => {
    return (
        <section
            className={styles.section_about}
            aria-label="about me"
            id="about"
        >
            <motion.div
                className={styles.container}
                variants={aboutAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className={styles.about_img} variants={aboutImage}>
                    <img alt="a picture of me" src="/assets/AvatarMaker.png" />
                </motion.div>
                <motion.div className={styles.about_info} variants={aboutInfo}>
                    <div className={styles.about_wrap}>
                        <h2>about</h2>
                        <p>Hi!</p>
                        <p>
                            My journey into the tech industry began in early
                            2020 when I started teaching myself how to code.
                        </p>
                        <p>
                            I completed courses on{" "}
                            <Link href="https://www.codecademy.com/">
                                Codecademy
                            </Link>
                            , which allowed me to build a solid foundation of
                            knowledge. At the same time, I challenged myself by
                            solving problems and completing projects on{" "}
                            <Link href="https://www.frontendmentor.io/">
                                Frontend Mentor
                            </Link>
                            .{" "}
                        </p>

                        <p>
                            I am always eager to learn new skills and tackle new
                            challenges, which is why I am constantly seeking
                            opportunities to improve even further.
                        </p>
                        <p>
                            When I&apos;m not coding, I enjoy spending time in
                            nature, exploring new places, walking, cycling, and
                            indulging in my passions for reading, art, and food.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
