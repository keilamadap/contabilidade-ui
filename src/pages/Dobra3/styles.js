import styled from "styled-components";
import { Card } from "../../components/FeatureCard/styles";

export const Wrapper = styled.section`
  padding: 40px 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: 60px
    padding-left: 232px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 50px;
  strong {
    font-weight: 700;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 36px;
    line-height: 1.2;
    margin-bottom: 68px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 420px 1fr;
    align-items: stretch;
  }
`;

export const ImageWrapper = styled.div`
  width: 328px;
  height: 215px;
  border-radius: 30px;
  overflow: hidden;
  z-index: 1;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 476px;
    z-index: 10;
    height: 552px;
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    align-items: flex-start;
    justify-content: stretch;
    height: 615px;

    ${Card}:nth-child(1) {
      z-index: 1;
    }

    ${Card}:nth-child(2) {
      transform: translateY(-20px);
      z-index: 2;
    }

    ${Card}:nth-child(3) {
      transform: translateY(-36px);
      z-index: 3;
    }

    ${Card}:nth-child(4) {
      transform: translateY(-54px);
      z-index: 4;
    }

    ${Card}:nth-child(5) {
      transform: translateY(-64px);
      z-index: 5;
    }
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 0px;
  }
`;

export const BreakDesktop = styled.br`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;

export const BreakMobile = styled.br`
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;
