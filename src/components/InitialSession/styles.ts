import styled from "styled-components";
import { colors } from "../../Tools/colors";

export const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Relative = styled.div`
  position: relative;
`;

export const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;

  overflow: hidden;

  img:nth-child(1) {
    height: 90vh;
    width: 100%;
    position: absolute;
  }

  img:nth-child(2) {
    height: 75vh;
    position: absolute;
    top: 15%;
    left: 40%;
    opacity: 0.1;
  }

  img:nth-child(3) {
    height: 40vh;
    position: absolute;
    top: 40%;
    left: 15%;
    opacity: 0.1;
  }

  img:nth-child(4) {
    height: 20vh;
    position: absolute;
    top: 60%;
    left: 60%;
    opacity: 0.1;
  }

  @media screen and (max-width: 1024px) {
    img:nth-child(2) {
      height: 65vh;
      top: 15%;
      left: 35%;
    }

    img:nth-child(3) {
      height: 35vh;
    }

    img:nth-child(4) {
      height: 30vh;
      top: 55%;
      left: 50%;
    }
  }

  @media screen and (max-width: 640px) {
    img:nth-child(2) {
      height: 0vh;
    }

    img:nth-child(3) {
      height: 0vh;
    }

    img:nth-child(4) {
      height: 0vh;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  width: 60%;
`;
export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0 32px;

  h4 {
    padding: 6px 0 16px 0;
  }

  h6:nth-child(1) {
    color: ${colors.cyan};
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    text-transform: uppercase;
    margin-bottom: 0px;
  }
  h6 {
    color: ${colors.gray200};
    padding-right: 40px;
    margin-bottom: 24px;
  }

  @media screen and (max-width: 1024px) {
    h6 {
      padding-right: 0;
    }
  }

  @media screen and (max-width: 640px) {
    align-items: center;
    text-align: center;
    margin: 0 36px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 2;

  img {
    height: 50vh;
  }

  @media screen and (max-width: 1024px) {
    img {
      height: 30vh;
    }
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;
