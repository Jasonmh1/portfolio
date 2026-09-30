import Hero from "../sections/Hero.jsx";
import ShowcaseSection from "../sections/ShowcaseSection.jsx";
import NavBar from "../components/NavBar.jsx";
import FeatureCards from "../sections/FeatureCards.jsx";
import ExperienceSection from "../sections/ExperienceSection.jsx";
import Reviews from "../sections/Reviews.jsx";
import Contact from "../sections/Contact.jsx";
import Footer from "../sections/Footer.jsx";

const PortfolioPage = () => (
    <div className="relative z-10">
        <NavBar />
        <Hero />
        <ShowcaseSection />
        <FeatureCards />
        <ExperienceSection />
        <Reviews />
        <Contact />
        <Footer />
    </div>
);

export default PortfolioPage;
