import { ElementType } from 'react';
import { TechContainer, TechDescription, TechTitle } from './style';

interface TechnologyProps {
  icon: ElementType;
  title: string;
  description: string;
}

export function Technology({
  icon: TechIcon,
  title,
  description,
}: TechnologyProps) {
  return (
    <TechContainer className="technologies__technology">
      <div className="flex">
        <TechIcon size={60} color="#05AAF3" />
        <TechTitle>{title}</TechTitle>
      </div>
      <TechDescription>{description}</TechDescription>
    </TechContainer>
  );
}
