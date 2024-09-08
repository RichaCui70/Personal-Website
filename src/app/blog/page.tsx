import MyNavBar from "@/components/navbar/NavBar";

import styles from "@/styles/blog/BlogLandingPage.module.css"

export default function BlogLandingPage(){
    return (
        <>
            <MyNavBar page="blog" />
            <header className={styles.landingPageHeader} style={{backgroundImage: "url('/photos/blogs/test6.jpg')"}}>
                <h1 className={styles.blogLandingPageTitle}>Hello,<br></br>welcome to the blog</h1>
            </header>
            <section className={styles.blogLandingPageContent}>
                <h2 className={styles.contentHeader}>Featured.</h2>
            </section>
        </>
    )
}