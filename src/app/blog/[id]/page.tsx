import Image from "next/image";

import BlogHeader from "@/components/blog/BlogHeader";
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
  const { title, date, photo, content, author, profilePic } = buffer;

  return (
    <>
      <BlogHeader navbarType="blogPage" title={title} />
      <div className={styles.dividerContainer}>
        <Image
          src="/icons/ChevronLeft.png"
          alt="Chevron left"
          width={24}
          height={24}
        />
        <hr className={styles.divider} />
        <Image
          src="/icons/ChevronRight.png"
          alt="Chevron right"
          width={24}
          height={24}
        />
      </div>
      <div className={styles.blogMetaDataContainer}>
        <Image
          width={48}
          height={48}
          src={profilePic}
          alt={`${author}'s profile pic`}
          style={{ borderRadius: "50%" }}
        />
        <h5 style={{ fontWeight: 600 }}>{author}</h5>
        <h6 style={{ fontWeight: 300 }}>{date}</h6>
      </div>
      <article className={styles.contentContainer}>
        <span className={styles.content}>{content}</span>
      </article>
    </>
  );
}
