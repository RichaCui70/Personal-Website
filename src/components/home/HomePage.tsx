import styles from "@/styles/home/HomePage.module.css"

import Image from "next/image";
import Link from "next/link"
import BackgroundBlurb from "@/components/home/BackgroundBlurb";
import Title from "@/components/home/Title";


export default function HomePage() {
    return (
        <section className="grid grid-cols-2 bg-background">
            <BackgroundBlurb width="100%" />
            <HomePageContents />
        </section>
    )
}

function HomePageContents() {
    return (
        <article className="px-16 flex flex-col place-content-center gap-16 text-default">
            <Title />
            <div className={styles.bio}>
                <p>I'm...</p>
                <ul className={styles.list}>
                    <li>A student at the University of Guelph 🦅</li>
                    <li>An aspiring UI/UX designer 🖌</li>
                    <li>A YMCA hooper 🏀</li>
                    <li>An adventure seeker 🚵‍♂️</li>
                    <li>Someone who always listens to music 🎧</li>
                    <li>Plat 2 in League 😞</li>
                </ul>
                <div className={styles.iconLayout}>
                    <Link href="https://www.linkedin.com/in/richardcui70/" target="_blank">
                        <Image src="/LinkedIn.png" width="32" height="32" alt="LinkedIn Icon - Link to Richard Cui's LinkedIn" />
                    </Link>
                    <Link href="https://github.com/RichaCui70/" target="_blank">
                        <Image src="/Github.png" width="32" height="32" alt="Github Icon - Link to Richard Cui's Github" />
                    </Link>
                </div>
            </div>
        </article>
    )
}