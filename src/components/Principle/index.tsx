import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { PrincipleContainer } from './style';

interface PrincipleProps {
  title: string;
  description: string;
}

export function Principle({ title, description }: PrincipleProps) {
  return (
    <PrincipleContainer className="principles__principle">
      <div className="principles__principle-title-container flex">
        <HiOutlineBadgeCheck />
        <h3 className="principles__principle-title">{title}</h3>
      </div>
      <p className="principles__principle-description">{description}</p>
    </PrincipleContainer>
  );
}
