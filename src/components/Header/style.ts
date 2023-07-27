import { styled } from '../../../stitches.config';

export const HeaderContainer = styled('header', {
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

  svg: {
    cursor: 'pointer',
    fontSize: '2rem',
  },

  '.header__logo': {
    fontSize: '2.5rem',

    span: { color: '$primary' },
  },

  '.header__nav': {
    backgroundColor: '#06121D',
    borderRadius: '3rem 0 3rem 3rem',
    boxShadow: '2px 0 36px 0 #000000',
    opacity: 0,
    padding: '1.5rem 3rem',
    position: 'absolute',
    right: 0,
    transform: 'scale(1)',
    transformOrigin: 'top',
    transition: '.7s ease-out',
    top: 60,
    zIndex: 2,

    '.header__menu-items': {
      alignItems: 'flex-end',
      flexDirection: 'column',
      gap: '1rem',
    },
  },

  '.header__nav.open': {
    opacity: 1,
    right: 30,
    top: 74,
    transform: 'scale(1.3)',

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
  },
});
