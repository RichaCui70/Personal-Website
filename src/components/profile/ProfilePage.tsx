'use client'

import { useEffect } from "react";

import styles from "@/styles/profile/ProfilePage.module.css";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProfilePage() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.container}>
      <h2>About Me.</h2>
      <div className={styles.biographyContainer}>
        <div data-aos="fade-down" data-aos-delay={100} className={styles.profilePhoto}>
          <Image
            src="/pfp/richardcui.png"
            fill
            alt="Richard Cui's profile picture"
            className={styles.profilePhoto}
          />
        </div>
        <div className={styles.biography}>
          <h3>Hello!</h3>
          <div>
            <p>
              My name is Richard! I&apos;m a computer science student at the
              University of Guelph, minoring in mathematics and statistics.
              I&apos;m a residence assistant there as well, where you&apos;ll
              catch me running some community events and creating some cool
              connections with first year students! A little more about me, I...
            </p>
            <ul>
              <li>
                Impulsively sign up for marathons (next one: Toronto Waterfront
                Marathon on Oct 20th)
              </li>
              <li>
                Love listening to music. I&apos;m pretty open to any type of
                music, but currently edm is my favorite
              </li>
              <li>
                Have gotten into reading recently. My current read is Dataclysm
                by Christian Rudder
              </li>
              <li>
                Recently visited Vancouver, so I&apos;m a self-proclaimed “avid”
                traveler
              </li>
              <li>
                Used to play junior hockey until the winter &apos;24 semester.
                Now that time is spent running or at the gym
              </li>
            </ul>
          </div>
          <p>Anyways, check out what I&apos;ve been up to recently!</p>
        </div>
      </div>
      {/* <div className={styles.experienceSection}>
            <ExperienceCard title="Full-Stack Developer" date="September 2024 - Present" company="TAMVOES Health Inc." logo="/icons/logos/Tamvoes.png" alt="Tamvoes logo" background="/photos/backgroundBlurb/vancouver.jpg" />

            </div> */}
      <div className={styles.timelineContainer}>
        <div className={styles.timelineLine}></div>

        <TimelineCard
          title="Line Cook"
          date="April 2022 - January 2024"
          company="Bingz"
          logo="/icons/logos/Bingz.png"
          logoWidth={48}
          alt="Bingz logo"
          top
        />
        <TimelineCard
          title="Research Assistant"
          date="May 2024 - August 2024"
          company="LINCS Project"
          logo="/icons/logos/Lincs.png"
          alt="Lincs logo"
        />
        <TimelineCard
          title="Senior Resident Assistant"
          date="August 2024 - Present"
          company="Student Housing Services"
          logo="/icons/logos/Housing.png"
          logoWidth={24}
          alt="Student Housing Services logo"
          top
        />
        <TimelineCard
          title="Teaching Assistant"
          date="September 2024 - Present"
          company="CIS*2750 Software Systems Development and Integration"
          logo="/icons/logos/Guelph.png"
          alt="University of Guelph insignia logo"
        />
        <TimelineCard
          title="Full-Stack Developer"
          date="September 2024 - Present"
          company="TAMVOES Health Inc."
          logo="/icons/logos/Tamvoes.png"
          alt="Tamvoes logo"
          top
        />
      </div>
    </section>
  );
}

function TimelineCard({
  title,
  date,
  company,
  logo,
  logoWidth,
  alt,
  top = false,
}: {
  title: string;
  date: string;
  company: string;
  logo: string;
  logoWidth?: number;
  alt: string;
  top?: boolean;
}) {
  return (
    <div
      data-aos="flip-left"
      className={`${styles.boxContainer} ${top ? styles.boxTop : styles.boxBottom}`}
    >
      <span className={styles.date} />
      <div className={styles.experienceContainer}>
        <div className={styles.titleContainer}>
          <h3>{title}</h3>
          <div style={{ fontSize: "10px" }}>
            <p>{date}</p>
            <p>{company}</p>
          </div>
        </div>
        <Image
          style={{ position: "absolute", right: "8px", bottom: "8px" }}
          height={48}
          width={logoWidth ? logoWidth : 32}
          src={logo}
          alt={alt}
        />
      </div>
    </div>
  );
}
