import { Wrapper, Header, ProjectsWrapper } from "./styles";
import { BiCheckboxSquare } from "react-icons/bi";
import { colors } from "../../Tools/colors";
import { ProjectCard } from "../Cards/ProjectCard";

import nuBankBanner from "../../assets/images/nubank.jpg";
import { nav } from "../../Tools/socialMediaNavigation";

export const Projects = () => {
  return (
    <Wrapper>
      <Header>
        <BiCheckboxSquare
          id="animation-project"
          size={30}
          color={colors.cyan}
        />
        <h4 id="animation-project">Projetos</h4>
      </Header>
      <ProjectsWrapper id="animation-project">
        <ProjectCard
          title={"App - Elas"}
          subtitle={
            "lorem ipsum dolor sit amet, consectetur, lorem ipsum dolor sit amet, consectetur"
          }
          projectPath={nuBankBanner}
          tags={["typescript", "react-native", "expo", "styled-components"]}
          onClick={() => {
            nav("https://github.com/LucasAguiarr/elas-app");
          }}
        />
        <ProjectCard
          title={"App - Elas"}
          subtitle={
            "lorem ipsum dolor sit amet, consectetur, lorem ipsum dolor sit amet, consectetur"
          }
          projectPath={nuBankBanner}
          tags={["typescript", "react-native", "expo", "styled-components"]}
          onClick={() => {
            nav("https://github.com/LucasAguiarr/elas-app");
          }}
        />
        <ProjectCard
          title={"App - Elas"}
          subtitle={
            "lorem ipsum dolor sit amet, consectetur, lorem ipsum dolor sit amet, consectetur"
          }
          projectPath={nuBankBanner}
          tags={["typescript", "styled-components", "expo", "react-native"]}
          onClick={() => {
            nav("https://github.com/LucasAguiarr/elas-app");
          }}
        />
      </ProjectsWrapper>
    </Wrapper>
  );
};
