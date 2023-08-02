import { styled } from '../../../stitches.config';

export const TechnologyContainer = styled('article', {
  boxSizing: 'border-box',
  background: '$bg',
  backgroundClip: 'padding-box',
  border: 'solid 0px transparent',
  borderRadius: '1rem',

  position: 'relative',
  padding: '2rem',
  width: 300,
  minWidth: 200,
  flexGrow: 0.5,

  '.technology__title-container': {
    alignItems: 'center',
    fontFamily: '$title',
    gap: '.5rem',
    marginBottom: '1rem',

    '.technology__title': {
      color: '$primary',
      fontSize: '1.7rem',
    },
  },

  '.technology__description': {
    fontFamily: '$text',
    lineHeight: '150%',
  },

  '&::after': {
    content: '',

    position: 'absolute',
    top: 0,
    left: 0,
    height: 10,
    width: '100%',
    backgroundColor: 'rgb(5, 170, 243)',
    transition: '.5s',
  },

  '&:hover::after': {
    height: '100%',
    backgroundColor: 'rgba(5, 170, 243, .1)',
  },

  '&::before': {
    background: 'linear-gradient(to bottom, $primary, $secondary)',
    borderRadius: 'inherit',
    bottom: '0',
    content: '',
    left: '0',
    margin: '-5px',
    position: 'absolute',
    right: '0',
    top: '0',
    zIndex: -1,
  },
});
