import Image from "next/image";
import parse from "html-react-parser";

import BlogHeader from "@/components/blog/BlogHeader";
import styles from "@/styles/blog/BlogPage.module.css";
import posts from "@/lib/posts.json";
import { blogMetaData } from "@/lib/constants";
import { pfpMap } from "@/lib/profilePicDefinitions";

export function generateStaticParams() {
  const blogs = posts;

  const returnValue = [];

  for (const i in blogs) {
    returnValue.push({ id: i });
  }

  return returnValue;
}

export default function Page({ params }: { params: { id: number } }) {
  const { title, date, banner, content, author } = posts[
    params.id
  ] as blogMetaData;

  return (
    <>
      <BlogHeader navbarType="blogPage" title={title} photo={banner} />
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
          src={pfpMap[author]}
          alt={`${author}'s profile pic`}
          style={{ borderRadius: "50%" }}
        />
        <h5 style={{ fontWeight: 600 }}>{author}</h5>
        <h6 style={{ fontWeight: 300 }}>{date}</h6>
      </div>
      <article className={styles.contentContainer}>
        <span className={styles.content}>
          {content.map((paragraph) => (
            <>{parse(paragraph)}</>
          ))}
        </span>
      </article>
    </>
  );
}
