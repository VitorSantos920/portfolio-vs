import { styled } from '../../../stitches.config';

export const PrincipleContainer = styled('article', {
  marginBottom: '3rem',

  '.principles__principle-title-container': {
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',

    h3: {
      fontFamily: '$title',
      color: '$primary',
      fontSize: '2rem',
    },
  },

  '.principles__principle-description': {
    fontFamily: '$text',
    fontSize: '1.2rem',
    lineHeight: '200%',
    paddingLeft: '1rem',
  },
});
