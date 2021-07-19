import styled from "styled-components";
import { colors } from "../../../Tools/colors";

interface ISkillCardProps {
  barBottomColor: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 32px 32px;
  transition: 0.5s ease;

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 12px;
    object-fit: contain;
  }

  &::after {
    content: "";
    width: 100%;
    height: 4px;

    background-color: ${(props: ISkillCardProps) => props.barBottomColor};
    border-radius: 12px;

    transition: 0.4s ease;
  }

  &:hover {
    h6 {
      transition: 0.6s ease;
      color: ${colors.white};
    }
    &::after {
      width: 0%;
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 32px 24px;
  }
`;

export const Title = styled.h6`
  font-size: 12px;
  text-align: center;
  margin-bottom: 6px;

  color: ${colors.gray600};
  text-transform: uppercase;

  transition: 0.5s ease;
`;
