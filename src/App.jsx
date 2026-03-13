import Hero from './sections/Hero.jsx'
import AnimatedCounter from "./components/AnimatedCounter.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
import { Analytics } from "@vercel/analytics/next"
const App = () => {
    return (
       <>
           <NavBar />
       <Hero />
        <ShowcaseSection />
           <FeatureCards />
           <ExperienceSection />
           <Contact/>
          <Footer/>
       </>
    )
}
export default App
