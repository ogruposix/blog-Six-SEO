import Image from 'next/image';

const AvatarAnimation = () => {
  return (
    <div className="p-4 sm:p-10 flex items-center justify-center">
      <Image src="/blog/logo.webp" alt="pharmasix" width={500} height={500} />
    </div>
  );
};

export default AvatarAnimation;
