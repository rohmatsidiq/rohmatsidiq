"use client";

import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Durasi animasi dalam milidetik (opsional)
    });
  }, []);
  return (
    <div>
      <Hero />
      <AboutMe />
    </div>
  );
}
