import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBarWrapper,
  SideBarRoute,
  SideBarMenu,
  SideBtnWrap,
} from "./SideBar.Element";


export default function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink onClick={toggle} to="about">
            About
          </SideBarLink>
          <SideBarLink onClick={toggle} to="school">
            School
          </SideBarLink>{" "}
          <SideBarLink onClick={toggle} to="ui/ux">
            UI/UX
          </SideBarLink>{" "}
          <SideBarLink onClick={toggle} to="services">
            Services
          </SideBarLink>{" "}
          <SideBarLink onClick={toggle} to="testing">
            Testing
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/sign-up">Sign Up</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
}
