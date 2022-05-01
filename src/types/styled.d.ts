import { CSSProperties } from 'styled-components';

type RequiredCSSProperties = Required<CSSProperties>;

declare module 'styled-components' {
  export interface DefaultTheme {
    media: {
      mobile: string;
    };
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
    padding: {
      app: {
        mobile: RequiredCSSProperties['padding'];
        desktop: RequiredCSSProperties['padding'];
      };
    };
  }
}
