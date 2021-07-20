import {
  Wrapper,
  BgWrapper,
  ProfileIconWrapper,
  ProfileICon,
  UserName,
  SocialIconsWrapper,
  AboutWrapper,
  Header,
} from "./styles";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { BiCheckboxSquare } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { colors } from "../../Tools/colors";
import profile from "../../assets/images/profile2.jpg";
import cityOne from "../../assets/images/cityOne.svg";
import cityTwo from "../../assets/images/cityTwo.svg";

export const About = () => {
  return (
    <Wrapper>
      <BgWrapper>
        <img id="animation-about" src={cityTwo} alt="background-circle" />
        <img id="animation-about" src={cityOne} alt="background-circle" />
      </BgWrapper>
      <ProfileIconWrapper>
        <ProfileICon>
          <img id="animation-about" src={profile} alt="profile" />
        </ProfileICon>
        <UserName>Lucas Aguiar</UserName>
        <SocialIconsWrapper>
          <a id="animation-about" href="/">
            <AiOutlineLinkedin size={30} color={colors.cyan} />
          </a>
          <a id="animation-about" href="/">
            <AiFillGithub size={30} color={colors.cyan} />
          </a>
          <a id="animation-about" href="/">
            <HiOutlineMail size={30} color={colors.cyan} />
          </a>
        </SocialIconsWrapper>
      </ProfileIconWrapper>

      <AboutWrapper>
        <Header>
          <BiCheckboxSquare
            id="animation-about"
            size={30}
            color={colors.cyan}
          />
          <h4 id='animation-about'>Sobre</h4>
        </Header>
        <h5 id="animation-about">Conheça um pouco sobre mim</h5>
        <h6 id="animation-about">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nemo
          laborum consequatur nostrum placeat, eos, error molestias labore,
          corporis facilis temporibus. Nobis mollitia maiores, quae autem
          voluptate cupiditate exercitationem beatae.
        </h6>
        <h6 id="animation-about">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nemo
          laborum consequatur nostrum placeat, eos, error molestias labore.
        </h6>
        <h6 id="animation-about">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nemo
          laborum consequatur nostrum placeat, eos, error molestias labore.
        </h6>
      </AboutWrapper>
    </Wrapper>
  );
};
