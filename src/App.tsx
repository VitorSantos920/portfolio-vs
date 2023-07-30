import { Header } from './components/Header';
import { Container } from './style/Container';
import { Home } from './style/Home';
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiSolidUserBadge,
} from 'react-icons/bi';

function App() {
  return (
    <Container>
      <Header />
      <Home className="home flex">
        <section className="home__content">
          <div className="home__container-title">
            <h1 className="home__title">
              <span className="highlight">Um Desenvolvedor Front-End</span> que
              trabalha com <span className="highlight">Detalhes</span>.
            </h1>
            <svg
              id="circle"
              width="200"
              height="60"
              viewBox="0 0 217 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M111.366 100C111.366 100 12.1666 98.2888 4.69997 61.393C-3.47013 21.0331 61.5757 4.26721 111.366 4.00426C156.882 3.76427 214.898 13.5913 212.952 50.9587C210.951 89.3653 101.207 86.4354 101.207 86.4354"
                stroke="white"
                stroke-width="10"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <div className="home__made-by flex">
            <img
              src="./home-img.png"
              alt="Minha Imagem"
              className="home__profile"
              draggable="false"
            />
            <h4 className="home__made-by-title">
              Feito por
              <span className="highlight"> Vitor Santos</span>
            </h4>
          </div>
        </section>

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

        <section className="home__btns-social">
          <a href="/curriculo.pdf" target="_blank">
            <button className="btn cv flex">
              <BiSolidUserBadge size={35} />
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/vitor-hp-santos/"
            target="_blank"
          >
            <button className="btn lkd flex">
              <BiLogoLinkedinSquare size={35} />
            </button>
          </a>

          <a href="https://github.com/vitorsantos920" target="_blank">
            <button className="btn gh flex">
              <BiLogoGithub size={35} />
            </button>
          </a>
        </section>
      </Home>
    </Container>
  );
}

export default App;
