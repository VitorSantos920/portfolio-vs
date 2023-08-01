import { styled } from '../../stitches.config';

export const Technologies = styled('section', {
  '.technologies__title': { textAlign: 'center', marginBottom: '1rem' },

  '.technologies__items': {
    flexWrap: 'wrap',
    gap: '4rem',
    justifyContent: 'center',
  },
});
