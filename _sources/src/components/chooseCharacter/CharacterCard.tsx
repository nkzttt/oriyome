import React, { useState } from 'react';
import 'ress';
import styled from 'styled-components';
import baseTheme from '../../theme/gray.json';
import { createSpaceSize } from '../../lib/styleUtils';

type Theme = typeof baseTheme;

const CARD_WIDTH = 150;
type StyledCardProps = { isComingSoon?: boolean };
const StyledCard = styled.div<StyledCardProps>`
  width: ${CARD_WIDTH}px;
  height: 500px;
  position: relative;
  margin: 0 ${createSpaceSize(3)}px;
  background-color: ${baseTheme.thinner};
  cursor: ${({ isComingSoon }) => (isComingSoon ? 'auto' : 'pointer')};
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

const StyledComingSoon = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
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

const BORDER_PROPERTIES = {
  size: 3,
  transitionTime: 500,
};
type StyledBorderInCardProps = { characterTheme: Theme; isHover: boolean };
const StyledBorderInCardLeft = styled.div<StyledBorderInCardProps>`
  width: ${BORDER_PROPERTIES.size}px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ characterTheme, isHover }) =>
    (isHover ? characterTheme : baseTheme).thick};
  transform: translateY(${({ isHover }) => (isHover ? -100 : 100)}%);
  transition: transform ${BORDER_PROPERTIES.transitionTime}ms linear;
`;
const StyledBorderInCardRight = styled.div<StyledBorderInCardProps>`
  width: ${BORDER_PROPERTIES.size}px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ characterTheme, isHover }) =>
    (isHover ? characterTheme : baseTheme).thick};
  transform: translateY(${({ isHover }) => (isHover ? 100 : -100)}%);
  transition: transform ${BORDER_PROPERTIES.transitionTime}ms linear;
`;
const StyledBorderInCardTop = styled.div<StyledBorderInCardProps>`
  width: 100%;
  height: ${BORDER_PROPERTIES.size}px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ characterTheme, isHover }) =>
    (isHover ? characterTheme : baseTheme).thick};
  transform: translateX(${({ isHover }) => (isHover ? 100 : -100)}%);
  transition: transform ${BORDER_PROPERTIES.transitionTime}ms linear;
`;
const StyledBorderInCardBottom = styled.div<StyledBorderInCardProps>`
  width: 100%;
  height: ${BORDER_PROPERTIES.size}px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${({ characterTheme, isHover }) =>
    (isHover ? characterTheme : baseTheme).thick};
  transform: translateX(${({ isHover }) => (isHover ? -100 : 100)}%);
  transition: transform ${BORDER_PROPERTIES.transitionTime}ms linear;
`;

type Props =
  | { isComingSoon: true }
  | (React.ImgHTMLAttributes<HTMLImageElement> & {
      leftRatio: number;
      characterTheme: Theme;
    });
const CharacterCard: React.FC<Props> = (props) => {
  const [isHover, setHover] = useState(false);
  if ('isComingSoon' in props) {
    return (
      <StyledCard isComingSoon>
        <StyledComingSoon>
          <p>coming soon</p>
        </StyledComingSoon>
      </StyledCard>
    );
  }
  const { leftRatio, characterTheme, ...htmlImgProperties } = props;
  return (
    <StyledCard
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <StyledImageInCard
        {...htmlImgProperties}
        leftRatio={leftRatio}
        isHover={isHover}
      />
      <StyledBorderInCardLeft
        characterTheme={characterTheme}
        isHover={isHover}
      />
      <StyledBorderInCardRight
        characterTheme={characterTheme}
        isHover={isHover}
      />
      <StyledBorderInCardTop
        characterTheme={characterTheme}
        isHover={isHover}
      />
      <StyledBorderInCardBottom
        characterTheme={characterTheme}
        isHover={isHover}
      />
    </StyledCard>
  );
};

export default CharacterCard;
