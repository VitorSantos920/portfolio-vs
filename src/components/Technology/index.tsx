import { ReactNode } from 'react';
import { TechnologyContainer } from './style';

interface TechnologyProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function Technology({ icon, title, description }: TechnologyProps) {
  return (
    <TechnologyContainer className="Technologies__technology">
      <div className="technology__title-container flex">
        {icon}
        <h3 className="technology__title">{title}</h3>
      </div>
      <p className="technology__description">{description}</p>
    </TechnologyContainer>
  );
}
