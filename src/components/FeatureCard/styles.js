import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  padding: 24px;
  border-radius: 24px;
  margin-top: -35px;
  width: 328px;
  height: 211px;
  background: ${({ $bg, theme }) => ($bg ? theme.colors[$bg] : "#ffffff")};

  &:first-child img {
    margin-top: 35px;
  }

  &:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    height: 240px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    align-items: center;
    padding-left: 120px;
    text-align: start;
    width: 550px;
    margin-top: 0px;
    gap: 68px;
    height: 128px;
    background: ${({ $bg, theme }) => ($bg ? theme.colors[$bg] : "#ffffff")};

    &:first-child img {
      margin-top: 0px;
    }

    &:first-child {
      height: 128px;
      border-radius: 24px;
    }

    &:last-child {
      padding-top: 33px;
    }
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 35px;
    height: 35px;
    margin-top: -5px;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: -16px;
  }
`;
