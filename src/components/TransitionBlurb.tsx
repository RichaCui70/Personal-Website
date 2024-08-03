import Image from "next/image";

import styles from "@/styles/Miscellaneous.module.css";

export default function TransitionBlurb({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  // const transitionBlurbScale = 0.2375

  return (
    <div className={styles.transitionBlurb}>
      <Image
        src="/blurbs/transition-blurb.svg"
        alt="Orange upper portion of transition blurb"
        fill
      />
      <div className={styles.transitionBlurbTitleBlock}>
        <h1 className={styles.transitionBlurbTitle}>{title}</h1>
        <h3 className={styles.transitionBlurbSubtitle}>{subtitle}</h3>
      </div>
    </div>
  );
}

function textBlock({ title, subtitle }: { title: string; subtitle?: string }) {}
