import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Header from "../components/header";
export default function Home() {
    return (
        <div className={styles.main_container}>
            <Head>
                <title>My Portfolio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <h1>
                    Hi, my name is <span>Giusy</span>
                    <br />
                    and this is
                </h1>
                <div className={styles.container_aboutme}>
                    <Link href="/about_me">
                        <a className={styles.link_me}>Me</a>
                    </Link>
                </div>
            </main>

            <section className={styles.section_container}>
                <div className={styles.sphere}></div>
                <div className={styles.sphere}></div>
                <div className={styles.sphere}></div>
                <div className={styles.sphere}></div>
                <div className={styles.sphere}></div>
                <div className={styles.sphere}></div>
            </section>
        </div>
    );
}
