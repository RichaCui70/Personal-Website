import MyNavBar from "@/components/navbar/NavBar";
import HomePage from "@/components/home/HomePage";
import ProjectsPage from "@/components/projects/ProjectsPage";

export default function Home() {
  return (
    <>
      <MyNavBar page="home" />
      <HomePage />
      <ProjectsPage />
    </>
  );
}

// <svg width="863" height="671" viewBox="0 0 863 671" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <rect width="863" height="671" fill="url(#pattern0_130_338)" />
//   <defs>
//     <pattern id="pattern0_130_338" patternContentUnits="objectBoundingBox" width="1" height="1" fill="green">
//       <use transform="matrix(0.00109649 0 0 0.00141024 0 -0.104994)" />
//     </pattern>
//   </defs>
// </svg>
