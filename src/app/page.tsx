import MyNavBar from "@/components/navbar/NavBar";
import HomePage from "@/components/home/HomePage";
import ProjectsPage from "@/components/projects/ProjectsPage";
import ProfilePage from "@/components/profile/ProfilePage"
import OuttakesPage from "@/components/outtakes/OuttakesPage"

export default function Home() {
  return (
    <>
      <MyNavBar page="home" />
      <HomePage />
      <ProjectsPage />
      <ProfilePage />
      <OuttakesPage />
    </>
  );
}