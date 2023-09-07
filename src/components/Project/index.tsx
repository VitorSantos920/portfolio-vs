import { BiLogoReact, BiLogoTypescript } from 'react-icons/bi';
import { RxStitchesLogo } from 'react-icons/rx';
import { Description } from '../../style/Description';
import { Button } from '../Button';
import { ProjectContainer } from './style';

interface ProjectProps {
  title: string;
  iframeSrc: string;
  name: string;
  description: string;
  deployLink: string;
}

export function Project({
  title,
  iframeSrc,
  name,
  description,
  deployLink,
}: ProjectProps) {
  return (
    <ProjectContainer className="projects__project flex">
      <div className="project__preview">
        <h3 className="project__title">{title}</h3>
        <iframe
          width="100%"
          height="383"
          src={iframeSrc}
          title={`YouTube - ${title} video player`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          name={`project__${name}`}
          seamless
        ></iframe>
      </div>

      <div>
        <div className="project__technologies-icons flex">
          <BiLogoReact size={60} color="#05aaf3" />
          <RxStitchesLogo size={60} color="#05aaf3" />
          <BiLogoTypescript size={60} color="#05aaf3" />
        </div>

        <Description className="project__description">
          {description}
        </Description>

        <Button
          inner="Repositório"
          link={`https://github.com/vitorsantos920/${name}`}
          location="projects"
          blank
        />
        <Button
          inner="Ver projeto (Deploy)"
          link={`https://${deployLink}`}
          location="projects"
          blank
        />
      </div>
    </ProjectContainer>
  );
}
