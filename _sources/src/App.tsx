import React from 'react';
import 'ress';
import styled, { createGlobalStyle } from 'styled-components';
import theme from './theme/gray.json';
import ChooseCharacter from './components/chooseCharacter/ChooseCharacter';
import {
  createSpaceSize,
  SIZE_FONT_LARGE,
  SIZE_FONT_MEDIUM,
} from './lib/styleUtils';

const GlobalStyle = createGlobalStyle`
  body {
    font-family:"ヒラギノ丸ゴ Pro W4","ヒラギノ丸ゴ Pro","Hiragino Maru Gothic Pro","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro","HG丸ｺﾞｼｯｸM-PRO","HGMaruGothicMPRO";
    background-color: #f7f7f7;
    color: ${theme.thick};
    font-size: ${SIZE_FONT_MEDIUM}px;
  }
`;

const StyledTitle = styled.h1`
  padding: ${createSpaceSize(3)}px;
  color: ${theme.thin};
  font-size: ${SIZE_FONT_LARGE}px;
  font-weight: normal;
`;

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <StyledTitle>オリ嫁ブランディング</StyledTitle>
      <ChooseCharacter onSelected={(character) => console.log(character)} />
    </div>
  );
};

export default App;
