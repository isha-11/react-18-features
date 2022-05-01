import { darken, lighten, transparentize } from 'polished';

const primary = '#61dafb';
const secondary = '#20232a';

export const theme = {
  media: {
    mobile: '@media (max-device-width: 48rem)',
  },
  color: {
    primary,
    primary15: darken(0.15, primary),
    primary20: lighten(0.2, primary),
    secondary,
    secondary15: lighten(0.15, secondary),

    scrollbar: {
      track: '#eee',
      thumb: transparentize(0.15, secondary),
    },

    shadow: '#ccc',
    border: secondary,
  },
  padding: {
    app: {
      mobile: '1rem',
      desktop: '2rem',
    },
  },
};
