import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  min-width: 276px;
  height: 294px;
  background: #ffffff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 51px;
  justify-content: start;
  align-items: start;
  padding-top: 30px;
  padding-left: 23px;
`;

export const Icon = styled.div`
  width: 42px;
  height: 38px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.neutral};
  line-height: 27px;
`;

export const Description = styled.p`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    color: #000;
    font-weight: 500;
    display: block;
    font-family: ${({ theme }) => theme.fonts.secondary};
    text-align: start;
    font-size: 16px;
    margin-top: -45px;
    line-height: 24px;
  }
`;
