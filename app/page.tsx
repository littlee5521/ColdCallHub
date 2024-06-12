import Image from "next/image";
import LandingHero from "./ui/landingpage/hero";
import HeroFeatures from "./ui/landingpage/features";
import HowItWorks from "./ui/landingpage/howitworks";
import PerformanceTrackingLandingPage from "./ui/landingpage/peformancetracking";

export default function Home() {
  return (
    <main className=" m-auto max-w-screen-3xl">
      <LandingHero />
      <HeroFeatures />
      <HowItWorks />
      <PerformanceTrackingLandingPage />
    </main>
  );
}
