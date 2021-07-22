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
import { nav } from "../../Tools/socialMediaNavigation";

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
          <a
            id="animation-about"
            onClick={() => nav("https://www.linkedin.com/in/lucasaguiiar")}
          >
            <AiOutlineLinkedin size={30} color={colors.cyan} />
          </a>
          <a
            id="animation-about"
            onClick={() => nav("https://github.com/LucasAguiarr")}
          >
            <AiFillGithub size={30} color={colors.cyan} />
          </a>
          <a
            id="animation-about"
            // onClick={() => nav("https://github.com/LucasAguiarr")}
          >
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
          <h4 id="animation-about">Sobre</h4>
        </Header>
        <h5 id="animation-about">Conheça um pouco sobre mim</h5>
        <h6 id="animation-about">
          Estou me graduando de Análise e desenvolvimento de sistema pelo
          CESUSC. Constantemente antenado à novas tendências tecnológicas,
          qualquer tempo livre tenho o prazer de desenvolver projetos paralelos
          para aprimorar minhas habilidades.
        </h6>
        <h6 id="animation-about">
          Para aprimorar minhas habilidades fiz projetos NLW da{" "}
          <a href="https://rocketseat.com.br/">Rocketseat</a>(react,
          react-native), na <a href="https://www.udemy.com/pt/">udemy</a>
          acabei fazendo os cursos:{" "}
          <a href="https://www.udemy.com/course/curso-web/">
            web moderno
          </a>,{" "}
          <a href="https://www.udemy.com/course/curso-react-native/">
            react-native
          </a>{" "}
          e
          <a href="https://www.udemy.com/course/api-restful-de-vendas/">
            nodejs
          </a>
          (typescript com typeorm).
        </h6>
        <h6 id="animation-about">
          Nesse período atuando como desenvolvedor, já participei de quatro
          aplicativos junto a empresa que trabalho os quais me geraram muito
          conhecimento.
        </h6>
      </AboutWrapper>
    </Wrapper>
  );
};
