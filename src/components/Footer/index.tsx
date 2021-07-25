import { nav } from "../../Tools/socialMediaNavigation";
import { Wrapper } from "./styles";

export const Footer = () => {
  return (
    <Wrapper>
      <h6>
        2021 lucas Aguiar - Design by{" "}
        <a onClick={() => nav("https://dribbble.com/laviniamelo")}>
          Lavínia Melo
        </a>
      </h6>
    </Wrapper>
  );
};
