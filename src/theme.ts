import { darken, lighten } from 'polished';

export const theme = {
  color: {
    primary: '#61dafb',
    primary10: darken(0.15, '#61dafb'), //'#35b6d9',
    secondary: '#20232a',
    secondary10: lighten(0.15, '#20232a'), // #383a3e
  },
};
