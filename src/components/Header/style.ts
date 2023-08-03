import { styled } from '../../../stitches.config';

export const HeaderContent = styled('div', {
  alignItems: 'center',
  backgroundColor: '#06121D',
  borderRadius: '3rem',
  boxShadow: '2px 0 36px 0 #000000',
  fontFamily: '$title',
  justifyContent: 'space-between',
  left: '50%',
  maxWidth: '1200px',
  padding: '.7rem 3rem',
  position: 'fixed',
  top: 50,
  transform: 'translateX(-50%)',
  width: '80%',
  zIndex: 2,

  svg: {
    cursor: 'pointer',
    fontSize: '2rem',
  },

  '.header__logo': {
    fontSize: '2.5rem',

    span: { color: '$primary' },
  },
});

export const HeaderMenu = styled('nav', {
  backgroundColor: '#06121D',
  boxShadow: '2px 0 36px 0 #000000',
  gap: '3rem',
  position: 'fixed',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '$title',
  fontSize: '2rem',
  opacity: 0,
  left: 0,
  top: 0,
  transition: '1s',
  transform: 'translateX(-300px)',

  height: '100%',
  zIndex: 2,
  width: '0',

  '.header__menu-items': {
    alignItems: 'center',
    flexDirection: 'column',

    gap: '3rem',
  },

  '.header__close-icon': {
    position: 'absolute',
    top: 50,
    right: 150,
    cursor: 'pointer',
    transition: '1s',
  },

  '&.open': {
    opacity: 1,
    transform: 'translateX(0)',
    width: '100%',

    a: {
      padding: '0 .5rem',
      position: 'relative',
      transition: '.8s',

      '&::before': {
        backgroundColor: '$primary',
        borderRadius: '8px',
        content: '',
        height: '10px',
        left: 0,
        position: 'absolute',
        right: 0,
        top: '65%',
        transition: '.8s',
        width: 0,
        zIndex: -1,
      },

      '&:hover': {
        textShadow: '0px 3px 2px #000',

        '&::before': { width: '100%' },
      },
    },

    '> svg:hover': { transform: 'rotate(180deg)' },
  },
});
