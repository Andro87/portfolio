"use client";
import styles from "./Header.module.scss";

import { Montez } from "next/font/google";
const montez = Montez({ subsets: ["latin"], weight: "400" });

import { useState } from "react";
import Link from "next/link";

import { Hamburger } from "./Hamburger/Hamburger";
import { CloseBtn } from "./CloseBtn/CloseBtn";

export const Header = () => {
    const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

    const handleMenuMobile = () => {
        setIsMenuMobileOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.btn_container}>
                    {!isMenuMobileOpen ? (
                        <Hamburger
                            onOpenMenuMobile={() =>
                                setIsMenuMobileOpen(!isMenuMobileOpen)
                            }
                        />
                    ) : (
                        <CloseBtn
                            onCloseMenuMobile={() =>
                                setIsMenuMobileOpen(!isMenuMobileOpen)
                            }
                        />
                    )}
                </div>
                <div className={`${styles.logo} ${montez.className}`}>
                    <p>Giusy Gandolfo</p>
                </div>

                <nav
                    key="menuMobile"
                    className={`${styles.navigation} ${
                        isMenuMobileOpen && styles.navigation_mobile
                    } `}
                >
                    <ul className={styles.list}>
                        <li className={styles.list_item}>
                            <Link
                                href="#about"
                                className={styles.list_link}
                                onClick={handleMenuMobile}
                            >
                                about
                            </Link>
                        </li>
                        <li className={styles.list_item}>
                            <Link
                                href="#works"
                                className={styles.list_link}
                                onClick={handleMenuMobile}
                            >
                                works
                            </Link>
                        </li>
                        <li className={styles.list_item}>
                            <Link
                                href="#contact"
                                className={styles.list_link}
                                onClick={handleMenuMobile}
                            >
                                contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
