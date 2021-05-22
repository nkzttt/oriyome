import React, { useRef, useState } from 'react';
import 'ress';
import styled from 'styled-components';
import { createSpaceSize } from '../../lib/styleUtils';
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
`;

const StyledCardContainer = styled.div`
  display: flex;
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
          leftRatio={-80}
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
