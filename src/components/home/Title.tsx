"use client";

import { useEffect, useCallback } from "react";

import Typed from "typed.js";

import styles from "@/styles/home/HomePage.module.css";
import { getTitles, getPhotos } from "@/lib/mediaDefinitions";
import { fadeType } from "@/lib/constants";

export default function Title({
  changePhoto,
  changeFade,
}: {
  changePhoto: (photoLocation: string) => void;
  changeFade: (fadeType: fadeType) => void;
}) {
  const photos = getPhotos();

  const changePhotoWrapper = useCallback(
    (arrayPos: number) => {
      changePhoto(photos[arrayPos]);
      changeFade("in");
    },
    [photos],
  );

  const changeFadeType = useCallback(() => {
    changeFade("out");
  }, []);

  useEffect(() => {
    const typed = new Typed("#toBeTyped", {
      strings: getTitles(),
      typeSpeed: 50,
      startDelay: 0,
      backSpeed: 50,
      backDelay: 1000,
      preStringTyped: changePhotoWrapper,
      onStringTyped: changeFadeType,
      smartBackspace: false,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <h2 className={styles.title}>Hello, I'm</h2>
      <div className={styles.subTitle}>
        <span id="toBeTyped">&nbsp;</span>
      </div>
    </div>
  );
}
