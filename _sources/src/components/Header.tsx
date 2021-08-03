import React from 'react';
import styled from 'styled-components';
import baseTheme from '../theme/gray.json';
import {
  BREAK_POINT,
  createSpaceSize,
  HEADER_HEIGHT_FOR_PC,
  HEADER_HEIGHT_FOR_SP,
  SIZE_FONT_LARGE,
  SIZE_FONT_MINIMUM,
  SIZE_FONT_SMALL,
} from '../lib/styleUtils';

const StyledContainer = styled.div`
  position: relative;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.thinner};
  &::after {
    content: "";
    display: block;
    height: 15px;
    position: absolute;
    bottom: -15px;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, ${({ theme }) => theme.thinner}, transparent);
  }
`;

type StyledTitleProps = { isLink: boolean };
const StyledTitle = styled.h1<StyledTitleProps>`
  height: ${HEADER_HEIGHT_FOR_PC}px;
  line-height: ${HEADER_HEIGHT_FOR_PC}px;
  padding-left: ${createSpaceSize(3)}px;
  color: ${({ theme }) => theme.thin};
  font-size: ${SIZE_FONT_LARGE}px;
  font-weight: normal;
  cursor: ${({ isLink }) => (isLink ? 'pointer' : 'default')};
  transition: all 600ms ease-out;
  transition-property: background-color, color;
  @media screen and (max-width: ${BREAK_POINT}px) {
    height: ${HEADER_HEIGHT_FOR_SP}px;
    line-height: ${HEADER_HEIGHT_FOR_SP}px;
    padding-left: ${createSpaceSize(2)}px;
    font-size: ${SIZE_FONT_SMALL}px;
  }
`;

const StyledConnectingText = styled.p`
  margin: 0 ${createSpaceSize(2)}px;
  color: ${({ theme }) => theme.thick};
  @media screen and (max-width: ${BREAK_POINT}px) {
    font-size: ${SIZE_FONT_SMALL}px;
  }
`;

const StyledCharacterName = styled.p`
  color: ${({ theme }) => theme.thick};
  @media screen and (max-width: ${BREAK_POINT}px) {
    font-size: ${SIZE_FONT_SMALL}px;
  }
`;

const StyledRightContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 ${createSpaceSize(3)}px;
`;

const StyledCopyright = styled.p`
  color: ${baseTheme.thin};
  font-size: ${SIZE_FONT_SMALL}px;
  @media screen and (max-width: ${BREAK_POINT}px) {
    font-size: ${SIZE_FONT_MINIMUM}px;
  }
`;

const StyledCopyrightIcon = styled.span`
  font-size: ${SIZE_FONT_LARGE}px;
  vertical-align: middle;
`;

type Props = { characterName?: string; onPressTitle: () => void };

const Header: React.FC<Props> = ({ characterName, onPressTitle }) => (
  <StyledContainer>
    <StyledTitleContainer>
      <StyledTitle
        isLink={!!characterName}
        onClick={() => !!characterName && onPressTitle()}
      >
        オリ嫁ブランディング
      </StyledTitle>
      {characterName && (
        <>
          <StyledConnectingText>&gt;</StyledConnectingText>
          <StyledCharacterName>{characterName}</StyledCharacterName>
        </>
      )}
    </StyledTitleContainer>
    <StyledRightContainer>
      <StyledCopyright>
        <StyledCopyrightIcon>&copy;</StyledCopyrightIcon> 2021 nkzttt
      </StyledCopyright>
    </StyledRightContainer>
  </StyledContainer>
);

export default Header;
