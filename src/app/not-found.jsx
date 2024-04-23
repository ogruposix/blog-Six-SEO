import { allBlogs } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import RecentPosts from '../components/Home/RecentPosts';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Página Não Encontrada | PharmaSix</title>
      </Head>
      <div className="flex flex-col items-center justify-center mt-24 bg-gray-100 p-4">
        <div className="text-center w-full">
          <h1 className="text-7xl font-bold from-emerald-600 bg-gradient-to-r to-lime-400 bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-xl md:text-4xl font-semibold text-stone-800 dark:text-stone-400 mt-4">
            Ops! Esta página não foi encontrada.
          </p>

          <div className="flex items-center justify-center my-4 w-full">
            <Image src="/blog/404.gif" width={200} height={200} alt="404" />
          </div>
          <p className="text-stone-600 dark:text-stone-400 text-lg md:text-xl">
            Parece que nada foi encontrado neste local.
            <br />
            Tente um dos artigos abaixo
          </p>
        </div>
      </div>
      <RecentPosts blogs={allBlogs} />
      <div className="text-center">
        <Link
          href="/"
          className="mt-4 inline-block bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
          Voltar à página inicial
        </Link>
      </div>
    </>
  );
}
