import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
import Clients from "../components/home/Clients";
import Testimonials from "../components/common/Testimonials";
import CTA from "../components/home/CTA";
import Contact from "../components/home/Contact";
import Layout from "../components/layouts/Layout";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Clients />
            <Testimonials />
            <CTA />
            <Contact />
        </Layout>
    );
}
