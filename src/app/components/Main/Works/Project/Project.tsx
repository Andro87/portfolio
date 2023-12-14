import Link from "next/link";
import styles from "./Project.module.scss";

import { motion } from "framer-motion";
import { projectAnimation } from "../../../../../../motion/framer";

interface Props {
    readonly screenshot: string;
    readonly project: string;
    readonly demo: string;
    readonly code: string;
}

export const Project: React.FunctionComponent<Props> = props => {
    const { screenshot, project, demo, code } = props;
    return (
        <motion.div
            className={styles.project_container}
            variants={projectAnimation}
        >
            <div className={styles.project_img}>
                <img alt={project} src={screenshot} />
            </div>
            <div className={styles.project_info}>
                <h3>{project}</h3>
                <Link href={demo}>live demo</Link>
                <Link href={code}>source code</Link>
            </div>
        </motion.div>
    );
};
