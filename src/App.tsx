import { About } from './style/About';
import { Button } from './components/Button';
import { Container } from './style/Container';
import { Header } from './components/Header';
import { Home } from './style/Home';

import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiSolidUserBadge,
  BiLogoHtml5,
} from 'react-icons/bi';

import { Subtitle } from './style/Subtitle';
import { Principles } from './style/Principles';
import { Phrase } from './style/Phrase';
import { Principle } from './components/Principle';
import { Technologies } from './style/Technologies';
import { Technology } from './components/Technology';

function App() {
  return (
    <Container>
      <Header />
      <main className="main">
        <Home className="home flex">
          <div className="home__content">
            <div className="home__container-title">
              <h1 className="home__title">
                <span className="text-highlight">
                  Um Desenvolvedor Front-End
                </span>{' '}
                que trabalha com{' '}
                <span className="text-highlight">Detalhes</span>.
              </h1>
              <svg
                id="circle"
                width="240"
                height="160"
                viewBox="-40 -30 257 105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M111.366 100C111.366 100 12.1666 98.2888 4.69997 61.393C-3.47013 21.0331 61.5757 4.26721 111.366 4.00426C156.882 3.76427 214.898 13.5913 212.952 50.9587C210.951 89.3653 101.207 86.4354 101.207 86.4354"
                  stroke="white"
                  stroke-width="7"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <div className="home__made-by flex">
              <figure>
                <img
                  src="./home-img.png"
                  alt="Minha Imagem"
                  className="home__profile"
                  draggable="false"
                />
              </figure>
              <h4 className="home__made-by-title">
                Feito por
                <span className="text-highlight"> Vitor Santos</span>
              </h4>
            </div>
          </div>

          <svg
            width="20"
            id="line"
            height="321px"
            viewBox="0 0 20 451"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.87963 2L11.8178 5.8456C20.2979 12.4495 19.999 27.1201 11.2596 33.2453L10.7449 33.6061C1.99096 39.7415 1.99096 54.5613 10.7449 60.697C19.4989 66.8326 19.4989 81.6522 10.7449 87.7879C1.99096 93.9235 1.99096 108.743 10.7449 114.879C19.4989 121.014 19.4989 135.834 10.7449 141.97C1.99096 148.105 1.99096 162.925 10.7449 169.061C19.4989 175.196 19.4989 190.016 10.7449 196.152C1.99096 202.287 1.99096 217.107 10.7449 223.242C19.4989 229.378 19.4989 244.198 10.7449 250.333C1.99096 256.469 1.99096 271.289 10.7449 277.424C19.4989 283.56 19.4989 298.38 10.7449 304.515C1.99096 310.651 1.99096 325.47 10.7449 331.606C19.4989 337.742 19.4989 352.561 10.7449 358.697C1.99096 364.833 1.99096 379.652 10.7449 385.788C19.4989 391.924 19.4989 406.743 10.7449 412.879L9.11856 414.019C0.464096 420.085 -0.477637 434.313 7.27586 441.861L14.6102 449"
              stroke="#05AAF3"
              stroke-width="7"
              stroke-linecap="round"
            />
          </svg>

          <div className="home__btns-social">
            <Button
              inner={<BiSolidUserBadge size={35} />}
              link="/curriculo.pdf"
              className="cv"
              location="home"
              blank
            />

            <Button
              inner={<BiLogoLinkedinSquare size={35} />}
              link="https://www.linkedin.com/in/vitor-hp-santos/"
              className="lkd"
              location="home"
              blank
            />

            <Button
              inner={<BiLogoGithub size={35} />}
              link="https://github.com/vitorsantos920"
              className="gh"
              location="home"
              blank
            />
          </div>
        </Home>

        <About className="about flex">
          <figure>
            <img
              src="/about-img.png"
              className="about__img"
              alt="Imagem de Vitor Santos"
            />
          </figure>

          <div className="about__content">
            <Subtitle className="about__title">Sobre mim</Subtitle>

            <Phrase cite="personal" className="about__phrase">
              Gosto de refletir o amor que sinto pela Tecnologia nas Interfaces
              e Linhas de Código que desenvolvo.
            </Phrase>

            <p className="about__description">
              Me chamo Vitor Hugo Pires dos Santos e sou um Desenvolvedor
              Front-End em busca de um Estágio como primeira experiência no
              mercado de trabalho, para me profissionalizar e, consequentemente,
              aprender sempre mais colocando em prática meus conhecimentos. Com
              19 anos, sou{' '}
              <span className="text-highlight">Técnico em Informática</span>{' '}
              desde 2021, pela Escola Salesiana São José, e estou no 4° semestre
              no Curso Superior de Tecnologia (CST) em{' '}
              <span className="text-highlight">
                Análise e Desenvolvimento de Sistemas (ADS)
              </span>{' '}
              na Faculdade de Tecnologia (FATEC) de Campinas. Por meio da
              Tecnologia, desejo desenvolver aplicações que{' '}
              <span className="text-highlight">farão a diferença</span> na vida
              das pessoas, de forma a auxiliá-las a evoluir.
            </p>

            <Button inner="Entre em contato" link="#" location="about" />
          </div>
        </About>

        <Principles className="principles flex">
          <div className="principles__col-1">
            <Subtitle className="principles__title">
              Meus princípios no desenvolvimento
            </Subtitle>

            <Phrase cite="personal" className="principles__phrase">
              É fazer com Capricho, Carinho e Dedicação. Ter Amor e Felicidade
              com o que faz.
            </Phrase>

            <figure>
              <img src="/principles-img.png" alt="Imagem de Vitor Santos" />
            </figure>
          </div>

          <div className="principles__col-2">
            <Principle
              title="Qualidade de Código"
              description="Prezo pela elevada Qualidade de Código e de Estruturação de
                Diretórios em meus projetos, favorecendo futuras manutenções."
            />

            <Principle
              title="Empatia com o Usuário"
              description="Me preocupo com a maneira com que o usuário navegará pela
                aplicação, tentando sempre prover a melhor experiência."
            />

            <Principle
              title="Aprendizado Contínuo"
              description="Gosto de estudar novos conteúdos e de botar a mão na massa em
                projetos, pois acredito que seja a melhor maneira de absorver o
                que se aprende."
            />

            <Principle
              title="Detalhismo"
              description="Gosto de estar atento aos detalhes que podem fazer diferença no
                resultado final dos meus projetos, sejam visuais ou de códigos."
            />
          </div>
        </Principles>

        <Technologies className="technologies">
          <Subtitle className="technologies__title">Tecnologias</Subtitle>

          <div className="technologies__items">
            <Technology
              icon={<BiLogoHtml5 />}
              title="HTML5"
              description="abc"
            />
          </div>
        </Technologies>
      </main>
    </Container>
  );
}

export default App;
