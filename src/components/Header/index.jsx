import Link from 'next/link';
import Logo from './Logo';
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  PortfolioIcon,
  SunIcon
} from './Icons';

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between bg-headerBg text-white fixed backdrop-blur-md z-50">
      <Logo />
      <nav className="w-max py-3 px-8 font-medium capitalize flex items-center">
        <Link href="/" className="mr-2">
          Início
        </Link>
        <Link href="/about" className="mx-2">
          Sobre
        </Link>
        <Link href="/contact" className="mx-2">
          Contato
        </Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      <div>
        <a
          href="https://www.facebook.com/trichains"
          target="_blank"
          rel="noreferrer"
          className="inline-block w-6 h-6 mr-4">
          <FacebookIcon
            className={
              'hover:scale-125 transition-all ease duration-200 rounded-full'
            }
          />
        </a>
        <a
          href="https://github.com/trichains"
          target="_blank"
          rel="noreferrer"
          className="inline-block w-6 h-6 mr-4">
          <GithubIcon
            fill="white"
            className={'hover:scale-125 transition-all ease duration-200'}
          />
        </a>
        <a
          href="https://www.trichains.dev"
          target="_blank"
          rel="noreferrer"
          className="inline-block w-6 h-6 mr-4">
          <PortfolioIcon
            className={'hover:scale-125 transition-all ease duration-200'}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/trichains/"
          target="_blank"
          rel="noreferrer"
          className="inline-block w-6 h-6">
          <LinkedinIcon
            className={'hover:scale-125 transition-all ease duration-200'}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;