import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BREAK_POINT,
  createSpaceSize,
  HEADER_HEIGHT_FOR_PC,
  HEADER_HEIGHT_FOR_SP,
} from '../../lib/styleUtils';
import SceneInOut from '../utils/SceneInOut';
import LocalHeader from './LocalHeader';
import Profile from './Profile';

const StyledContainer = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT_FOR_PC}px);
  background-color: ${({ theme }) => theme.thinner};
  color: ${({ theme }) => theme.thick};

  @media screen and (max-width: ${BREAK_POINT}px) {
    min-height: calc(100vh - ${HEADER_HEIGHT_FOR_SP}px);
  }
`;

const StyledLocalHeaderContainer = styled.div`
  margin-bottom: ${createSpaceSize(3)}px;
`;

const MENUS = ['紹介', '活動', 'グッズ', 'ご支援'] as const;

type Props = { backToChoice: boolean; onSceneOutForBackToChoice: () => void };

const Aim: React.FC<Props> = ({ backToChoice, onSceneOutForBackToChoice }) => {
  const [readyToStartAnimation, setReadyToStartAnimation] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<typeof MENUS[number]>('紹介');
  return (
    <SceneInOut
      readyToHide={backToChoice}
      onSceneIn={() => setTimeout(() => setReadyToStartAnimation(true), 600)}
      onSceneOut={() => backToChoice && onSceneOutForBackToChoice()}
    >
      <StyledContainer>
        <StyledLocalHeaderContainer>
          <LocalHeader
            menus={MENUS}
            currentMenu={currentMenu}
            onChoice={(menu) => setCurrentMenu(menu)}
          />
        </StyledLocalHeaderContainer>
        {currentMenu === '紹介' && (
          <Profile readyToStartAnimation={readyToStartAnimation} />
        )}
        {currentMenu === '活動' && <p>大人の本、絶賛製作中！！</p>}
        {currentMenu === 'グッズ' && <p>pixivFACTORY にて販売開始予定！！</p>}
        {currentMenu === 'ご支援' && (
          <p>pixivFANBOX にて愛夢応援専用プラン公開予定！！</p>
        )}
      </StyledContainer>
    </SceneInOut>
  );
};

export default Aim;
