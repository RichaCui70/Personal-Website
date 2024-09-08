import styles from "@/styles/projects/ProjectsPage.module.css"

export default function Project({title, subtitle, photo}: {title: string, subtitle: string, photo: string}) {

    return (
        <div className={styles.projectCard} style={{backgroundImage: `url("${photo}")`}}>
            <h2 className={styles.projectTitle}>{title}</h2>
            <h5 className={styles.projectSubTitle}>{subtitle}</h5>
        </div>
    )
}