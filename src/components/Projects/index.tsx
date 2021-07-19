import { Wrapper, Header, ProjectsWrapper } from "./styles";
import { BiCheckboxSquare } from "react-icons/bi";
import { colors } from "../../Tools/colors";
import { ProjectCard } from "../Cards/ProjectCard";

import nuBankBanner from "../../assets/images/nubank.jpg";

export const Projects = () => {
  return (
    <Wrapper>
      <Header>
        <BiCheckboxSquare size={30} color={colors.cyan} />
        <h4>Projetos</h4>
      </Header>
      <ProjectsWrapper>
        <ProjectCard
          title={"App - Elas"}
          subtitle={
            "lorem ipsum dolor sit amet, consectetur, lorem ipsum dolor sit amet, consectetur"
          }
          projectPath={nuBankBanner}
          tags={[
            "typescript",
            "react-native",
            "expo",
            "styled-components",
          ]}
          onClick={() => {}}
        />
        <ProjectCard
          title={"App - Elas"}
          subtitle={
            "lorem ipsum dolor sit amet, consectetur, lorem ipsum dolor sit amet, consectetur"
          }
          projectPath={nuBankBanner}
          tags={[
            "typescript",
            "react-native",
            "expo",
            "styled-components",
          ]}
          onClick={() => {}}
        />
        <ProjectCard
          title={"App - Elas"}
          subtitle={
            "lorem ipsum dolor sit amet, consectetur, lorem ipsum dolor sit amet, consectetur"
          }
          projectPath={nuBankBanner}
          tags={[
            "typescript",
            "styled-components",
            "expo",
            "react-native",
          ]}
          onClick={() => {
            window.location.href = "https://github.com/LucasAguiarr/elas-app";
          }}
        />
      </ProjectsWrapper>
    </Wrapper>
  );
};
