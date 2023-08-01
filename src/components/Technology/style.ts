import { styled } from '../../../stitches.config';

export const TechnologyContainer = styled('article', {
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
});
