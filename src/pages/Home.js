import React,{useState} from "react";
import { InfoSection, Pricing, HeroSection } from "../components";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import SideBar from "../components/SideBar";
import NavBar from "../components/navBar/NavBar";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);


    const toggle= ()=>{
        setIsOpen(!isOpen);
    }


  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
}
