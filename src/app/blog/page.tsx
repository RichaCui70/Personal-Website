import MyNavBar from "@/components/navbar/NavBar";
import FeaturedBlogs from "@/components/blog/FeaturedBlogs";

import styles from "@/styles/blog/BlogLandingPage.module.css";
import RecentBlogs from "@/components/blog/RecentBlogs";
import { getSortedPostsData } from "@/lib/posts";
import { blogMetaData } from "@/lib/constants";

export default function BlogLandingPage() {
  const allPostsData = getSortedPostsData() as blogMetaData[];

  return (
    <>
      <MyNavBar page="blog" />
      <header
        className={styles.landingPageHeader}
        style={{ backgroundImage: "url('/photos/blogs/test6.jpg')" }}
      >
        <h1 className={styles.blogLandingPageTitle}>
          Hello,<br></br>welcome to the blog
        </h1>
      </header>
      <section className={styles.blogLandingPageContent}>
        <h2 className={styles.contentHeader}>Featured.</h2>
        <div className={styles.featuredContent}>
          <FeaturedBlogs
            title={allPostsData[0].title}
            subtitle={allPostsData[0].date + ' - ' + allPostsData[0].author}
            photo={allPostsData[0].photo}
            alt={allPostsData[0].alt}
          />
          <FeaturedBlogs
            title="Feed sum burds."
            subtitle="05/12/2024 - Richard Cui"
            photo="/photos/blogs/test1.jpg"
            alt="Test 2 alt"
          />
          <FeaturedBlogs
            title="Muck food."
            subtitle="12/23/2023 - Richard Cui"
            photo="/photos/blogs/test3.jpg"
            alt="Test 2 alt"
          />
        </div>
      </section>
      <section className={styles.blogLandingPageContent}>
        <h2 className={styles.contentHeader}>Recent.</h2>
        <div className={styles.recentContent}>
          <RecentBlogs
            title="Hiking for the soul."
            subtitle="09/07/2024 - Richard Cui"
            description="I love feeding birds. Feeding birds are the best. When they eat off your hand you feel great in your life. It’s because for once in your life, someone - or something - trusts you. Birds don’t understand the power us humans have. The power to take anything we want. Yet without that understanding, they’re happy. They aren’t seeking knowledge as to who we are. They’re simply enjoying what’s in front of them; the seeds in our hands. They’re happy. They’ll fly away nourished, unknowingly to have met a stranger that may have ended their lives."
            photo="/photos/blogs/test2.jpg"
            alt="Test 2 alt"
            photoPlacement="left"
          />
          <RecentBlogs
            title="Free my man Published."
            subtitle="05/12/2024 - Richard Cui"
            description="Published on Main was the most scrumptious shit I’ve ever eaten. Like no cap no kizzy what the fuck. Do not get me started on the Japanese milk pollen buns. Or the dranks. The liver was weird but I kinda fucked with it. Overall a super cool experience. "
            photo="/photos/blogs/test5.jpg"
            alt="Test 5 alt"
            photoPlacement="right"
          />
        </div>
      </section>
    </>
  );
}
