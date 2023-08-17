import { styled } from '../../../stitches.config';

export const ButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  background: '$bg',
  backgroundClip: 'padding-box',
  border: 'solid 0px transparent',
  borderRadius: '1rem',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: '$bold',
  height: 55,
  justifyContent: 'center',
  margin: '3.75rem 0',
  padding: '0',
  position: 'relative',
  transition: '1s',
  width: '12.5rem',

  '&::before': {
    background: 'linear-gradient(to bottom, $primary, $secondary)',
    borderRadius: 'inherit',
    bottom: '0',
    content: '',
    left: '0',
    margin: '-3px',
    position: 'absolute',
    right: '0',
    top: '0',
    zIndex: -1,
  },

  variants: {
    location: {
      home: {
        svg: {
          fill: '#fff',
          transition: '1s',
        },

        '&::after': {
          color: '#fff',
          fontSize: '1.25rem',
          left: '40%',
          opacity: 0,
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          transition: 'all 0.3s ease-in-out',
        },

        '&.cv::after': { content: 'Currículo' },

        '&.lkd::after': { content: 'LinkedIn' },

        '&.gh::after': { content: 'GitHub' },

        '&:hover': {
          '&::after': {
            color: '#fff',
            opacity: 1,
            transition: '1s 0.7s ease-in-out',
          },

          svg: { transform: 'translateX(-50px) rotateY(180deg)' },
        },
      },

      about: {
        fontSize: '1.2rem',

        '&:hover': { backgroundColor: '$primary' },
      },

      projects: {
        fontSize: '1.2rem',
        margin: '1.5rem 0',
        '&:hover': { backgroundColor: '$primary' },
      },
    },
  },
});
