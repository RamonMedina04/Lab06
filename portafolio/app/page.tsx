import Image from "next/image";
import HeaderModule from "./Components/Header/Header";
import HeroModule from "./Components/Hero/Hero"
import InterestModule from "./Components/Intereses/intereses"
import CVModule from "./Components/CV/cv"
import ProyectosModule from "./Components/Proyectos/proyectos"
import ContactModule from "./Components/Contact/contact"
import FooterModule from "./Components/Footer/footer"

export default function Home() {
  return (
    <>
    <HeaderModule />
    <HeroModule />
    <InterestModule />
    <CVModule />
    <ProyectosModule />
    <ContactModule />
    <FooterModule />
    </>
  );
}
