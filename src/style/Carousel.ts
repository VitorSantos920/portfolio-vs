import { styled } from '../../stitches.config';

export const Carousel = styled('div', {
  overflow: 'hidden',

  '.embla__container': {
    display: 'flex',

    '.embla__slide': {
      flex: '0 0 100%',
      minWidth: 0,

      img: {
        border: '1px solid red',
        width: '40%',
      },
    },
  },
});
