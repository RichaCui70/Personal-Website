import Image from "next/image";

import { BlogHeader } from "../page";

import styles from "@/styles/blog/BlogPage.module.css";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { blogMetaData } from "@/lib/constants";

export function generateStaticParams() {
  const allPostsData = getSortedPostsData() as blogMetaData[];

  return allPostsData.map((post) => {
    return { id: post.id };
  });
}

export default function Page({ params }: { params: { id: string } }) {
  const buffer = getPostData(params.id) as blogMetaData;
  const { title, date, photo, content, author } = buffer;

  return (
    <>
      <BlogHeader navbarType="blogPage" title={title} />
      <div className={styles.dividerContainer}>
        <div
          className={styles.chevronContainer}
          style={{ backgroundColor: "#FF8965" }}
        >
          {/* <Image
            src="/blurbs/chevron-left.svg"
            alt="Chevron left"
            fill
          /> */}
        </div>
        <hr className={styles.divider} />
        <div
          className={styles.chevronContainer}
          style={{ backgroundColor: "#FF8965" }}
        >
          {/* <Image
            src="/blurbs/chevron-right.svg"
            alt="Chevron right"
            fill
          /> */}
        </div>
      </div>
      <div className={styles.blogMetaDataContainer}>
        <div
          className={styles.profilePhotoContainer}
          style={{ backgroundColor: "#FF8965" }}
        >
          {/* <Image /> */}
        </div>
        <h5 style={{ fontWeight: 600 }}>{author}</h5>
        <h6 style={{ fontWeight: 300 }}>{date}</h6>
      </div>
      <article className={styles.contentContainer}>
        <p className={styles.content}>{content}</p>
      </article>
    </>
  );
}
