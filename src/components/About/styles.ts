import styled from "styled-components";
import { colors } from "../../Tools/colors";

export const Wrapper = styled.section`
  display: flex;
  position: relative;
  max-width: 1200px;
  height: 90vh;

  margin: 0 auto;
  padding: 0 32px;

  align-items: center;
  justify-content: center;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

export const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  overflow: hidden;

  img:nth-child(1) {
    height: 100vh;
    position: absolute;
    opacity: 0.4;
  }

  img:nth-child(2) {
    height: 100vh;
    position: absolute;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const ProfileIconWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export const ProfileICon = styled.div`
  margin-bottom: 16px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;

    border: 4px solid ${colors.cyan};
    border-style: outset;

    background-color: ${colors.cyan};

    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 640px) {
    img {
      width: 100%;
      border-radius: 0;
      object-fit: cover;
    }
  }
`;

export const UserName = styled.h5`
  margin-bottom: 12px;
`;

export const SocialIconsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;

  margin-left: 128px;

  z-index: 1;

  h5 {
    font-weight: bold;
    margin-bottom: 16px;
  }

  h6 {
    color: ${colors.gray600};
    margin-bottom: 12px;
  }

  @media screen and (max-width: 640px) {
    margin: 64px 32px;

    text-align: center;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-bottom: 32px;
  h4 {
    text-transform: uppercase;
  }

  @media screen and (max-width: 640px) {
    justify-content: center;

    padding-bottom: 12px;
    border-bottom: 1px solid ${colors.cyan};
  }
`;
