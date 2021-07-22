import styled, { keyframes } from "styled-components";
import { colors } from "../../../Tools/colors";

interface ISkillCardProps {
  barBottomColor: string;
  progressBar: number;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 32px 32px;

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 12px;
    object-fit: contain;
  }
  &:hover {
    h6 {
      color: ${colors.white};
    }
    div {
      &::before {
        width: 100%;
        animation: 2.5s 1 tf-spin;
      }
    }
  }

  @keyframes tf-spin {
    0% {
      transform: scale(1) rotateY(180deg);
    }
    33% {
      transform: scale(0.5) rotateY(180deg);
    }
    66% {
      transform: scale(0.5) rotateY(0);
    }
    100% {
      transform: scale(1) rotateY(0deg);
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

export const ProgressBar = styled.div`
  display: flex;
  width: 100%;
  height: 10px;
  background-color: ${colors.black800};
  border-radius: 12px;

  &::before {
    content: "";
    width: ${(props: ISkillCardProps) => `${props.progressBar}%`};
    border-radius: 12px;
    background-color: ${(props: ISkillCardProps) => props.barBottomColor};
  }
`;
