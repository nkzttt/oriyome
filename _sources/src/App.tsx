import React from 'react';
import 'ress';
import { createGlobalStyle } from 'styled-components';
import ChooseCharacter from './components/chooseCharacter/ChooseCharacter';

const GlobalStyle = createGlobalStyle`
  body {
    font-family:"ヒラギノ丸ゴ Pro W4","ヒラギノ丸ゴ Pro","Hiragino Maru Gothic Pro","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro","HG丸ｺﾞｼｯｸM-PRO","HGMaruGothicMPRO";
    background-color: #f7f7f7;
    color: #646464;
  }
`;

const App: React.FC = () => (
  <div>
    <GlobalStyle />
    <ChooseCharacter />
  </div>
);

export default App;
