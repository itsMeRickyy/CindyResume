import Navbar from "../Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import EducationSection from "./EducationSection";
import Footer from "../Footer/Footer";

const HomeComponents = () => {
  return (
    <>
      <div className="md:mx-10 lg:mx-16 xl:mx-28">
        <Navbar />
        <HeroSection />
        <EducationSection />
        <ProjectSection />
      </div>
      <Footer />
    </>
  );
};

export default HomeComponents;
