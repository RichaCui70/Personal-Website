import styles from "@/styles/projects/ProjectsPage.module.css"

import Project from "@/components/projects/Project"

export default function ProjectsPage(){


    return (
        <div className={styles.container}>
            <Project title="LINCS Dashboard" subtitle="NextJS, TypeScript, NextUI, Tailwind Jest, Docker, Git" photo="/photos/projects/Traingazing.jpg" />
            <Project title="RLS Shift Hub" subtitle="Django, Python, Javascript, SQL, Pandas" photo="/photos/projects/Traingazing.jpg" />
            <Project title="Mancala" subtitle="Java, JUnit, SwingUI, Gradle, Docker " photo="/photos/projects/Traingazing.jpg" />
            <Project title="Billiards" subtitle="C, Python, Swig, HTML, SQL, JQuery, Bootstrap" photo="/photos/projects/Traingazing.jpg" />
            <Project title="Arduino Jukebox" subtitle="Python, Arduino/C++, Soldering, Spotify API" photo="/photos/projects/Traingazing.jpg" />
            <Project title="Multi-threaded Spellchecker" subtitle="C, PThread, Unistd,  Makefile, Docker" photo="/photos/projects/Traingazing.jpg" />
        </div>
    )
}