import { keyframes } from '@stitches/react';
import { styled } from '../../stitches.config';

const brightness = keyframes({
  from: { filter: 'brightness(.8)' },

  to: { filter: 'brightness(1)' },
});

export const Principles = styled('section', {
  margin: '$betweenSection 0',
  gap: '3.5rem',

  figure: {
    flexGrow: 1,

    img: {
      animation: `${brightness} 4s alternate infinite ease-in`,
      width: '85%',
    },
  },

  '.principles__col-2': { width: '70%' },
});
