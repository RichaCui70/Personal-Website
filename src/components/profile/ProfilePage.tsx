import styles from "@/styles/profile/ProfilePage.module.css"
import Image from "next/image"

export default function ProfilePage() {
    return (
        <section className={styles.container}>
            <h2>About Me.</h2>
            <div className={styles.biographyContainer}>
                <div className={styles.profilePhoto}>
                    <Image src="/pfp/richardcui.png" fill alt="Richard Cui's profile picture" className={styles.profilePhoto}  />
                </div>
                <div className={styles.biography}>
                    <h3>Hello!</h3>
                    <div>
                    <p>My name is Richard! I&apos;m a computer science student at the University of Guelph, minoring in mathematics and statistics. I&apos;m a residence assistant there as well, where you&apos;ll catch me running some community events and creating some cool connections with first year students! A little more about me, I...</p>
                    <ul>
                        <li>Impulsively sign up for marathons (next one: Toronto Waterfront Marathon on Oct 20th)</li>
                        <li>Love listening to music. I&apos;m pretty open to any type of music, but currently edm is my favorite</li>
                        <li>Have gotten into reading recently. My current read is Dataclysm by Christian Rudder</li>
                        <li>Recently visited Vancouver, so I&apos;m a self-proclaimed “avid” traveler</li>
                        <li>Used to play junior hockey until the winter &apos;24 semester. Now that time is spent running or at the gym</li>
                    </ul>
                    </div>
                    <p>Anyways, check out what I&apos;ve been up to recently!</p>
                </div>
            </div>
            <div className={styles.experienceSection}>
                <ExperienceCard title="Full-Stack Developer" date="September 2024 - Present" company="TAMVOES Health Inc." logo="/icons/logos/Tamvoes.png" alt="Tamvoes logo" background="/photos/backgroundBlurb/vancouver.jpg" />
                <ExperienceCard title="Full-Stack Developer" date="September 2024 - Present" company="TAMVOES Health Inc." logo="/icons/logos/Tamvoes.png" alt="Tamvoes logo" background="/photos/backgroundBlurb/vancouver.jpg" />
                <ExperienceCard title="Full-Stack Developer" date="September 2024 - Present" company="TAMVOES Health Inc." logo="/icons/logos/Tamvoes.png" alt="Tamvoes logo" background="/photos/backgroundBlurb/vancouver.jpg" />
                <ExperienceCard title="Full-Stack Developer" date="September 2024 - Present" company="TAMVOES Health Inc." logo="/icons/logos/Tamvoes.png" alt="Tamvoes logo" background="/photos/backgroundBlurb/vancouver.jpg" />
                <ExperienceCard title="Full-Stack Developer" date="September 2024 - Present" company="TAMVOES Health Inc." logo="/icons/logos/Tamvoes.png" alt="Tamvoes logo" background="/photos/backgroundBlurb/vancouver.jpg" />

            </div>
        </section>
    )
}

function ExperienceCard({title, date, company, logo, alt, background}: {title: string, date: string, company: string, logo: string, alt: string, background: string}) {
    return (
        <div className={styles.experienceContainer} style={{backgroundImage: `url('${background}')`}} >
            <div className={styles.titleContainer}>
                <h3>{title}</h3>
                <div style={{fontSize: "12px"}}>
                    <p>{date}</p>
                    <p>{company}</p>
                </div>
            </div>
            <div className={styles.logoContainer}>
                <Image src={logo} alt={alt} fill />
            </div>
        </div>
    )
}