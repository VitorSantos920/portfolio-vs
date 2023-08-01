import { ElementType } from 'react';
import { TechnologyContainer } from './style';

interface TechnologyProps {
  icon: ElementType;
  title: string;
  description: string;
}

export function Technology({
  icon: Icon,
  title,
  description,
}: TechnologyProps) {
  return (
    <TechnologyContainer className="technologies__technology">
      <div className="technology__title-container flex">
        <Icon size={60} color="#05AAF3" />
        <h3 className="technology__title">{title}</h3>
      </div>
      <p className="technology__description">{description}</p>
    </TechnologyContainer>
  );
}
