import Link from 'next/link'
import Image from 'next/image';

const Logo = ({ 
  width = 200, 
  isWhite = false 
}: { 
  width?: number,
  isWhite?: boolean 
}) => (
  <div className="flex-shrink-0">
    <Link href="/">
      <Image 
        src={isWhite ? "/logoWhite.webp" : "/logo.webp"}
        width={width}
        height={50}
        alt="Sandra Liliana Rodriguez Dental Logo" 
      />
    </Link>
  </div>
);

export default Logo;
