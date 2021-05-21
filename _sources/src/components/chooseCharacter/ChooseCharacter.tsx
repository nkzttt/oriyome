import React, { useState } from 'react';
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

type Props = {
  onSelected: (character: 'aim') => void;
};
const ChooseCharacter: React.FC<Props> = ({ onSelected }) => {
  const [readyToHide, setReadyToHide] = useState(false);
  return (
    <StyledContainer readyToHide={readyToHide}>
      <StyledCardContainer>
        <CharacterCard
          leftRatio={-80}
          characterTheme={themeAim}
          onSelected={() => {
            setReadyToHide(true);
            onSelected('aim');
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
