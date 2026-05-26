import Navbar from "@/components/site/Navbar";
import MarqueeBanner from "@/components/site/MarqueeBanner";
import Hero from "@/components/site/Hero";
import FacultyLogos from "@/components/site/FacultyLogos";
import Stats from "@/components/site/Stats";
import ToolsMarquee from "@/components/site/ToolsMarquee";
import Overview from "@/components/site/Overview";
import Audience from "@/components/site/Audience";
import Curriculum from "@/components/site/Curriculum";
import VideoShowcase from "@/components/site/VideoShowcase";
import Faculty from "@/components/site/Faculty";
import Testimonials from "@/components/site/Testimonials";
import Certificate from "@/components/site/Certificate";
import EpsilonExperience from "@/components/site/EpsilonExperience";
import FAQ from "@/components/site/FAQ";
import ApplyCTA from "@/components/site/ApplyCTA";
import Footer from "@/components/site/Footer";
import StickyMobileCTA from "@/components/site/StickyMobileCTA";
import PopupForm from "@/components/site/PopupForm";
import ScrollProgress from "@/components/site/ScrollProgress";
import RevealOnScroll from "@/components/site/RevealOnScroll";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="bg-navy-deep">
      <ScrollProgress />
      <RevealOnScroll />
      <MarqueeBanner />
      <Navbar />
      <Hero />
      <FacultyLogos />
      <Stats />
      <ToolsMarquee />
      <Overview />
      <Audience />
      <Curriculum />
      <VideoShowcase />
      <Faculty />
      <Testimonials />
      <Certificate />
      <EpsilonExperience />
      <FAQ />
      <ApplyCTA />
      <Footer />
      <StickyMobileCTA />
      <PopupForm />
    </main>
  );
}
