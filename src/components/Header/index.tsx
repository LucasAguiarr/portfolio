import { Wrapper, Nav, ContainerLogo, ContainerMenuRight } from "./styles";
import elements from "../../assets/images/elements.png";

import { IoIosMenu } from "react-icons/io";
import { colors } from "../../Tools/colors";
import { useState } from "react";
import { useEffect } from "react";

export const Header = () => {
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      return setScrollNav(true);
    }
    setScrollNav(false);
  };

  return (
    <Wrapper>
      <Nav scrollNav={scrollNav}>
        <ContainerLogo>
          <img src={elements} alt="Logo" />
          <a href="/">
            <IoIosMenu color={colors.black200} size={40} />
          </a>
        </ContainerLogo>
        <ContainerMenuRight>
          <a href="/">About</a>
          <a href="/">Skills</a>
          <a href="/">projects</a>
          <a href="/">Contact</a>
        </ContainerMenuRight>
      </Nav>
    </Wrapper>
  );
};
