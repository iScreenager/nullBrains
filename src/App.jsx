import { BlogSection } from "./components/BlogSection/BlogSection";
import { CompanyLogos } from "./components/CompanyLogos/CompanyLogos";
import { FeaturesSection } from "./components/FeaturesSection/FeaturesSection";
import Footer from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import { TeamSection } from "./components/TeamSection/TeamSection";
import { WhyChooseUs } from "./components/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <NavBar />
      <Hero />
      <CompanyLogos />
      <WhyChooseUs />
      <FeaturesSection />
      <TeamSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
