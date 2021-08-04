import React, { useState } from 'react';
import 'ress';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import baseTheme from './theme/gray.json';
import aimTheme from './theme/aim.json';
import Header from './components/Header';
import Body from './components/Body';
import ChooseCharacter from './components/chooseCharacter/ChooseCharacter';
import Aim from './components/aim/Aim';
import { SIZE_FONT_MEDIUM } from './lib/styleUtils';

const GlobalStyle = createGlobalStyle`
  body {
    font-family:'ヒラギノ丸ゴ Pro W4','ヒラギノ丸ゴ Pro','Hiragino Maru Gothic Pro','ヒラギノ角ゴ Pro W3','Hiragino Kaku Gothic Pro','HG丸ｺﾞｼｯｸM-PRO','HGMaruGothicMPRO';
    background-color: ${baseTheme.thinner};
    color: ${baseTheme.thick};
    font-size: ${SIZE_FONT_MEDIUM}px;
  }
`;

const CHARACTER_THEMES = {
  aim: aimTheme,
};

type Scene = 'choice' | 'aim';

const getCharacterName = (scene: Scene) => {
  switch (scene) {
    case 'aim':
      return 'あいむ';
    case 'choice':
      return undefined;
  }
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<typeof baseTheme>(baseTheme);
  const [scene, setScene] = useState<Scene>('choice');
  const [backToChoice, setBackToChoice] = useState(false);
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header
          characterName={getCharacterName(scene)}
          onPressTitle={() => {
            setBackToChoice(true);
          }}
        />
        <Body>
          {scene === 'choice' && (
            <ChooseCharacter
              onSelected={(character) => {
                setTheme(CHARACTER_THEMES[character]);
                setScene(character);
              }}
            />
          )}
          {scene === 'aim' && (
            <Aim
              backToChoice={backToChoice}
              onSceneOutForBackToChoice={() => {
                setTheme(baseTheme);
                setScene('choice');
                setBackToChoice(false);
              }}
            />
          )}
        </Body>
      </ThemeProvider>
    </div>
  );
};

export default App;
