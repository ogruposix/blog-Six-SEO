import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <div className="flex items-center text-2xl md:text-3xl font-light">Blog
        <span className="text-accent font-bold dark:font-semibold">&nbsp;Pharma</span>
        Six
      </div>
    </Link>
  );
};

export default Logo;
