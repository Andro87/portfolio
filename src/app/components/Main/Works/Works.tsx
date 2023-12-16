"use client";

import { Project } from "./Project/Project";
import styles from "./Works.module.scss";

import { motion } from "framer-motion";
import { allProjectsAnimation } from "motion/framer";

import data from "data/projects.json";
export const Works = () => {
    const allProjects = data.map((project, index) => {
        return (
            <Project
                key={index}
                screenshot={project.screenshot}
                project={project.project}
                demo={project.demo}
                code={project.code}
            />
        );
    });
    return (
        <section
            className={styles.section_works}
            aria-label="a collection of works"
            id="works"
        >
            <div className={styles.container}>
                <h2> my work</h2>
                <motion.div
                    className={styles.works_container}
                    variants={allProjectsAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {allProjects}
                </motion.div>
            </div>
        </section>
    );
};
