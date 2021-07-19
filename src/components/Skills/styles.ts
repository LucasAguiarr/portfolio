import styled from "styled-components";
import { colors } from "../../Tools/colors";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;

  margin: 0 auto;
  padding: 32px 32px;

  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-bottom: 16px;

  h4 {
    text-transform: uppercase;
  }

  @media screen and (max-width: 640px) {
    justify-content: center;

    padding-bottom: 12px;
    border-bottom: 1px solid ${colors.cyan};
  }
`;

export const SkillsIconsWrapper = styled.div`
  display: flex;
  gap: 32px;

  @media screen and (max-width: 1024px) {
    gap: 16px;
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;
