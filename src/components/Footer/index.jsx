'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  PortfolioIcon
} from '../Header/Icons';
import siteMetadata from '@/src/utils/siteMetaData';
import Image from 'next/image';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {};

  return (
    <footer className="flex flex-col items-center">
      {/* <div
        className="flex flex-col text-center items-center
        bg-darkSurface text-lightText w-full
        mt-16 mx-2 rounded-2xl sm:rounded-none">
        <h3 className="mt-16 font-medium dark:font-bold capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
          Histórias | Notícias <br className="sm:hidden" />{' '}
          <span className="hidden sm:inline">|</span> Novidades | Dicas
        </h3>

        <p className="mt-5 px-4 text-center w-full sm:w-3/5 dark:font-medium text-sm sm:text-base">
          Inscreva-se para saber mais sobre novas tecnologias e atualizações.
          <br />
          Junte-se a mais de 5000+ membros da comunidade para se manter
          atualizado com as últimas notícias.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-fit sm:min-w-[384px] flex items-stretch
          bg-light dark:bg-dark
          mt-6 mx-4 p-1 sm:p-2 rounded">
          <input
            type="email"
            name="email"
            placeholder="Seu melhor e-mail"
            ref={register}
            {...register('email', { required: true, maxLength: 80 })}
            className="w-full bg-transparent pl-2 sm:pl-0 text-dark dark:text-lightText focus:border-gray focus:ring-0 border-0 border-b mr-2 pb-1"
          />

          <input
            type="submit"
            className="bg-darkSurface dark:bg-accentDark
            text-lightText dark:text-dark
            cursor-pointer font-medium rounded
            px-3 sm:px-5 py-1"
          />
        </form>

        <div className="flex items-center mt-8 md:mb-5"> */}
      {/* <a
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
            className="inline-block w-6 h-6 mr-4 fill-light">
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
          </a> */}
      {/* </div>
      </div> */}

      <div
        className="w-full relative font-medium bg-light dark:bg-dark
        border-t border-solid border-light dark:border-darkGray text-dark dark:text-lightText
        py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy; 2024 - PharmaSix.
          <br />
          Todos os direitos reservados.
          <br />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            CNPJ: 54.546.790/0001-50
          </span>
        </span>

        <Link
          href="/sitemap.xml"
          className="text-center underline mt-4 md:my-0 hidden">
          sitemap
        </Link>

        <div className="flex flex-col items-center gap-4 my-4">
          <p className="text-center font-bold text-sm sm:text-base">
            Segurança
          </p>
          <div className="flex justify-center gap-4 items-center w-full md:w-auto text-center">
            <a
              href="https://transparencyreport.google.com/safe-browsing/search?url=pharmasix.com.br%2Fblog&hl=pt-PT"
              target="_blank"
              rel="noreferrer">
              <Image
                src="/blog/badges/google-sec.svg"
                alt="ISO 27001"
                width={80}
                height={80}
              />
            </a>
            <Image
              src="/blog/badges/ssl.svg"
              alt="SSL Certificado"
              width={70}
              height={70}
            />
            <Image
              src="/blog/badges/encrypt.svg"
              alt="PCI Compliance"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="text-center">
          Feito por{' '}
          <a href="https://trichains.dev" className="underline">
            trichains
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
