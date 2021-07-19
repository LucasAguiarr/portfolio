import styled from "styled-components";
import { colors } from "../../Tools/colors";

export const Wrapper = styled.section`
  display: flex;
  height: 100px;

  max-width: 1200px;
  margin: 0 auto;

  align-items: center;
  justify-content: center;

  background-color: ${colors.black800};

  border-bottom: 4px solid ${colors.cyan};

  h6 {
    font-size: 16px;
    color: ${colors.gray600};

    a{
      color: ${colors.cyan200};
      cursor: pointer;
    }
  }
`;
