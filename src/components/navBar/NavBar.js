import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {Button } from '../../globalStyles';

import {
  NavBarContainer,
  NavLogo,
  NavIcon,
  Nav,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,

  NavItemBtn,
  NavBtnLink
} from "./NavBar.elements";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
    
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = ()=>setClick(false);

  const showButton= ()=>{
      if(window.innerWidth<=960){
          setButton(false);
      }else{
          setButton(true);
      }
  }


  useEffect(() => {
    showButton();
  }, []);

// trigger the showButton function when user resizes the window
  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavBarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              ULTIME
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products">Products</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sing-up">
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button  fontBig primary>
                      {" "}
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
