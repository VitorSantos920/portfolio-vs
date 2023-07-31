import { keyframes } from '@stitches/react';
import { styled } from '../../stitches.config';

const draw = keyframes({ to: { strokeDashoffset: 0 } });

export const Home = styled('section', {
  alignItems: 'center',
  gap: 10,
  justifyContent: 'space-around',
  width: '100%',
  margin: '175px auto',
  fontFamily: '$title',

  '.home__content': {
    width: 552,

    '.home__container-title': {
      marginBottom: '1.25rem !important',
      position: 'relative',

      '.home__title': {
        fontSize: '3.5rem',
        fontWeight: '$extraBold',

        span: {
          color: '$primary',
        },
      },

      '#circle': {
        position: 'absolute',
        bottom: 0,

        path: {
          animation: `${draw} 4s 2.5s ease forwards`,

          strokeDasharray: 503,
          strokeDashoffset: 503,
        },
      },
    },

    '.home__made-by': {
      alignItems: 'center',
      color: '$secondary',
      flexWrap: 'wrap',
      gap: '1.25rem',

      '.home__profile': {
        height: 60,
        width: 60,
        borderRadius: '50%',
        border: '2px solid $primary',
        backgroundClip: 'padding-box',
        position: 'relative',
      },

      '.home__made-by-title': {
        fontSize: '1rem',

        span: { color: '$primary' },
      },
    },
  },

  '#line': {
    height: 440,

    path: {
      animation: `${draw} 4s ease forwards`,

      strokeDasharray: 520,
      strokeDashoffset: 520,
    },
  },
});
