import styled from "styled-components";
import { colors } from "../../Tools/colors";

export const Wrapper = styled.section`
  display: flex;
  max-width: 1200px;
  flex-direction: column;
  
  height: 50vh;

  margin: 0 auto;
  padding: 64px 32px 32px 32px;

  h6 {
    color: ${colors.gray600};
  }

  @media screen and (max-width: 1024px) {
    height: 100%;
    h6 {
      text-align: center;
    }
  }
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

export const ContactCardWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 32px;

  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;

    gap: 16px;
    div {
      align-items: center;
      justify-content: flex-start;
    }
  }
`;
