import { styled } from '../../stitches.config';

export const Contact = styled('section', {
  '.contact__title': { marginBottom: '1.5rem' },

  '> div.flex': {
    justifyContent: 'space-between',
    flexWrap: 'wrap-reverse',
    gap: '1rem',
    fontFamily: '$title',

    '& > :last-child': {
      flexGrow: 1,
      maxWidth: '60%',

      '& div': { gap: '1rem' },

      fieldset: {
        border: 'none',
        flexGrow: 1,
        marginBottom: '2rem',

        label: { display: 'block' },

        'input, textarea': {
          fontFamily: '$text',
          outline: 'none',
          padding: '1rem 1rem 1rem 0',
          width: '100%',
          flexGrow: 1,
          backgroundColor: 'transparent',
          border: 'none',
          borderBottom: '2px solid $primary',
          color: '#fff',
          resize: 'none',
        },
      },
    },
  },
});
