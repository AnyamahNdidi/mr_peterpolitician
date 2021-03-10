import React from "react";
// import TransitionsModal from "../ModalComponents/Modal";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SideBarElement";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              Meet Designers
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>
              Meet Mobile Devs
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Meet Web Devs
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap></SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};
export default SideBar;
