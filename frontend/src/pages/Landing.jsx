import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import LogoStrips from "@/components/site/LogoStrips";
import Stats from "@/components/site/Stats";
import Overview from "@/components/site/Overview";
import Audience from "@/components/site/Audience";
import Curriculum from "@/components/site/Curriculum";
import Faculty from "@/components/site/Faculty";
import VideoShowcase from "@/components/site/VideoShowcase";
import JobPlacement from "@/components/site/JobPlacement";
import Testimonials from "@/components/site/Testimonials";
import Certificate from "@/components/site/Certificate";
import FAQ from "@/components/site/FAQ";
import ApplyCTA from "@/components/site/ApplyCTA";
import Footer from "@/components/site/Footer";
import StickyMobileCTA from "@/components/site/StickyMobileCTA";
import PopupForm from "@/components/site/PopupForm";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="bg-ink">
      <Navbar />
      <Hero />
      <LogoStrips />
      <Stats />
      <Overview />
      <Audience />
      <Curriculum />
      <VideoShowcase />
      <Faculty />
      <JobPlacement />
      <Testimonials />
      <Certificate />
      <FAQ />
      <ApplyCTA />
      <Footer />
      <StickyMobileCTA />
      <PopupForm />
    </main>
  );
}
