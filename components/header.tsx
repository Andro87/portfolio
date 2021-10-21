import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Git from "../svg/github.svg";
import { useState } from "react";
const Header: React.FunctionComponent = () => {
    const [open, setOpen] = useState(false);

    return (
        <header
            className={`${styles.header} ${open ? styles.header_open : null}`}
            onClick={() => setOpen(!open)}
        >
            <div className={styles.btn_wrap} onClick={() => setOpen(!open)}>
                {!open ? (
                    <button
                        type="button"
                        aria-label="menu button"
                        className={styles.menu_btn}
                    ></button>
                ) : (
                    <button
                        type="button"
                        aria-label="close button"
                        className={styles.close_btn}
                    ></button>
                )}
            </div>
            {open ? (
                <div className={styles.menu}>
                    <Link href="/">
                        <a className={styles.link}>Home</a>
                    </Link>
                    <Link href="/about_me">
                        <a className={styles.link}>About me</a>
                    </Link>
                    <Link href="/portfolio">
                        <a className={styles.link}>Portfolio</a>
                    </Link>
                    <Link href="/contact">
                        <a className={styles.link}>Contact Me</a>
                    </Link>

                    <div className={styles.link_wrap}>
                        <Link href="https://github.com/Andro87">
                            <Git />
                        </Link>
                        <Link href="https://www.frontendmentor.io/profile/Andro87">
                            <img
                                src="/images/icons/favicon-32x32.png"
                                alt="frontend"
                            />
                        </Link>
                    </div>
                </div>
            ) : null}
        </header>
    );
};
export default Header;
