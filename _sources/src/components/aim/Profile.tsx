import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BREAK_POINT,
  createSpaceSize,
  HEADER_HEIGHT_FOR_SP,
  MINIMUM_PIXEL_UNIT,
  SIZE_FONT_XX_LARGE,
} from '../../lib/styleUtils';
import imageAim from '../../images/choose/aim.jpg';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${BREAK_POINT}px) {
    display: block;
  }
`;

const StyledCharacterImage = styled.img`
  display: block;
  width: 40%;
  height: auto;

  @media screen and (max-width: ${BREAK_POINT}px) {
    width: 70%;
    min-width: 300px;
    margin: 0 auto ${createSpaceSize(3)}px;
  }
`;

const StyledBodyContainer = styled.div`
  padding: ${createSpaceSize(3)}px;
  padding-top: 0;

  @media screen and (max-width: ${BREAK_POINT}px) {
    padding: ${createSpaceSize(2)}px;
    padding-top: 0;
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
  &:last-child {
    margin-bottom: 0;
  }
`;

type Props = { readyToStartAnimation: boolean };

const Profile: React.FC<Props> = () => (
  <StyledContainer>
    <StyledCharacterImage src={imageAim} alt="愛夢" />
    <StyledBodyContainer>
      <StyledWord>「ありがとう。今日もお疲れ様でした。」</StyledWord>
      <StyledProfile>
        <StyledProfileItem>名前：愛夢（あいむ / Aim）</StyledProfileItem>
        <StyledProfileItem>年齢：23歳</StyledProfileItem>
        <StyledProfileItem>トップ - アンダー：92 - 67（G）</StyledProfileItem>
      </StyledProfile>
    </StyledBodyContainer>
  </StyledContainer>
);

export default Profile;
