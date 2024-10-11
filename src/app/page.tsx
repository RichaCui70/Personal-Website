import MyNavBar from "@/components/navbar/NavBar";
import HomePage from "@/components/home/HomePage";
import ProjectsPage from "@/components/projects/ProjectsPage";
import ProfilePage from "@/components/profile/ProfilePage"

export default function Home() {
  return (
    <>
      <MyNavBar page="home" />
      <HomePage />
      <ProjectsPage />
      <ProfilePage />
    </>
  );
}