import { Wrapper, Title } from "./styles";

interface ISkillCardProps {
  title: string;
  barBottomColor: string;
  skillPath: string;
  id?: string;
}

export const SkillCard = ({
  title,
  skillPath,
  barBottomColor,
  id,
}: ISkillCardProps) => {
  return (
    <Wrapper id={id} barBottomColor={barBottomColor}>
      <Title>{title}</Title>
      <img src={skillPath} alt="skill" />
    </Wrapper>
  );
};
