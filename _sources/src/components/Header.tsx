import React from 'react';
import styled from 'styled-components';
import baseTheme from '../theme/gray.json';
import {
  BREAK_POINT,
  createSpaceSize,
  HEADER_HEIGHT_FOR_SP,
  SIZE_FONT_LARGE,
  SIZE_FONT_MINIMUM,
  SIZE_FONT_SMALL,
} from '../lib/styleUtils';

const StyledContainer = styled.div`
  position: relative;
`;

const StyledTitle = styled.h1`
  padding: ${createSpaceSize(3)}px;
  background-color: ${({ theme }) => theme.thinner};
  color: ${({ theme }) => theme.thin};
  font-size: ${SIZE_FONT_LARGE}px;
  font-weight: normal;
  transition: all 600ms ease-out;
  transition-property: background-color, color;
  @media screen and (max-width: ${BREAK_POINT}px) {
    height: ${HEADER_HEIGHT_FOR_SP}px;
    line-height: ${HEADER_HEIGHT_FOR_SP}px;
    padding: 0;
    padding-left: ${createSpaceSize(2)}px;
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

const Header: React.FC = () => (
  <StyledContainer>
    <StyledTitle>オリ嫁ブランディング</StyledTitle>
    <StyledRightContainer>
      <StyledCopyright>
        <StyledCopyrightIcon>&copy;</StyledCopyrightIcon> 2021 nkzttt
      </StyledCopyright>
    </StyledRightContainer>
  </StyledContainer>
);

export default Header;
