import { createStitches, globalCss } from '@stitches/react';

export const { styled } = createStitches({
  theme: {
    colors: {
      bg: '#081A2A',
      primary: '#05AAF3',
      secondary: '#FFFFFF',
      placeholder: '#838C94',
    },
    fonts: {
      title: 'Sora, sans-serif',
      text: 'Inter, sans-serif',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
    space: { betweenSection: '13.6rem' },
  },
});

globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: { scrollBehavior: 'smooth' },

  body: {
    backgroundColor: '$bg',
    color: '$secondary',
  },

  ul: { listStyleType: 'none' },

  'a, button': {
    color: 'inherit',
    textDecoration: 'none',
  },

  '.flex': { display: 'flex' },

  '.text-highlight': { color: '$primary' },
})();
