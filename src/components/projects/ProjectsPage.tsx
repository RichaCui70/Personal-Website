'use client'

import { useEffect } from "react";

import styles from "@/styles/projects/ProjectsPage.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container} id="projects">
      <h2>Projects.</h2>
      <div className={styles.projectContainer}>
        <Project
          title="LINCS Dashboard"
          subtitle="NextJS, TypeScript, NextUI, Tailwind Jest, Docker, Git"
          photo="/photos/projects/Dashboard.png"
          animationDelay={100}
        />
        <Project
          title="RLS Shift Hub"
          subtitle="Django, Python, Javascript, SQL, Pandas"
          photo="/photos/projects/Shift.jpg"
          animationDelay={200}
        />
        <Project
          title="Mancala"
          subtitle="Java, JUnit, SwingUI, Gradle, Docker "
          photo="/photos/projects/Mancala.png"
          animationDelay={300}
        />
        <Project
          title="Billiards"
          subtitle="C, Python, Swig, HTML, SQL, JQuery, Bootstrap"
          photo="/photos/projects/Billiards.png"
          animationDelay={100}
        />
        <Project
          title="Arduino Jukebox"
          subtitle="Python, Arduino/C++, Soldering, Spotify API"
          photo="/photos/projects/Soldering.jpg"
          animationDelay={200}
        />
        <Project
          title="Multi-threaded Spellchecker"
          subtitle="C, PThread, Unistd,  Makefile, Docker"
          photo="/photos/projects/Spellchecker.png"
          animationDelay={300}
        />
      </div>
    </div>
  );
}

function Project({title, subtitle, photo, animationDelay}: {title: string, subtitle: string, photo: string, animationDelay: number}) {

  return (
      <div data-aos="fade-down" data-aos-delay={animationDelay} className={styles.projectCard} style={{backgroundImage: `url("${photo}")`}}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <h5 className={styles.projectSubTitle}>{subtitle}</h5>
      </div>
  )
}