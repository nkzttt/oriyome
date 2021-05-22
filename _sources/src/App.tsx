import React, { useState } from 'react';
import 'ress';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import baseTheme from './theme/gray.json';
import aimTheme from './theme/aim.json';
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
    color: ${baseTheme.thick};
    font-size: ${SIZE_FONT_MEDIUM}px;
  }
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

type Scene = 'choice' | 'dummy';

const App: React.FC = () => {
  const [theme, setTheme] = useState<typeof baseTheme>(baseTheme);
  const [scene, setScene] = useState<Scene>('choice');
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledTitle>オリ嫁ブランディング</StyledTitle>
        {scene === 'choice' && (
          <ChooseCharacter
            onSelected={(character) => {
              switch (character) {
                case 'aim':
                  setTheme(aimTheme);
                  break;
              }
              setScene('dummy');
            }}
          />
        )}
        {scene === 'dummy' && <p>next contents</p>}
      </ThemeProvider>
    </div>
  );
};

export default App;
