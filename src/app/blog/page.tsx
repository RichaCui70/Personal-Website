import FeaturedBlogs from "@/components/blog/FeaturedBlogs";
import BlogHeader from "@/components/blog/BlogHeader";
import styles from "@/styles/blog/BlogLandingPage.module.css";
import RecentBlogs from "@/components/blog/RecentBlogs";
import { getSortedPostsData } from "@/lib/posts";
import { blogMetaData } from "@/lib/constants";

export default function BlogLandingPage() {
  const allPostsData = getSortedPostsData() as blogMetaData[];

  return (
    <>
      <BlogHeader navbarType="blog" title="Hello, welcome to the blog" photo="/photos/blogs/16-9/home.jpg" />
      <section className={styles.blogLandingPageContent}>
        <h2 className={styles.contentHeader}>Featured.</h2>
        <div className={styles.featuredContent}>
          {allPostsData.map(
            ({ id, title, date, author, thumbnail, alt }, index) => {
              return (
                <FeaturedBlogs
                  key={id}
                  id={id}
                  title={title}
                  subtitle={author + " - " + date}
                  photo={thumbnail}
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
            ({ id, title, date, author, description, banner, alt }, index) => {
              return (
                <RecentBlogs
                  key={id}
                  id={id}
                  title={title}
                  subtitle={author + " - " + date}
                  description={description}
                  photo={banner}
                  alt={alt}
                  photoPlacement={(index % 2 === 1) ? "right" : "left"}
                />
              );
            },
          )}
        </div>
      </section>
    </>
  );
}
