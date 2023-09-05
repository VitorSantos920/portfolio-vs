import { styled } from '../../../stitches.config';

export const ProjectContainer = styled('article', {
  alignItems: 'flex-end',
  gap: '2.5rem',
  border: 'solid 5px $primary',
  borderRadius: '1rem',
  padding: '2rem',

  '&:hover': { cursor: 'grab' },

  '.project__preview': { minWidth: '62%' },

  '.project__title': {
    color: '$primary',
    fontFamily: '$title',
    fontSize: '2rem',
    marginBottom: '1rem',
  },

  '.project__technologies-icons': {
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: '1rem',
  },

  iframe: { maxWidth: '100%' },
});
