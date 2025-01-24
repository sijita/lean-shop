import Image from 'next/image';
import iosIcon from '@/assets/ios-button.svg';
import androidIcon from '@/assets/android-button.svg';

export default function DownloadSection() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-white font-semibold">DOWNLOAD APP</h3>
        <div className="space-y-2">
          <a href="#" className="block">
            <Image
              src={androidIcon}
              alt="Get it on Google Play"
              width={140}
              height={40}
            />
          </a>
          <a href="#" className="block">
            <Image
              src={iosIcon}
              alt="Download on the App Store"
              width={140}
              height={40}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
