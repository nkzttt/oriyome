import React, { useState } from 'react';
import 'ress';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import baseTheme from './theme/gray.json';
import aimTheme from './theme/aim.json';
import Header from './components/Header';
import ChooseCharacter from './components/chooseCharacter/ChooseCharacter';
import { SIZE_FONT_MEDIUM } from './lib/styleUtils';

const GlobalStyle = createGlobalStyle`
  body {
    font-family:"ヒラギノ丸ゴ Pro W4","ヒラギノ丸ゴ Pro","Hiragino Maru Gothic Pro","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro","HG丸ｺﾞｼｯｸM-PRO","HGMaruGothicMPRO";
    background-color: #f7f7f7;
    color: ${baseTheme.thick};
    font-size: ${SIZE_FONT_MEDIUM}px;
  }
`;

type Scene = 'choice' | 'dummy';

const App: React.FC = () => {
  const [theme, setTheme] = useState<typeof baseTheme>(baseTheme);
  const [scene, setScene] = useState<Scene>('choice');
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
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
