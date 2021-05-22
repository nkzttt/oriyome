import 'styled-components';
import baseTheme from '../theme/gray.json';

type Theme = typeof baseTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
