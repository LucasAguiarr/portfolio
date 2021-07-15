import styled from "styled-components";
import { colors } from "../../Tools/colors";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ContainerLogo = styled.div`
  padding-left: 24px;

  img:nth-child(1) {
    height: 24px;
    transition: 0.5s ease;
    &:hover {
      transition: 0.5s ease;
      transform: scale(1.2);
    }
  }
  img:nth-child(2) {
    display: none;
  }

  a {
    display: none;
  }

  @media screen and (max-width: 640px) {
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;

    img:nth-child(1) {
      display: none;
    }

    img:nth-child(2) {
      display: flex;
      height: 40px;
    }

    a {
      display: block;
      padding-right: 32px;
    }
  }
`;

export const ContainerMenuRight = styled.div`
  a {
    padding: 0 32px;
    font-size: 20px;
    display: inline-block;
    transition: 0.5s ease;
    position: relative;

    &::after {
      content: "";
      display: block;
      margin-top: 6px;
      top: 100%;
      left: 0;
      width: 0%;
      height: 4px;
      border-radius: 12px;
      transition: 0.5s ease;
      background-color: ${colors.cyan};
    }

    &:hover {
      opacity: 0.5;

      &::after {
        width: 100%;
        margin: 6px 0 0px 0;
      }
    }
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;
