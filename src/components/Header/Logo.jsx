import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center w-12 sm:w-full">
        <Image src="/blog/logo.webp" alt="Logo" width={80} height={80} />
      </div>
    </Link>
  );
};

export default Logo;
