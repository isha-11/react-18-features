import { darken, lighten, transparentize } from 'polished';

const primary = '#61dafb';
const secondary = '#20232a';

export const theme = {
  color: {
    primary,
    primary15: darken(0.15, primary), //'#35b6d9',
    secondary,
    secondary15: lighten(0.15, secondary), // #383a3e

    scrollbar: {
      track: '#eee',
      thumb: transparentize(0.15, secondary),
    },
  },
};
