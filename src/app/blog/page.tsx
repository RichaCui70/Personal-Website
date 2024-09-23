import posts from "@/lib/posts.json"
import FeaturedBlogs from "@/components/blog/FeaturedBlogs";
import BlogHeader from "@/components/blog/BlogHeader";
import styles from "@/styles/blog/BlogLandingPage.module.css";
import RecentBlogs from "@/components/blog/RecentBlogs";
import { blogMetaData, pageType } from "@/lib/constants";

export default function BlogLandingPage() {

  const blogs = posts as blogMetaData[]

  return (
    <>
      <BlogHeader navbarType="blog" title="Hello, welcome to the blog" photo="/photos/blogs/test1.jpg" />
      <section className={styles.blogLandingPageContent}>
        <h2 className={styles.contentHeader}>Featured.</h2>
        <div className={styles.featuredContent}>
          {blogs.map(
            ({ title, date, author, photo, alt }, index) => {
              return (
                <FeaturedBlogs
                  key={title}
                  id={index}
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
          {blogs.map(
            ({ title, date, author, description, photo, alt }, index) => {
              return (
                <RecentBlogs
                  key={title}
                  id={index}
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
