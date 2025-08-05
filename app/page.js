import { Geist, Geist_Mono, Inter, Archivo } from "next/font/google";
import "./globals.css";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Transforming from "./components/Transforming";
import Projects from "./components/Projects";
import ServiceSection from "./components/ServiceSection";
import Connect from "./components/Connect";
import Inspire from "./components/Inspire";


export default function Home() {
  return (
    <>
    <Hero/>
    <div className="bg-[#F8EDE3]">
      <AboutUs/>
      <Transforming/>
      <Projects/>
      <ServiceSection/>
      <Connect/>
      <Inspire/>
    </div>
    </>
  );
}
