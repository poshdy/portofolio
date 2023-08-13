import About from "@/components/About/About";
import Contact from "@/components/Contact";
import LandingPage from "@/components/LandingPage";
import SliderText from "@/components/LandingPage/SliderText";
import Parallax from "@/components/Parallax";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="my-12">
      <LandingPage />
      <SliderText />
      <Parallax />
      <About />  
      <Projects />
      <Contact/> 
    
    </main>
  );
}
