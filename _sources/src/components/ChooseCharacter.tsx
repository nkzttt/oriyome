import React, { useState } from 'react';
import 'ress';
import styled from 'styled-components';
import theme from '../theme/gray.json';
import { createSpaceSize } from '../lib/styleUtils';
import imageAim from '../images/choose/aim.jpg';

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
  position: relative;
  margin: 0 ${createSpaceSize(3)}px;
  background-color: ${theme.thinner};
  cursor: pointer;
  overflow: hidden;
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

type StyledImageInCardProps = { leftRatio: number; isHover: boolean };
const StyledImageInCard = styled.img<StyledImageInCardProps>`
  position: absolute;
  top: 0;
  left: ${({ leftRatio }) => leftRatio || -50}%;
  width: auto;
  height: 100%;
  filter: grayscale(${({ isHover }) => (isHover ? 0 : 1)});
  transition: filter 350ms linear;
`;

type StyledBorderInCardProps = { isHover: boolean };
const StyledBorderInCardLeft = styled.div<StyledBorderInCardProps>`
  width: 2px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  // TODO
  background-color: ${({ isHover }) => (isHover ? 'purple' : 'gray')};
  transform: translateY(${({ isHover }) => (isHover ? -100 : 100)}%);
  transition: transform 500ms linear;
`;
const StyledBorderInCardRight = styled.div<StyledBorderInCardProps>`
  width: 2px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  // TODO
  background-color: ${({ isHover }) => (isHover ? 'purple' : 'gray')};
  transform: translateY(${({ isHover }) => (isHover ? 100 : -100)}%);
  transition: transform 500ms linear;
`;
const StyledBorderInCardTop = styled.div<StyledBorderInCardProps>`
  width: 100%;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  // TODO
  background-color: ${({ isHover }) => (isHover ? 'purple' : 'gray')};
  transform: translateX(${({ isHover }) => (isHover ? 100 : -100)}%);
  transition: transform 500ms linear;
`;
const StyledBorderInCardBottom = styled.div<StyledBorderInCardProps>`
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  // TODO
  background-color: ${({ isHover }) => (isHover ? 'purple' : 'gray')};
  transform: translateX(${({ isHover }) => (isHover ? -100 : 100)}%);
  transition: transform 500ms linear;
`;

const ChooseCharacter: React.FC = () => {
  const [isHover, setHover] = useState(false);
  return (
    <StyledContainer>
      <StyledCardContainer>
        <StyledCard
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <StyledImageInCard
            leftRatio={-80}
            isHover={isHover}
            src={imageAim}
            alt="愛夢"
          />
          <StyledBorderInCardLeft isHover={isHover} />
          <StyledBorderInCardRight isHover={isHover} />
          <StyledBorderInCardTop isHover={isHover} />
          <StyledBorderInCardBottom isHover={isHover} />
        </StyledCard>
        <StyledCard>coming soon</StyledCard>
        <StyledCard>coming soon</StyledCard>
      </StyledCardContainer>
    </StyledContainer>
  );
};

export default ChooseCharacter;
