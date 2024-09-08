"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/home/HomePage.module.css";
import BackgroundBlurb from "@/components/home/BackgroundBlurb";
import Title from "@/components/home/Title";
import { fadeType } from "@/lib/constants";

export default function HomePage() {
  const [photo, setPhoto] = useState("");
  const [fade, setFade] = useState("in" as fadeType);

  const changePhoto = (photoLocation: string) => {
    setPhoto(photoLocation);
  };

  const changeFade = (fadeType: fadeType) => {
    setFade(fadeType);
  };

  return (
    <section className="grid grid-cols-2">
      <BackgroundBlurb photo={photo} fade={fade} />
      <HomePageContents changePhoto={changePhoto} changeFade={changeFade} />
    </section>
  );
}

function HomePageContents({
  changePhoto,
  changeFade,
}: {
  changePhoto: (photoLocation: string) => void;
  changeFade: (fadeType: fadeType) => void;
}) {
  return (
    <article className="px-16 flex flex-col place-content-center gap-16 text-default">
      <Title changePhoto={changePhoto} changeFade={changeFade} />
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
          <Link
            href="https://www.linkedin.com/in/richardcui70/"
            target="_blank"
          >
            <Image
              src="/icons/linkedin.png"
              width="32"
              height="32"
              alt="LinkedIn Icon - Link to Richard Cui's LinkedIn"
            />
          </Link>
          <Link href="https://github.com/RichaCui70/" target="_blank">
            <Image
              src="/icons/github.png"
              width="32"
              height="32"
              alt="Github Icon - Link to Richard Cui's Github"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
