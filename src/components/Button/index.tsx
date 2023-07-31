import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inner: string | ReactNode;
  blank?: boolean;
  link: string;
  location: 'home' | 'about' | 'projects';
}
export function Button({
  inner,
  blank = false,
  link,
  location,
  ...props
}: ButtonProps) {
  return (
    <a
      href={link}
      target={blank ? '_blank' : ''}
      style={{ width: 'max-content', display: 'block' }}
    >
      <ButtonContainer location={location} className={`btn ${props.className}`}>
        {inner}
      </ButtonContainer>
    </a>
  );
}
