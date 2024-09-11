import MyNavBar from "@/components/navbar/NavBar";
import FeaturedBlogs from "@/components/blog/FeaturedBlogs";

import styles from "@/styles/blog/BlogLandingPage.module.css";
import RecentBlogs from "@/components/blog/RecentBlogs";
import { getSortedPostsData } from "@/lib/posts";
import { blogMetaData, pageType } from "@/lib/constants";

export default function BlogLandingPage() {
  const allPostsData = getSortedPostsData() as blogMetaData[];

  return (
    <>
      <BlogHeader navbarType="blog" title="Hello, welcome to the blog" />
      <section className={styles.blogLandingPageContent}>
        <h2 className={styles.contentHeader}>Featured.</h2>
        <div className={styles.featuredContent}>
          {allPostsData.map(
            ({ id, title, date, author, photo, alt }, index) => {
              return (
                <FeaturedBlogs
                  key={id}
                  id={id}
                  title={title}
                  subtitle={author + " - " + date}
                  photo={photo}
                  alt={alt}
                />
              );
            },
          )}
        </div>
      </section>
      <section className={styles.blogLandingPageContent}>
        <h2 className={styles.contentHeader}>Recent.</h2>
        <div className={styles.recentContent}>
          {allPostsData.map(
            ({ id, title, date, author, description, photo, alt }, index) => {
              return (
                <RecentBlogs
                  key={id}
                  id={id}
                  title={title}
                  subtitle={author + " - " + date}
                  description={description}
                  photo={photo}
                  alt={alt}
                  photoPlacement="right"
                />
              );
            },
          )}
        </div>
      </section>
    </>
  );
}

export function BlogHeader({ navbarType, title }: { navbarType: pageType, title: string }) {
  return (
    <>
      <MyNavBar page={navbarType} />
      <header
        className={styles.landingPageHeader}
        style={{ backgroundImage: "url('/photos/blogs/test6.jpg')" }}
      >
        <h1 className={styles.blogLandingPageTitle}>
          {title}
        </h1>
      </header>
    </>
  );
}
