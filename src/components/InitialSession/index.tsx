import {
  Wrapper,
  Relative,
  BgWrapper,
  Content,
  InfoWrapper,
  ButtonWrapper,
  ImageWrapper,
} from "./styles";
import bgCircle from "../../assets/images/bgCircle.svg";
import bgTriangleLarge from "../../assets/images/bgTriangleLarge.svg";
import bgTriangleMedium from "../../assets/images/bgTriangleMedium.svg";
import bgTriangleSmall from "../../assets/images/bgTriangleSmall.svg";
import profile from "../../assets/images/profile.png";
import { Button } from "../Button";

export const InitialSession = () => {
  return (
    <Wrapper>
      <Relative>
        <BgWrapper>
          <img id="animation-initialState" src={bgCircle} alt="background-circle" />
          <img id="animation-initialState" src={bgTriangleLarge} alt="background-circle" />
          <img id="animation-initialState"src={bgTriangleMedium} alt="background-circle" />
          <img id="animation-initialState" src={bgTriangleSmall} alt="background-circle" />
        </BgWrapper>
      </Relative>
      <Content>
        <InfoWrapper>
          <h6 id="animation-initialState">Desenvolverdor Full-Stack</h6>
          <h4 id="animation-initialState">Lucas Aguiar</h4>
          <h6 id="animation-initialState">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae, deserunt labore ipsa libero saepe iste corrupti eaque
            eum, delectus ab id et accusamus sed eos recusandae. In itaque
            doloribus nemo?
          </h6>
          <ButtonWrapper>
            <Button id="animation-initialState" label={"Baixar currículo"} />
          </ButtonWrapper>
        </InfoWrapper>
        <ImageWrapper>
          <img id="animation-initialState" src={profile} alt="profile" />
        </ImageWrapper>
      </Content>
    </Wrapper>
  );
};
