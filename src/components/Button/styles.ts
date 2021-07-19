import styled from "styled-components";
import { colors } from "../../Tools/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  text-transform: uppercase;

  background-color: transparent;

  border: 2px solid ${colors.cyan};
  border-radius: 4px;

  button {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    border: none;
    color: ${colors.cyan};
    font-size: 16px;
    cursor: pointer;
    z-index: 2;

    :hover {
      background-color: ${colors.cyan};
      color: ${colors.white};
    }
  }
`;
