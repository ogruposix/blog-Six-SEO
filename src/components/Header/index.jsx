'use client';
import Link from 'next/link';
import Logo from './Logo';
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  PortfolioIcon,
  SunIcon
} from './Icons';
import siteMetadata from '@/src/utils/siteMetaData';
import { useThemeSwitch } from '../Hooks/useThemeSwitch';

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  return (
    <header className="w-full p-2 px-10 flex items-center justify-between text-black dark:text-light fixed bg-light dark:bg-darkBlue border-b border-blueGray dark:border-darkGray z-50">
      <Logo />
      <nav className="w-max py-3 px-8 font-medium capitalize flex items-center">
        <Link href="/" className="mr-2">
          Início
        </Link>
        <Link href="/sobre" className="mx-2">
          Sobre
        </Link>
        <Link href="/contato" className="mx-2">
          Contato
        </Link>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className="ml-2">
          <SunIcon />
        </button>
      </nav>
      <div className="flex items-center">
        <a
          href={siteMetadata.facebook}
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
          href={siteMetadata.github}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-6 h-6 mr-4">
          <GithubIcon
            className={'hover:scale-125 transition-all ease duration-200'}
          />
        </a>
        <a
          href={siteMetadata.portfolio}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-6 h-6 mr-4">
          <PortfolioIcon
            className={'hover:scale-125 transition-all ease duration-200'}
          />
        </a>
        <a
          href={siteMetadata.linkedin}
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
