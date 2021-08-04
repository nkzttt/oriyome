import React from 'react';
import styled from 'styled-components';
import {
  BREAK_POINT,
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

const Body: React.FC = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Body;
