import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/blog/BlogCards.module.css";

export default function FeaturedBlogs({
  id,
  title,
  subtitle,
  photo,
  alt,
}: {
  id: string;
  title: string;
  subtitle: string;
  photo: string;
  alt: string;
}) {

  return (
    <div className={styles.featuredCardContainer}>
      <Image
        src={photo}
        height={320}
        width={400}
        alt={alt}
        style={{ borderRadius: "20px 20px 0px 0px" }}
      />
      <div className={styles.cardTitleContainer}>
        <div>
          <h3 className={styles.cardTitle}>{title}</h3>
          <h6 className={styles.cardSubTitle}>{subtitle}</h6>
        </div>
        <hr className={styles.cardDivider}></hr>
        <Link href={`/blog/${id}`}>
          <h3 className={`${styles.cardReadMore} hover:underline`}>Read More</h3>
        </Link>
      </div>
    </div>
  );
}
