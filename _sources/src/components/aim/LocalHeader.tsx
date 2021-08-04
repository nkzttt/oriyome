import React from 'react';
import styled from 'styled-components';
import {
  BREAK_POINT,
  createSpaceSize,
  convertHexToRGB,
  MINIMUM_PIXEL_UNIT,
  SIZE_FONT_SMALL,
} from '../../lib/styleUtils';

const StyledContainer = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  overflow: hidden;
  &::after {
    content: '';
    display: block;
    height: 2px;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => convertHexToRGB(theme.thick, 0)} 10%,
      ${({ theme }) => theme.thick} 30%,
      ${({ theme }) => theme.thick} 70%,
      ${({ theme }) => convertHexToRGB(theme.thick, 0)} 90%
    );

    @media screen and (max-width: ${BREAK_POINT}px) {
      background: ${({ theme }) => theme.thick};
    }
  }
`;

const StyledMenu = styled.ul`
  list-style: none;
  display: inline-flex;
  position: relative;
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -3px;
    border: solid 2px ${({ theme }) => theme.thick};
    border-bottom: none;
    background-color: ${({ theme }) => theme.thinner};
  }
  &::before {
    width: ${createSpaceSize(3)}px;
    height: ${createSpaceSize(3)}px;
    left: -${createSpaceSize(6)}px;
  }
  &::after {
    width: ${createSpaceSize(2)}px;
    height: ${createSpaceSize(2)}px;
    right: -${createSpaceSize(4)}px;
  }
`;

type StyledMenuItemProps = { isActive: boolean };
const StyledMenuItem = styled.li<StyledMenuItemProps>`
  position: relative;
  top: 3px;
  padding: 0 ${createSpaceSize(3)}px;
  margin-left: ${MINIMUM_PIXEL_UNIT}px;
  &:first-child {
    margin-left: 0;
  }
  border: solid 2px
    ${({ isActive, theme }) => (isActive ? theme.thick : 'transparent')};
  border-bottom: none;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.thinner : 'transparent'};
  &:hover {
    border: solid 2px ${({ theme }) => theme.thick};
    border-bottom: none;
    background-color: ${({ theme }) => theme.thinner};
  }
  line-height: ${createSpaceSize(5)}px;
  cursor: pointer;

  @media screen and (max-width: ${BREAK_POINT}px) {
    font-size: ${SIZE_FONT_SMALL}px;
    padding: 0 ${createSpaceSize(2)}px;
  }
`;

type Props<Menu> = {
  menus: ReadonlyArray<Menu>;
  currentMenu: Menu;
  onChoice: (menu: Menu) => void;
};

const LocalHeader = <Menu extends string>({
  menus,
  currentMenu,
  onChoice,
}: Props<Menu>) => {
  return (
    <StyledContainer>
      <StyledMenu>
        {menus.map((menu) => (
          <StyledMenuItem
            key={menu}
            isActive={menu === currentMenu}
            onClick={() => onChoice(menu)}
          >
            {menu}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </StyledContainer>
  );
};

export default LocalHeader;
