import AboutHero from "../components/AboutHero";
import Approch from "../components/Approch";
import Awards from "../components/Awards";
import Connect from "../components/Connect";
import Inspire from "../components/Inspire";
import ServiceSection from "../components/ServiceSection";
import Team from "../components/Team";
import WhyUs from "../components/WhyUs";

export default function about () {
    return(
        <>
        <div className="bg-[#F8EDE3]">
            <AboutHero/>
            <Approch/>
            <Team/>
            <ServiceSection/>
            <WhyUs/>
            <Awards/>
            <Connect/>
            <Inspire/>
        </div>
        </>
    )
}