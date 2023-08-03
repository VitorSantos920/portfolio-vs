import { keyframes } from '@stitches/react';
import { styled } from '../../stitches.config';

const brightness = keyframes({
  from: {
    filter: 'brightness(.7)',
    opacity: 0.5,
  },

  to: {
    filter: 'brightness(.9)',
    opacity: 1,
  },
});

export const About = styled('section', {
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',

  figure: {
    flexGrow: 1,

    img: {
      animation: `${brightness} 4s alternate infinite ease-in`,
      width: '85%',
    },
  },

  '.about__phrase': {
    display: 'block',
    fontFamily: '$text',
    fontStyle: 'italic',
    margin: '1rem 0 2rem',
    fontSize: '1.25rem',
  },

  '.about__content': { width: '50%' },

  '.about__description': {
    fontFamily: '$text',
    textAlign: 'justify',
    fontWeight: '$medium',
    lineHeight: '200%',
    fontSize: '1.1rem',
  },
});
