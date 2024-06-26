import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import getAssetUrl from '@/src/utils/AssertUrl';

const BlogLayoutOne = ({ blog }) => {
  return (
    <div
      className="group grid grid-cols-12 gap-4 items-center
      text-dark dark:text-lightText">
      <Link
        href={blog.url}
        className="col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden flex">
        <Image
          src={getAssetUrl(blog.image.filePath.replace('../public', ''))}
          placeholder="blur"
          blurDataURL={getAssetUrl(blog.image.blurhashDataUrl)}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="col-span-12 lg:col-span-8 w-full">
        <span
          className="w-full inline-block uppercase text-accent dark:text-accentDark font-semibold text-xs
        sm:text-sm">
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-base sm:text-lg">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark dark:to-accentDark bg-[length:0px_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_4px]">
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="w-full inline-block text-gray font-medium text-xs sm:text-base">
          {format(new Date(blog.publishedAt), "d 'de' MMMM - yyyy ", {
            locale: ptBR
          })}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
