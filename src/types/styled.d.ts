import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: CSSProperties['color'];
      primary10: CSSProperties['color'];
      secondary: CSSProperties['color'];
      secondary10: CSSProperties['color'];
      scrollbar: {
        track: CSSProperties['color'];
        thumb: CSSProperties['color'];
      };
    };
  }
}
