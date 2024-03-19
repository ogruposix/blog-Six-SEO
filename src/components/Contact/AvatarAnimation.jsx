import Image from 'next/image';
import Animate from '@/public/meditate.svg';
import Shadow from '@/public/shadow.svg';
import getAssetUrl from '@/src/utils/AssertUrl';

const AvatarAnimation = () => {
  return (
    <div className="pb-4 sm:pb-10 my-6 relative flex items-center flex-col">
      <Image
        src={getAssetUrl(Animate)}
        alt="trichains"
        className="animate-levitate w-2/4 object-contain"
      />
      <div className="absolute bottom-0 left-[22%] w-2/4">
        <Image src={getAssetUrl(Shadow)} alt="shadow" className="animate-shadowWidth" />
      </div>
    </div>
  );
};

export default AvatarAnimation;
