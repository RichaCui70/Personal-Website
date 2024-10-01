import styles from "@/styles/projects/ProjectsPage.module.css";

export default function ProjectsPage() {
  return (
    <div className={styles.container} id="projects">
      <h2 className={styles.title}>Projects.</h2>
      <div className={styles.projectContainer}>
        <Project
          title="LINCS Dashboard"
          subtitle="NextJS, TypeScript, NextUI, Tailwind Jest, Docker, Git"
          photo="/photos/projects/Traingazing.jpg"
        />
        <Project
          title="RLS Shift Hub"
          subtitle="Django, Python, Javascript, SQL, Pandas"
          photo="/photos/projects/Traingazing.jpg"
        />
        <Project
          title="Mancala"
          subtitle="Java, JUnit, SwingUI, Gradle, Docker "
          photo="/photos/projects/Traingazing.jpg"
        />
        <Project
          title="Billiards"
          subtitle="C, Python, Swig, HTML, SQL, JQuery, Bootstrap"
          photo="/photos/projects/Traingazing.jpg"
        />
        <Project
          title="Arduino Jukebox"
          subtitle="Python, Arduino/C++, Soldering, Spotify API"
          photo="/photos/projects/Traingazing.jpg"
        />
        <Project
          title="Multi-threaded Spellchecker"
          subtitle="C, PThread, Unistd,  Makefile, Docker"
          photo="/photos/projects/Traingazing.jpg"
        />
      </div>
    </div>
  );
}

function Project({title, subtitle, photo}: {title: string, subtitle: string, photo: string}) {

  return (
      <div className={styles.projectCard} style={{backgroundImage: `url("${photo}")`}}>
          <h2 className={styles.projectTitle}>{title}</h2>
          <h5 className={styles.projectSubTitle}>{subtitle}</h5>
      </div>
  )
}