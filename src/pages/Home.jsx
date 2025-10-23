import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
// import Clients from "../components/home/Clients";
import Associates from "../components/home/Associates";
import Testimonials from "../components/common/Testimonials";
import CTA from "../components/home/CTA";
import Contact from "../components/home/Contact";
export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Projects />
            {/* <Clients /> */}
            <Testimonials />
            <Associates />
            
            <CTA />
            <Contact />
        </>
    );
}
