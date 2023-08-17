import { ElementType } from 'react';
import { TechContainer, TechTitle } from './style';
import { Description } from '../../style/Description';

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
      <Description>{description}</Description>
    </TechContainer>
  );
}
