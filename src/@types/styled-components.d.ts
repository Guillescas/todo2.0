import 'styled-components';

import { dark } from '../styles/themes/dark';

export type ThemeInterface = typeof dark;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
