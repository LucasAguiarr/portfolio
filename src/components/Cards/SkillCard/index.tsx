import { Wrapper, Title, ProgressBar } from "./styles";

interface ISkillCardProps {
  title: string;
  barBottomColor: string;
  skillPath: string;
  id?: string;
  progressBar: number;
}

export const SkillCard = ({
  title,
  skillPath,
  barBottomColor,
  id,
  progressBar,
}: ISkillCardProps) => {
  return (
    <Wrapper id={id}>
      <Title>{title}</Title>
      <img src={skillPath} alt="skill" />
      <ProgressBar barBottomColor={barBottomColor} progressBar={progressBar} />
    </Wrapper>
  );
};
