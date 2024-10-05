import styles from "@/styles/projects/ProjectsPage.module.css";

export default function ProjectsPage() {
  return (
    <div className={styles.container} id="projects">
      <h2>Projects.</h2>
      <div className={styles.projectContainer}>
        <Project
          title="LINCS Dashboard"
          subtitle="NextJS, TypeScript, NextUI, Tailwind Jest, Docker, Git"
          photo="/photos/projects/Dashboard.png"
        />
        <Project
          title="RLS Shift Hub"
          subtitle="Django, Python, Javascript, SQL, Pandas"
          photo="/photos/projects/Shift.jpg"
        />
        <Project
          title="Mancala"
          subtitle="Java, JUnit, SwingUI, Gradle, Docker "
          photo="/photos/projects/Mancala.png"
        />
        <Project
          title="Billiards"
          subtitle="C, Python, Swig, HTML, SQL, JQuery, Bootstrap"
          photo="/photos/projects/Billiards.png"
        />
        <Project
          title="Arduino Jukebox"
          subtitle="Python, Arduino/C++, Soldering, Spotify API"
          photo="/photos/projects/Soldering.jpg"
        />
        <Project
          title="Multi-threaded Spellchecker"
          subtitle="C, PThread, Unistd,  Makefile, Docker"
          photo="/photos/projects/Spellchecker.png"
        />
      </div>
    </div>
  );
}

function Project({title, subtitle, photo}: {title: string, subtitle: string, photo: string}) {

  return (
      <div className={styles.projectCard} style={{backgroundImage: `url("${photo}")`}}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <h5 className={styles.projectSubTitle}>{subtitle}</h5>
      </div>
  )
}