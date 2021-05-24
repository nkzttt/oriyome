import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {
  BREAK_POINT,
  createSpaceSize,
  HEADER_HEIGHT_FOR_SP,
} from '../../lib/styleUtils';
import themeAim from '../../theme/aim.json';
import imageAim from '../../images/choose/aim.jpg';
import SceneInOut from '../utils/SceneInOut';
import CharacterCard from './CharacterCard';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${createSpaceSize(5)}px;
  @media screen and (max-width: ${BREAK_POINT}px) {
    height: calc(100vh - ${HEADER_HEIGHT_FOR_SP}px);
    padding-top: 0;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  @media screen and (max-width: ${BREAK_POINT}px) {
    flex-wrap: wrap;
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
  return (
    <SceneInOut
      readyToHide={!!selectedCharacter.current && readyToHide}
      onSceneOut={() =>
        selectedCharacter.current && onSelected(selectedCharacter.current)
      }
    >
      <StyledContainer>
        <StyledCardContainer>
          <CharacterCard
            leftRatio={[-35, -12]}
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
    </SceneInOut>
  );
};

export default ChooseCharacter;
