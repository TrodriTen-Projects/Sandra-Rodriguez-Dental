import React from "react";
import SectionTitle from '../SectionTitle';

interface TratamientoSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  overlayTitle?: string;
  overlayText?: string;
  imageFirst?: boolean;
}

export default function TratamientoSection({
  title,
  description,
  overlayTitle = "",
  overlayText = "",
  imageFirst = true,
}: TratamientoSectionProps) {
  const renderDescription = (desc: string) => {
    if (desc.includes('\n')) {
      const lines = desc.split('\n').filter(line => line.trim() !== '');
      const [first, ...rest] = lines;
      return (
        <div>
          <p className="text-gray-700 text-base md:text-lg mb-2">{first.trim()}</p>
          {rest.length > 0 && (
            <ul className="space-y-1 text-gray-700 text-base md:text-lg">
              {rest.map((line, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-xl text-primary">-</span>
                  <span>{line.trim().replace(/^[-–•]\s*/, '')}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    return <p className="text-gray-700 text-base md:text-lg">{desc}</p>;
  };

  const textContent = (
    <div className="bg-gray-100 py-4 md:p-8 rounded-lg">
      <SectionTitle header="h3" className="text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-6">
        {title}
      </SectionTitle>
      {renderDescription(description)}
    </div>
  );

  const imageContent = (
    <div className="relative h-[220px] md:h-[320px] rounded-lg overflow-hidden bg-gradient-to-r from-primaryDark to-primary">
      {/* <Image 
        src={image} 
        alt={imageAlt}
        fill
        className="object-cover rounded-lg"
      /> */}
      {(overlayTitle || overlayText) && (
        <div className="absolute inset-0 flex items-center justify-end p-4 md:p-8">
          <div className="bg-white/90 p-4 md:p-8 rounded-lg max-w-md w-full">
            <SectionTitle header="h3" className="text-xl md:text-2xl font-semibold !mb-2" uppercase={false}>
              {overlayTitle}
            </SectionTitle>
            <p className="text-sm md:text-base text-gray-700">{overlayText}</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-center max-w-7xl mx-auto">
      {/* On mobile: Text always first, image second */}
      <div className="lg:hidden">{textContent}</div>
      <div className="lg:hidden mt-4">{imageContent}</div>
      
      {/* On desktop: Order based on imageFirst prop */}
      <div className="hidden lg:block lg:col-span-1">
        {imageFirst ? imageContent : textContent}
      </div>
      <div className="hidden lg:block lg:col-span-1">
        {imageFirst ? textContent : imageContent}
      </div>
    </section>
  );
} 