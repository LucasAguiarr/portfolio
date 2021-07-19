import { Button } from "../../Button";
import { Wrapper, Title, Subtitle, TagWrapper, TagText } from "./styles";

interface ISkillCardProps {
  title: string;
  subtitle: string;
  projectPath: string;
  tags: string[];
  onClick?: () => void;
}

export const ProjectCard = ({
  title,
  subtitle,
  projectPath,
  tags,
  onClick
}: ISkillCardProps) => {
  return (
    <Wrapper>
      <img src={projectPath} alt="skill" />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <TagWrapper>
        {tags?.map((tag) => {
          console.log(tag);

          return <TagText>{tag}</TagText>;
        })}
      </TagWrapper>
      <Button label={"Acessar"} onClick={onClick} />
    </Wrapper>
  );
};
