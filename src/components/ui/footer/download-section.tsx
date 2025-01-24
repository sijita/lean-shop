import Image from 'next/image';
import iosIcon from '@/assets/ios-button.svg';
import androidIcon from '@/assets/android-button.svg';
import Link from 'next/link';

export default function DownloadSection() {
  return (
    <div className="download-section">
      <h3 className="title">DOWNLOAD APP</h3>
      <div className="buttons">
        <Link href="#">
          <Image
            src={androidIcon}
            alt="Get it on Google Play"
            width={140}
            height={40}
          />
        </Link>
        <Link href="#">
          <Image
            src={iosIcon}
            alt="Download on the App Store"
            width={140}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
}
