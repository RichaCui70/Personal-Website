import MyNavBar from "@/components/navbar/NavBar";
import { pageType } from "@/lib/constants";
import styles from "@/styles/blog/BlogLandingPage.module.css";

export default function BlogHeader({ navbarType, title, photo }: { navbarType: pageType, title: string, photo: string }) {
    return (
      <>
        <MyNavBar page={navbarType} />
        <header
          className={styles.landingPageHeader}
          style={{ backgroundImage: `url('${photo}')`}}
        >
          <h1 className={styles.blogLandingPageTitle}>
            {title}
          </h1>
        </header>
      </>
    );
  }