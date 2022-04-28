import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: CSSProperties['color'];
      primary15: CSSProperties['color'];
      secondary: CSSProperties['color'];
      secondary15: CSSProperties['color'];
      scrollbar: {
        track: CSSProperties['color'];
        thumb: CSSProperties['color'];
      };
      shadow: CSSProperties['color'];
    };
  }
}
