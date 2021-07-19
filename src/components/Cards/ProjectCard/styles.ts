import styled from "styled-components";
import { colors } from "../../../Tools/colors";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  width: 250px;
  height: 280px;
  padding: 16px;

  background-color: ${colors.project};
  border-radius: 5px;

  transition: 1s ease;

  box-shadow: 5px 8px 15px -1px rgba(0, 0, 0, 0.45);
  -webkit-box-shadow: 5px 8px 15px -1px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 5px 8px 15px -1px rgba(0, 0, 0, 0.45);

  &::before {
    position: absolute;
    content: "";

    top: -6px;
    left: 0;
    width: 100%;
    height: 6px;

    background-color: ${colors.cyan600};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  img {
    height: 40%;
    object-fit: cover;
    border-radius: 5px;
  }

  div {
    display: none;
  }
  &:hover {
    text-align: center;

    transform: translate(0, -6%) translate3d(0,0,0);
    transition: 0.5s ease;
    & img {
      display: none;
    }
    & div {
      display: flex;
    }
  }
`;

export const Title = styled.h6`
  color: ${colors.white};
  padding: 16px 0 12px 0;
`;

export const Subtitle = styled.h6`
  font-size: 12px;
  color: ${colors.gray600};
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;

  gap: 12px;

  margin: 12px 0 16px 0;
`;

export const TagText = styled.h6`
  font-size: 12px;
  color: ${colors.cyan};

  padding: 0 6px;

  border: 1px solid ${colors.cyan};
  border-radius: 10px;
`;
