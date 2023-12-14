import styles from "./Main.module.scss";

import { Introduction } from "./Introduction/Introduction";
import { About } from "./About/About";
import { Works } from "./Works/Works";
import { Contact } from "./Contact/Contact";
export const Main = () => {
    return (
        <main className={styles.main_container}>
            <Introduction />
            <About />
            <Works />
            <Contact />
        </main>
    );
};
