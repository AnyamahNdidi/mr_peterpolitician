import React, { useState, useEffect } from "react";
import { FaBars, FaMagento } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBar.element";
import { BrowserRouter as Router } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);

  const changeNav = () => {
    if (window.scrolY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <FaMagento style={{ marginRight: "10px" }} />
            HKT
          </NavLogo>
          <MobileIcons onClick={toggle}>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">Bio</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="discover">Education History</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="services">Projects</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="services">Awards</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/signin">Sign-In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
