import { keyframes } from '@stitches/react';
import { styled } from '../../stitches.config';

const draw = keyframes({
  to: { strokeDashoffset: 0 },
});

export const Home = styled('section', {
  alignItems: 'center',
  gap: 10,
  justifyContent: 'space-around',
  width: '100%',
  margin: '175px auto',
  fontFamily: '$title',

  '.home__content': {
    width: 552,

    '.home__title span': { color: '$primary' },

    '.home__container-title': {
      marginBottom: '1.25rem !important',
      position: 'relative',

      '.home__title': {
        fontSize: '3.5rem',
        fontWeight: '$extraBold',
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

  '#line path': {
    animation: `${draw} 4s ease forwards`,

    strokeDasharray: 520,
    strokeDashoffset: 520,
  },

  '.btn': {
    alignItems: 'center',
    boxSizing: 'border-box',
    background: '$bg',
    backgroundClip: 'padding-box',
    border: 'solid 0px transparent',
    borderRadius: '1rem',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: '$bold',
    height: 55,
    justifyContent: 'center',
    margin: '3.75rem 0',
    padding: '0',
    position: 'relative',
    transition: '1s',
    width: '12.5rem',

    '&::before': {
      background: 'linear-gradient(to bottom, $primary, $secondary)',
      borderRadius: 'inherit',
      bottom: '0',
      content: '',
      left: '0',
      margin: '-3px',
      position: 'absolute',
      right: '0',
      top: '0',
      zIndex: -1,
    },

    svg: {
      fill: '#fff',
      transition: '1s',
    },

    '&::after': {
      color: '#fff',
      fontSize: '1.25rem',
      left: '40%',
      opacity: 0,
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      transition: 'all 0.3s ease-in-out',
    },

    '&.cv::after': { content: 'Currículo' },

    '&.lkd::after': { content: 'LinkedIn' },

    '&.gh::after': { content: 'GitHub' },

    '&:hover': {
      '&::after': {
        color: '#fff',
        opacity: 1,
        transition: '1s 0.7s ease-in-out',
      },

      svg: { transform: 'translateX(-50px) rotateY(180deg)' },
    },
  },
});
