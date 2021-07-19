import { Wrapper, Title } from "./styles";

interface ISkillCardProps {
  title: string;
  barBottomColor: string;
  skillPath: string;
}

export const SkillCard = ({
  title,
  skillPath,
  barBottomColor,
}: ISkillCardProps) => {
  return (
    <Wrapper barBottomColor={barBottomColor}>
      <Title>{title}</Title>
        <img src={skillPath} alt="skill" />
    </Wrapper>
  );
};
