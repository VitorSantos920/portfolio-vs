import { styled } from '../../stitches.config';

export const Carousel = styled('div', {
  overflow: 'hidden',

  '.embla__container': {
    gap: '3rem',

    '.embla__slide': { flex: '0 0 100%', minWidth: 0 },
  },
});
