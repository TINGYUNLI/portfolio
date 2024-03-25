import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectsSections from "./components/ProjectSection/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-bgColor">
      <Navbar />
      <div className="container mt-24 mx-auto px-10 lg:px-7 md:px-2 sm:px-3 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSections />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
