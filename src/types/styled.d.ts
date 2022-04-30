import { CSSProperties } from 'styled-components';

type RequiredCSSProperties = Required<CSSProperties>;

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoint: RequiredCSSProperties['maxWidth'];
    color: {
      primary: RequiredCSSProperties['color'];
      primary15: RequiredCSSProperties['color'];
      primary20: RequiredCSSProperties['color'];
      secondary: RequiredCSSProperties['color'];
      secondary15: RequiredCSSProperties['color'];

      shadow: RequiredCSSProperties['color'];
      border: RequiredCSSProperties['color'];

      scrollbar: {
        track: RequiredCSSProperties['color'];
        thumb: RequiredCSSProperties['color'];
      };
    };
  }
}
