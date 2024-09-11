import MyNavBar from "@/components/navbar/NavBar";
import { pageType } from "@/lib/constants";
import styles from "@/styles/blog/BlogLandingPage.module.css";

export default function BlogHeader({ navbarType, title }: { navbarType: pageType, title: string }) {
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