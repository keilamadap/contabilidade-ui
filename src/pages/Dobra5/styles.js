import styled from 'styled-components';

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.background};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    overflow-x: hidden;
  }
`;

export const DesktopLayout = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 360px 1fr;
    transform: translateX(234px);
    gap: 40px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: start;
    font-size: 36px;
    padding-top: 60px;
    line-height: 48px;
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
`;

export const CardsArea = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: 75px;
  }
`;

export const Carousel = styled.div`
  overflow-x: hidden;
  touch-action: pan-x;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: 30px;
  }
`;

export const Track = styled.div`
  display: flex;
  gap: 24px;
  transition: transform 0.3s ease;
  flex-wrap: nowrap;
`;

export const Arrows = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 60px;
    button {
      width: 76px;
      height: 76px;
      border-radius: 50%;
      border: 1px solid #000;
      background: #f6f6f6;
      cursor: pointer;
      font-size: 45px;
    }

    button:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }
`;

export const Dots = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }

  button {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: none;
    background: #e0e1e2;
  }

  .active {
    background: #2bbe41;
  }
`;
