import React from 'react';
import 'ress';
import styled from 'styled-components';
import { createSpaceSize } from '../../lib/styleUtils';
import themeAim from '../../theme/aim.json';
import imageAim from '../../images/choose/aim.jpg';
import CharacterCard from './CharacterCard';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${createSpaceSize(5)}px;
`;

const StyledCardContainer = styled.div`
  display: flex;
`;

const ChooseCharacter: React.FC = () => {
  return (
    <StyledContainer>
      <StyledCardContainer>
        <CharacterCard
          leftRatio={-80}
          characterTheme={themeAim}
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
