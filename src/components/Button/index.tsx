import { Wrapper } from "./styles";

interface IButtonProps {
  label: string;
  onClick?: () => void;
}
export const Button = ({label, onClick}:IButtonProps) => {
  return (
    <Wrapper>
      <button onClick={onClick}>{label}</button>
    </Wrapper>
  );
};
