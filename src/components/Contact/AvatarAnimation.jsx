import Image from 'next/image';
import Animate from '@/public/pharmasix.jpg';
import getAssetUrl from '@/src/utils/AssertUrl';

const AvatarAnimation = () => {
  return (
    <div className="pb-4 sm:pb-10 my-6 relative flex items-center flex-col">
      <Image
        src={getAssetUrl(Animate)}
        alt="pharmasix"
        className=" w-2/4 object-contain"
        width={300}
        height={300}
      />
    </div>
  );
};

export default AvatarAnimation;
