import { Wrapper, Header, SkillsIconsWrapper } from "./styles";
import { BiCheckboxSquare } from "react-icons/bi";
import { colors } from "../../Tools/colors";
import { SkillCard } from "../Cards/SkillCard";
import reactIcon from "../../assets/images/react.svg";
import reactIcon2 from "../../assets/images/react.png";
import tsIcon from "../../assets/images/ts-logo.png";
import nodejsIcon from "../../assets/images/nodejs.png";

export const Skills = () => {
  return (
    <Wrapper>
      <Header id='animation-skill'>
        <BiCheckboxSquare size={30} color={colors.cyan} />
        <h4 id='animation-skill'>Habilidades</h4>
      </Header>
      <SkillsIconsWrapper>
        <SkillCard
          id='animation-skill'
          title={"react-native"}
          skillPath={reactIcon}
          barBottomColor={colors.react}
          progressBar={100}
        />
        <SkillCard
          id='animation-skill'
          title={"ts"}
          skillPath={tsIcon}
          barBottomColor={colors.ts}
          progressBar={90}
        />
        <SkillCard
        id='animation-skill'
          title={"react"}
          skillPath={reactIcon2}
          barBottomColor={colors.react200}
          progressBar={80}
        />
        <SkillCard
        id='animation-skill'
          title={"node-js"}
          skillPath={nodejsIcon}
          barBottomColor={colors.nodejs}
          progressBar={70}
        />
      </SkillsIconsWrapper>
    </Wrapper>
  );
};
