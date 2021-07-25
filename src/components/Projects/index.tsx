import { Wrapper, Header, ProjectsWrapper } from "./styles";
import { BiCheckboxSquare } from "react-icons/bi";
import { colors } from "../../Tools/colors";
import { ProjectCard } from "../Cards/ProjectCard";

import elas from "../../assets/images/elas.png";
import letmeask from "../../assets/images/letmeask.svg";
import plantmanager from "../../assets/images/plantmanager.png";


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
          title={"Elas"}
          subtitle={
            "Projeto de alerta para vítimas de abuso"
          }
          projectPath={elas}
          tags={["typescript", "react-native", "expo", "styled-components"]}
          onClick={() => {
            nav("https://github.com/LucasAguiarr/elas-expo");
          }}
        />
        <ProjectCard
          title={"Plantmanager"}
          subtitle={
            "Projeto de notificações para regar as plantas"
          }
          projectPath={plantmanager}
          tags={["typescript", "react-native", "expo", "styled-components"]}
          onClick={() => {
            nav("https://github.com/LucasAguiarr/plantmanager");
          }}
        />
        <ProjectCard
          title={"Letmeask"}
          subtitle={
            "Projeto para criacao de salas para perguntas e respostas"
          }
          projectPath={letmeask}
          tags={["typescript", "sass", "react"]}
          onClick={() => {
            nav("https://github.com/LucasAguiarr/letmeask");
          }}
        />
      </ProjectsWrapper>
    </Wrapper>
  );
};
