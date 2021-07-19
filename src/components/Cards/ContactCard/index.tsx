import { Wrapper, Title } from "./styles";

interface ISkillCardProps {
  title: string;
  icon: any;
  onClick: () => void;
}

export const ContactCard = ({ title, icon, onClick }: ISkillCardProps) => {
  return (
    <Wrapper>
      {icon}
      <Title>{title}</Title>
    </Wrapper>
  );
};
