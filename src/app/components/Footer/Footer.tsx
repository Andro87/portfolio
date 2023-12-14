"use client";

import styles from "./Footer.module.scss";

import { motion } from "framer-motion";
import { footerAnimation } from "motion/framer";

import Link from "next/link";

export const Footer = () => {
    return (
        <motion.footer
            className={styles.footer}
            variants={footerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className={styles.container}>
                <nav className={styles.navigation}>
                    <ul className={styles.navigation_list}>
                        <li className={styles.navigation_item}>
                            <Link
                                className={styles.navigation_link}
                                href="https://github.com/Andro87"
                            >
                                <img
                                    alt="github link"
                                    src="./assets/github.svg"
                                />
                            </Link>
                        </li>
                        <li className={styles.navigation_item}>
                            <Link
                                className={styles.navigation_link}
                                href="https://www.frontendmentor.io/profile/Andro87"
                            >
                                <img
                                    alt="frontendmentor link"
                                    src="./assets/favicon-32x32.png"
                                />
                            </Link>
                        </li>
                        <li className={styles.navigation_item}>
                            <Link
                                className={styles.navigation_link}
                                href="https://www.codewars.com/users/Pep87"
                            >
                                <img
                                    alt="codewars link"
                                    src="./assets/codewars_icon.png"
                                />
                            </Link>
                        </li>
                        <li className={styles.navigation_item}>
                            <Link
                                className={styles.navigation_link}
                                href="https://scrimba.com/dashboard#enrolled"
                            >
                                <img
                                    alt="scrimba link"
                                    src="./assets/scrimba_logo.png"
                                />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </motion.footer>
    );
};
