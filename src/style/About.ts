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
  img: { animation: `${brightness} 4s alternate infinite ease-in` },
});
