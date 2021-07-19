import styled from "styled-components";
import { colors } from "../../Tools/colors";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;

  margin: 0 auto;
  padding: 64px 16px 32px 0;

  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  margin-bottom: 48px;

  h4 {
    text-transform: uppercase;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  gap: 64px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
