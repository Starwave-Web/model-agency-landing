import { type StaticImageData } from "next/image";
import Image from "next/image";

interface HoverImageProps {
  imageSrc: StaticImageData;
  altText: string;
  hoverText: string;
}

const HoverBranchCard: React.FC<HoverImageProps> = ({
  imageSrc,
  altText,
  hoverText,
}) => {
  return (
    <div className="relative group w-[16.5575rem] h-[28.0481rem] overflow-hidden transition-all duration-300 hover:w-[320px] z-0">
      <Image
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover"
      />
      <div className="uppercase font-bold text-[38px] opacity-85 antialiased outline-text-branch absolute left-6 -bottom-6 translate-x-[-100%] group-hover:translate-x-0 -rotate-90 origin-left p-2 transition-transform duration-300">
        {hoverText}
      </div>
    </div>
  );
};

export default HoverBranchCard;
