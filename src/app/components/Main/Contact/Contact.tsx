"use client";

import styles from "./Contact.module.scss";

import { motion } from "framer-motion";
import { contactAnimation } from "motion/framer";

import { Form } from "./Form/Form";

export const Contact = () => {
    return (
        <motion.section
            className={styles.section_contact}
            aria-label="a form to get in touch"
            id="contact"
            variants={contactAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className={styles.container}>
                <h2>Contact</h2>
                <p>Do you want to know more or work together?</p>
                <Form />
            </div>
        </motion.section>
    );
};
