import React from 'react';
import 'ress';
import styled from 'styled-components';
import baseTheme from '../theme/gray.json';
import {
  createSpaceSize,
  SIZE_FONT_LARGE,
  SIZE_FONT_SMALL,
} from '../lib/styleUtils';

const StyledContainer = styled.div`
  position: relative;
`;

const StyledTitle = styled.h1`
  padding: ${createSpaceSize(3)}px;
  border-bottom: solid 1px ${({ theme }) => theme.thin};
  color: ${({ theme }) => theme.thin};
  font-size: ${SIZE_FONT_LARGE}px;
  font-weight: normal;
  transition: all 600ms ease-out;
  transition-property: border-bottom-color, color;
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
