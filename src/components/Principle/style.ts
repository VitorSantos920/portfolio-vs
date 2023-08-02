import { styled } from '../../../stitches.config';

export const PrincipleContainer = styled('article', {
  marginBottom: '3rem',

  div: {
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
});

export const PrincipleTitle = styled('h3', {
  fontFamily: '$title',
  color: '$primary',
  fontSize: '2rem',
});

export const PrincipleDescription = styled('p', {
  fontFamily: '$text',
  fontSize: '1.2rem',
  lineHeight: '200%',
  paddingLeft: '1rem',
});
