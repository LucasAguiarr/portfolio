import { Wrapper } from "./styles";

interface IButtonProps {
  label: string;
  onClick?: () => void;
  id?: string;
}
export const Button = ({label, onClick, id}:IButtonProps) => {
  return (
    <Wrapper id={id}>
      <button onClick={onClick}>{label}</button>
    </Wrapper>
  );
};
