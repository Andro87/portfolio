import React, { ReactNode } from "react";
import styles from "./work.module.scss";
import Right from "../svg/arrow-right.svg";
import Left from "../svg/arrow-left.svg";
import Link, { LinkProps } from "next/link";
import { useState } from "react";

interface Props {
    readonly image: ReactNode;
    readonly project: string;
    readonly language: string;
    readonly info: string;
    readonly href: string;
}
const Work: React.FunctionComponent<Props> = props => {
    const { image, project, language, info, href } = props;
    const [show, setShow] = useState(false);
    return (
        <div className={styles.work}>
            <div
                className={`${styles.work_img} ${
                    show ? styles.background : null
                }`}
            >
                {image}
            </div>

            <div className={styles.work_info}>
                <h5>{project}</h5>
                <p>{language}</p>
                <Link href={href}>
                    <a> SEE PROJECT</a>
                </Link>
            </div>

            <button
                type="button"
                aria-label="more info"
                className={styles.btn_more}
                onClick={() => setShow(!show)}
            >
                {!show ? <Right /> : <Left />}
            </button>
            {show ? (
                <div className={styles.info}>
                    <p>{info}</p>
                </div>
            ) : null}
        </div>
    );
};
export default Work;
