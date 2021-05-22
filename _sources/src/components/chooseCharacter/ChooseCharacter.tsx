import React, { useRef, useState } from 'react';
import 'ress';
import styled from 'styled-components';
import {
  BREAK_POINT,
  createSpaceSize,
  HEADER_HEIGHT_FOR_SP,
} from '../../lib/styleUtils';
import themeAim from '../../theme/aim.json';
import imageAim from '../../images/choose/aim.jpg';
import CharacterCard from './CharacterCard';

type StyledContainerProps = { readyToHide: boolean };
const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${createSpaceSize(5)}px;
  opacity: ${({ readyToHide }) => (readyToHide ? 0 : 1)};
  transform: scale(${({ readyToHide }) => (readyToHide ? 1.05 : 1)});
  transition: all 600ms ease-out;
  transition-property: opacity, transform;
  @media screen and (max-width: ${BREAK_POINT}px) {
    height: calc(100vh - ${HEADER_HEIGHT_FOR_SP}px);
    padding-top: 0;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  @media screen and (max-width: ${BREAK_POINT}px) {
    width: 100%;
    height: 100%;
  }
`;

type CHARACTER = 'aim';

type Props = {
  onSelected: (character: CHARACTER) => void;
};
const ChooseCharacter: React.FC<Props> = ({ onSelected }) => {
  const [readyToHide, setReadyToHide] = useState(false);
  const selectedCharacter = useRef<CHARACTER | null>(null);
  const calledOnSelected = useRef<boolean>(false);
  return (
    <StyledContainer
      readyToHide={!!selectedCharacter.current && readyToHide}
      onTransitionEnd={(e) => {
        if (!readyToHide || calledOnSelected.current) return;
        selectedCharacter.current && onSelected(selectedCharacter.current);
        calledOnSelected.current = true;
      }}
    >
      <StyledCardContainer>
        <CharacterCard
          leftRatio={[-80, -156]}
          characterTheme={themeAim}
          onSelected={() => {
            setReadyToHide(true);
            selectedCharacter.current = 'aim';
          }}
          src={imageAim}
          alt="愛夢"
        />
        <CharacterCard isComingSoon />
        <CharacterCard isComingSoon />
      </StyledCardContainer>
    </StyledContainer>
  );
};

export default ChooseCharacter;
