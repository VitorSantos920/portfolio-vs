import { FaLightbulb } from 'react-icons/fa';
import { HeaderContent, HeaderMenu } from './style';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { useState } from 'react';
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <HeaderContent className="header__content flex">
        <FaLightbulb />

        <a href="#" className="header__logo">
          Vitu<span>.</span>
        </a>

        <RiMenu3Fill onClick={handleMenu} />
      </HeaderContent>

      <HeaderMenu className={`header__menu ${isOpen ? 'open' : 'close'} flex`}>
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

        <RiCloseFill
          size={60}
          onClick={handleMenu}
          className="header__close-icon"
        />
      </HeaderMenu>
    </header>
  );
}
