import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  BREAK_POINT,
  createSpaceSize,
  convertHexToRGB,
  HEADER_HEIGHT_FOR_PC,
  HEADER_HEIGHT_FOR_SP,
} from '../lib/styleUtils';

const StyledContainer = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT_FOR_PC}px);
  color: ${({ theme }) => theme.thick};
  background-color: ${({ theme }) => theme.thinner};
  transition: all 600ms ease-out;
  transition-property: background-color, color;
  @media screen and (max-width: ${BREAK_POINT}px) {
    min-height: calc(100vh - ${HEADER_HEIGHT_FOR_SP}px);
  }
`;

const StyledBodyContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const blurring = keyframes`
  from {
    opacity: 0.2;
    transform: scale(1);
  }
  to {
    opacity: 0.3;
    transform: scale(1.1);
  }
`;
const StyledBottomGradient = styled.div`
  width: 60vw;
  height: 30vw;
  position: fixed;
  bottom: ${createSpaceSize(3)}px;
  right: ${createSpaceSize(3)}px;
  background: linear-gradient(
    150deg,
    ${({ theme }) => convertHexToRGB(theme.thin, 0)} 40%,
    ${({ theme }) => theme.thin}
  );
  filter: blur(${createSpaceSize(3)}px);
  opacity: 0;
  transform-origin: bottom right;
  animation: ${blurring} 3000ms linear infinite alternate;
`;

const Body: React.FC = ({ children }) => (
  <StyledContainer>
    <StyledBodyContainer>{children}</StyledBodyContainer>
    <StyledBottomGradient />
  </StyledContainer>
);

export default Body;
