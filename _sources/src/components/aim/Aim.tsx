import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BREAK_POINT,
  createSpaceSize,
  HEADER_HEIGHT_FOR_PC,
  HEADER_HEIGHT_FOR_SP,
  MINIMUM_PIXEL_UNIT,
  SIZE_FONT_LARGE,
  SIZE_FONT_SMALL,
  SIZE_FONT_XX_LARGE,
} from '../../lib/styleUtils';
import imageAim from '../../images/choose/aim.jpg';
import SceneInOut from '../utils/SceneInOut';

const StyledContainer = styled.div`
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT_FOR_PC}px);
  position: relative;
  background-color: ${({ theme }) => theme.thinner};
  color: ${({ theme }) => theme.thick};
  overflow: hidden;
  @media screen and (max-width: ${BREAK_POINT}px) {
    height: calc(100vh - ${HEADER_HEIGHT_FOR_SP}px);
    padding-top: 0;
  }
`;

type StyledBodyContainerProps = { readyToStartAnimation: boolean };
const StyledBodyContainer = styled.div<StyledBodyContainerProps>`
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: 0 auto;
  padding: ${createSpaceSize(3)}px;
  padding-top: 0;
  opacity: ${({ readyToStartAnimation }) => (readyToStartAnimation ? 1 : 0)};
  transform: translateX(
    ${({ readyToStartAnimation }) => (readyToStartAnimation ? 50 : 0)}%
  );
  transition: all 600ms ease-out;
  transition-property: opacity, transform;
  @media screen and (max-width: ${BREAK_POINT}px) {
    width: 100%;
    z-index: 1;
    padding: ${createSpaceSize(2)}px ${createSpaceSize(2)}px
      ${createSpaceSize(3)}px;
    transform: translateX(0);
    opacity: ${({ readyToStartAnimation }) => (readyToStartAnimation ? 1 : 0)};
    transition: opacity 600ms ease-out;
  }
`;

const StyledBodyScrollContainer = styled.div`
  height: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar-corner {
    display: none;
  }
  &::-webkit-scrollbar:vertical {
    width: ${MINIMUM_PIXEL_UNIT}px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: ${MINIMUM_PIXEL_UNIT}px;
    background-color: ${({ theme }) => theme.thick};
  }
`;

const StyledMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: ${-MINIMUM_PIXEL_UNIT}px;
  margin-top: ${-MINIMUM_PIXEL_UNIT}px;
  margin-bottom: ${createSpaceSize(3)}px;
`;
type StyledMenuItemProps = { isActive: boolean };
const StyledMenuItem = styled.li<StyledMenuItemProps>`
  height: ${createSpaceSize(5)}px;
  line-height: ${createSpaceSize(5)}px;
  border-radius: ${createSpaceSize(5) / 2}px;
  margin-left: ${MINIMUM_PIXEL_UNIT}px;
  margin-top: ${MINIMUM_PIXEL_UNIT}px;
  padding: 0 ${createSpaceSize(5)}px;
  border: solid 1px ${({ theme }) => theme.thin};
  background-color: ${({ isActive, theme }) =>
    theme[isActive ? 'thin' : 'thinner']};
  color: ${({ isActive, theme }) => theme[isActive ? 'thinner' : 'thin']};
  cursor: pointer;
  transition: background-color 150ms linear;
  &:hover {
    background-color: ${({ theme }) => theme.thin};
    color: ${({ theme }) => theme.thinner};
  }
  @media screen and (max-width: ${BREAK_POINT}px) {
    height: ${createSpaceSize(4)}px;
    line-height: ${createSpaceSize(4)}px;
    padding: 0 ${createSpaceSize(4)}px;
    font-size: ${SIZE_FONT_SMALL}px;
  }
`;

const StyledWord = styled.p`
  margin-bottom: ${createSpaceSize(3)}px;
  font-size: ${SIZE_FONT_XX_LARGE}px;
`;
const StyledProfile = styled.ul`
  list-style: none;
`;
const StyledProfileItem = styled.li`
  margin-bottom: ${MINIMUM_PIXEL_UNIT}px;
`;

type StyledCharacterContainerProps = { readyToStartAnimation: boolean };
const StyledCharacterContainer = styled.div<StyledCharacterContainerProps>`
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  transform: translateX(
    ${({ readyToStartAnimation }) => (readyToStartAnimation ? -50 : 0)}%
  );
  transition: transform 600ms ease-out;
  @media screen and (max-width: ${BREAK_POINT}px) {
    width: 100%;
    transform: translateX(0);
    opacity: ${({ readyToStartAnimation }) =>
      readyToStartAnimation ? 0.3 : 1};
    transition: opacity 600ms ease-out;
  }
`;
const StyledCharacterImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  @media screen and (max-width: ${BREAK_POINT}px) {
    top: auto;
    bottom: 0;
  }
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
        <StyledBodyContainer readyToStartAnimation={readyToStartAnimation}>
          <StyledBodyScrollContainer>
            <StyledMenu>
              {MENUS.map((menu) => (
                <StyledMenuItem
                  key={menu}
                  isActive={currentMenu === menu}
                  onClick={() => setCurrentMenu(menu)}
                >
                  {menu}
                </StyledMenuItem>
              ))}
            </StyledMenu>
            {currentMenu === '紹介' && (
              <>
                <StyledWord>「ありがとう。今日もお疲れ様でした。」</StyledWord>
                <StyledProfile>
                  <StyledProfileItem>
                    名前：愛夢（あいむ / Aim）
                  </StyledProfileItem>
                  <StyledProfileItem>年齢：23歳</StyledProfileItem>
                  <StyledProfileItem>
                    トップ - アンダー：92 - 67（G）
                  </StyledProfileItem>
                </StyledProfile>
              </>
            )}
            {currentMenu === '活動' && <p>大人の本、絶賛製作中！！</p>}
            {currentMenu === 'グッズ' && (
              <p>pixivFACTORY にて販売開始予定！！</p>
            )}
            {currentMenu === 'ご支援' && (
              <p>pixivFANBOX にて愛夢応援専用プラン公開予定！！</p>
            )}
          </StyledBodyScrollContainer>
        </StyledBodyContainer>
        <StyledCharacterContainer readyToStartAnimation={readyToStartAnimation}>
          <StyledCharacterImage src={imageAim} alt="愛夢" />
        </StyledCharacterContainer>
      </StyledContainer>
    </SceneInOut>
  );
};

export default Aim;
