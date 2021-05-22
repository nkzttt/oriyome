import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { CheckCircle } from '@styled-icons/boxicons-regular/CheckCircle';
import baseTheme from '../../theme/gray.json';
import {
  BREAK_POINT,
  createSpaceSize,
  SIZE_FONT_XX_LARGE,
} from '../../lib/styleUtils';

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
  @media screen and (max-width: ${BREAK_POINT}px) {
    width: 33.333%;
    height: 100%;
    margin: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    &:nth-child(3n) {
      width: 33.334%;
    }
  }
`;

const StyledComingSoon = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: ${baseTheme.thin};
  font-size: ${SIZE_FONT_XX_LARGE}px;
  text-align: center;
  transform: rotate(-20deg);
`;

type StyledImageInCardProps = {
  leftRatio: [forPc: number, forSp: number];
  isHover: boolean;
  selected: boolean;
};
const StyledImageInCard = styled.img<StyledImageInCardProps>`
  position: absolute;
  top: 0;
  left: ${({ leftRatio }) => leftRatio[0]}%;
  width: auto;
  height: 100%;
  filter: grayscale(
    ${({ isHover, selected }) => (isHover || selected ? 0 : 1)}
  );
  transition: filter 350ms linear;
  @media screen and (max-width: ${BREAK_POINT}px) {
    left: ${({ leftRatio }) => leftRatio[1]}%;
  }
`;

const BORDER_PROPERTIES = {
  size: 3,
  transitionTime: 500,
};
type StyledBorderInCardProps = {
  characterTheme: Theme;
  isHover: boolean;
  selected: boolean;
};
const StyledBorderInCardLeft = styled.div<StyledBorderInCardProps>`
  width: ${BORDER_PROPERTIES.size}px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ characterTheme, isHover }) =>
    (isHover ? characterTheme : baseTheme).thick};
  transform: translateY(
    ${({ isHover, selected }) => (isHover || selected ? -100 : 100)}%
  );
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
  transform: translateY(
    ${({ isHover, selected }) => (isHover || selected ? 100 : -100)}%
  );
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
  transform: translateX(
    ${({ isHover, selected }) => (isHover || selected ? 100 : -100)}%
  );
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
  transform: translateX(
    ${({ isHover, selected }) => (isHover || selected ? -100 : 100)}%
  );
  transition: transform ${BORDER_PROPERTIES.transitionTime}ms linear;
`;

const StyledSelectedCenteringContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  33%, 66% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px);
  }
`;
const StyledSelectedContainer = styled.div`
  text-align: center;
  opacity: 0;
  animation: ${fadeInOut} 1200ms ease-in-out forwards;
  @media screen and (max-width: ${BREAK_POINT}px) {
    animation-delay: 500ms;
  }
`;
type StyledSelectedIconProps = { characterTheme: Theme };
const StyledSelectedIcon = styled(CheckCircle)<StyledSelectedIconProps>`
  margin: 0 auto;
  color: ${({ characterTheme }) => characterTheme.thinner};
  filter: drop-shadow(0 0 3px ${({ characterTheme }) => characterTheme.thin});
`;
type StyledSelectedLabelProps = { characterTheme: Theme };
const StyledSelectedLabel = styled.p<StyledSelectedLabelProps>`
  color: ${({ characterTheme }) => characterTheme.thinner};
  font-size: ${SIZE_FONT_XX_LARGE}px;
  filter: drop-shadow(0 0 3px ${({ characterTheme }) => characterTheme.thin});
`;

type Props =
  | { isComingSoon: true }
  | (React.ImgHTMLAttributes<HTMLImageElement> & {
      leftRatio: [forPc: number, forSp: number];
      characterTheme: Theme;
      onSelected: () => void;
    });
const CharacterCard: React.FC<Props> = (props) => {
  const [isHover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);
  if ('isComingSoon' in props) {
    return (
      <StyledCard isComingSoon>
        <StyledComingSoon>
          <p>coming soon</p>
        </StyledComingSoon>
      </StyledCard>
    );
  }
  const { leftRatio, characterTheme, onSelected, ...htmlImgProperties } = props;
  return (
    <StyledCard
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setSelected(true)}
    >
      <StyledImageInCard
        {...htmlImgProperties}
        leftRatio={leftRatio}
        isHover={isHover}
        selected={selected}
      />
      <StyledBorderInCardLeft
        characterTheme={characterTheme}
        isHover={isHover}
        selected={selected}
      />
      <StyledBorderInCardRight
        characterTheme={characterTheme}
        isHover={isHover}
        selected={selected}
      />
      <StyledBorderInCardTop
        characterTheme={characterTheme}
        isHover={isHover}
        selected={selected}
      />
      <StyledBorderInCardBottom
        characterTheme={characterTheme}
        isHover={isHover}
        selected={selected}
      />
      {selected && (
        <StyledSelectedCenteringContainer>
          <StyledSelectedContainer onAnimationEnd={onSelected}>
            <StyledSelectedIcon
              characterTheme={characterTheme}
              width={50}
              height={50}
            />
            <StyledSelectedLabel characterTheme={characterTheme}>
              selected
            </StyledSelectedLabel>
          </StyledSelectedContainer>
        </StyledSelectedCenteringContainer>
      )}
    </StyledCard>
  );
};

export default CharacterCard;
