import Image from "next/image";
import HeaderModule from "./Components/Header/Header";
import HeroModule from "./Components/Hero/Hero"
import InterestModule from "./Components/Intereses/intereses"

export default function Home() {
  return (
    <>
    <HeaderModule />
    <HeroModule />
    <InterestModule />
    </>
  );
}
