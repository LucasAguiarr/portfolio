import { Wrapper, ContainerLogo, ContainerMenuRight } from "./styles";
import elements from "../../assets/images/elements.png";

import { IoIosMenu } from "react-icons/io";
import { colors } from "../../Tools/colors";

export const Header = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
