import AboutIntro from "../components/AboutIntro";
import FeaturedProjects from "../components/Cards";
import GlobalConnections from "../components/Earth";
import LegacySection from "../components/Globe";

const About = () => {
  return (
    <div className="bg-gray-100">
      <AboutIntro />
      <LegacySection />
      <FeaturedProjects />
      <GlobalConnections />
    </div>
  );
};

export default About;
