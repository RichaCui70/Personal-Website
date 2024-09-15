import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/blog/BlogCards.module.css";

export default function RecentBlogs({
  id,
  title,
  subtitle,
  description,
  photo,
  alt,
  photoPlacement,
}: {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  photo: string;
  alt: string;
  photoPlacement: "left" | "right";
}) {
  return (
    <div className={styles.recentCardContainer}>
      {photoPlacement === "left" && (
        <Image src={photo} alt={alt} width={632} height={356} />
      )}
      <div
        className={styles.cardTitleContainer}
        style={{ padding: "0px", maxWidth: "570px" }}
      >
        <div>
          <h3 className={styles.cardTitle}>{title}</h3>
          <h6 className={styles.cardSubTitle}>{subtitle}</h6>
        </div>
        <p className={styles.cardDescription}>{description}</p>
        <Link href={`/blog/${id}`}>
          <h3 className={`${styles.cardReadMore} hover:underline`}>Read More</h3>
        </Link>
      </div>
      {photoPlacement === "right" && (
        <Image src={photo} alt={alt} width={632} height={356} />
      )}
    </div>
  );
}
