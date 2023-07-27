import { FaLightbulb } from 'react-icons/fa';
import { HeaderContainer } from './style';
import { RiMenu3Fill } from 'react-icons/ri';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer className="header flex">
      <FaLightbulb />

      <a href="#" className="header__logo">
        Vitu<span>.</span>
      </a>

      <RiMenu3Fill onClick={handleMenu} />
      <nav className={`header__nav ${isOpen ? 'open' : 'close'}`}>
        <ul className="header__menu-items flex">
          <li className="header__item">
            <a onClick={handleMenu} href="#">
              Início
            </a>
          </li>

          <li className="header__item">
            <a onClick={handleMenu} href="#">
              Sobre
            </a>
          </li>

          <li className="header__item">
            <a onClick={handleMenu} href="#">
              Tecnologias
            </a>
          </li>

          <li className="header__item">
            <a onClick={handleMenu} href="#">
              Projetos
            </a>
          </li>

          <li className="header__item">
            <a onClick={handleMenu} href="#">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
