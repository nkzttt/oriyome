import React from 'react';
import 'ress';
import styled from 'styled-components';
import theme from '../theme/gray.json';
import { createSpaceSize } from '../lib/styleUtils';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${createSpaceSize(10)}px;
`;

const StyledCardContainer = styled.div`
  display: flex;
`;

const CARD_WIDTH = 150;
const StyledCard = styled.div`
  width: ${CARD_WIDTH}px;
  height: 500px;
  margin: 0 ${createSpaceSize(3)}px;
  background-color: ${theme.thinner};
  cursor: pointer;
  &:first-child {
    box-shadow: rgba(0, 0, 0, 0.05) -${CARD_WIDTH + createSpaceSize(6)}px 0,
      rgba(0, 0, 0, 0.03) -${(CARD_WIDTH + createSpaceSize(6)) * 2}px 0,
      rgba(0, 0, 0, 0.02) -${(CARD_WIDTH + createSpaceSize(6)) * 3}px 0;
  }
  &:last-child {
    box-shadow: rgba(0, 0, 0, 0.05) ${CARD_WIDTH + createSpaceSize(6)}px 0,
      rgba(0, 0, 0, 0.03) ${(CARD_WIDTH + createSpaceSize(6)) * 2}px 0,
      rgba(0, 0, 0, 0.02) ${(CARD_WIDTH + createSpaceSize(6)) * 3}px 0;
  }
`;

const ChooseCharacter: React.FC = () => {
  return (
    <StyledContainer>
      <StyledCardContainer>
        <StyledCard>coming soon</StyledCard>
        <StyledCard>coming soon</StyledCard>
        <StyledCard>coming soon</StyledCard>
      </StyledCardContainer>
    </StyledContainer>
  );
};

export default ChooseCharacter;
