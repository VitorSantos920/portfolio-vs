import { styled } from '../../../stitches.config';

export const ProjectContainer = styled('article', {
  alignItems: 'flex-end',
  gap: '2.5rem',
  border: 'solid 5px $primary',
  borderRadius: '1rem',
  padding: '2rem',

  '.project__preview': { width: '200%' },

  '.project__title': {
    color: '$primary',
    fontFamily: '$title',
    fontSize: '2rem',
    marginBottom: '1rem',
  },

  '.project__technologies-icons': {
    justifyContent: 'space-between',
    width: '60%',
  },
});
