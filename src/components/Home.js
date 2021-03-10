import React from "react";
import ModalButton from "./Body/Body";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { HeroBg } from "./HeroSection/HeroElement";
import NavBar from "./NavBar/index";

import SideBar from "./SideBar/SideBar";

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <ModalButton />
      <Footer />
    </div>
  );
}

export default Home;

{/* <NavBar toggle={toggle} /> */ }
