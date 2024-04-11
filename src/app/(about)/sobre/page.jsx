import AboutCoverSection from '@/src/components/About/AboutCoverSection';
import Link from 'next/link';

export const metadata = {
  title: 'Sobre mim',
  description: 'Aqui estão alguns detalhes sobre mim.'
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <h2
        className="text-lg md:text-2xl font-semibold text-center
        mt-8 mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20
        text-dark dark:text-lightText dark:font-normal">
        Tem um artigo em mente? Entre em{' '}
        <Link
          href="/contato"
          className="!underline underline-offset-2
          text-accentDark hover:text-accentDark/80">
          contato
        </Link>{' '}
        e vamos publica-los. 🤝
      </h2>
    </>
  );
}
