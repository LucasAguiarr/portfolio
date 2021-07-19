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
      <Header>
        <BiCheckboxSquare size={30} color={colors.cyan} />
        <h4>Skills</h4>
      </Header>
      <SkillsIconsWrapper>
        <SkillCard
          title={"react-native"}
          skillPath={reactIcon}
          barBottomColor={colors.react}
        />
        <SkillCard
          title={"ts"}
          skillPath={tsIcon}
          barBottomColor={colors.ts}
        />
        <SkillCard
          title={"react"}
          skillPath={reactIcon2}
          barBottomColor={colors.react200}
        />
        <SkillCard
          title={"node-js"}
          skillPath={nodejsIcon}
          barBottomColor={colors.nodejs}
        />
      </SkillsIconsWrapper>
    </Wrapper>
  );
};
