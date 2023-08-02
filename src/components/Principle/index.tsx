import { HiOutlineBadgeCheck } from 'react-icons/hi';
import {
  PrincipleContainer,
  PrincipleDescription,
  PrincipleTitle,
} from './style';

interface PrincipleProps {
  title: string;
  description: string;
}

export function Principle({ title, description }: PrincipleProps) {
  return (
    <PrincipleContainer className="principles__principle">
      <div className="flex">
        <HiOutlineBadgeCheck color="#05AAF3" size={60} />

        <PrincipleTitle>{title}</PrincipleTitle>
      </div>

      <PrincipleDescription>{description}</PrincipleDescription>
    </PrincipleContainer>
  );
}
