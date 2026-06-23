import React from 'react';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';
// Define types for our card data
export type SmallCardData = {
  title: string;
  image: string;
};

export type MediumCardData = {
  title: string;
  image: string;
  subtitle?: string;
  component?: React.ReactNode;
  gradientDirection?: 'normal' | 'reverse';
  opacity?: number;
};

export type CardsHeroData = {
  smallCards: SmallCardData[];
  mediumCards: MediumCardData[];
};

// Small card component
const SmallCard = ({ data, delay = 0 }: { data: SmallCardData, delay?: number }) => {
  const delayStyle = { animationDelay: `${delay}ms` };
  
  return (
    <div 
      className="bg-white rounded-3xl overflow-hidden shadow-md h-64 relative animate-fadeIn opacity-0" 
      style={delayStyle}
    >
      <Image
        src={data.image}
        alt={data.title}
        fill
        className="object-cover brightness-[0.75]"
      />
      <div className="absolute inset-8 flex items-end justify-center p-4">
        <h3 className="text-white text-2xl font-semibold text-center">{data.title}</h3>
      </div>
    </div>
  );
};

// Medium card component
const MediumCard = ({ data }: { data: MediumCardData }) => {
  // Determine which gradient class to use
  let backgroundClass = "bg-primaryDark"; // Default background
  
  if (data.gradientDirection === 'normal') {
    backgroundClass = "bg-gradient-to-r from-secondaryLight to-primary";
  } else if (data.gradientDirection === 'reverse') {
    backgroundClass = "bg-gradient-to-r from-primary to-secondaryLight";
  }
  
  // Calculate opacity style
  const opacityStyle = data.opacity !== undefined ? { opacity: data.opacity } : {};
  
  return (
    <div className="rounded-3xl overflow-hidden shadow-md h-64 relative">
      {/* Background div with gradient */}
      <div 
        className={`${backgroundClass} absolute inset-0`} 
        style={opacityStyle}
      ></div>
      
      {/* Content div */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
        {data.subtitle && (
          <p className="text-gray text-md mb-4">{data.subtitle}</p>
        )}
        <h2 className="text-gray text-3xl font-bold mb-2">{data.title}</h2>
        {data.component && (
          <div className="text-gray mt-2">{data.component}</div>
        )}
      </div>
    </div>
  );
};

// Main CardsHero component
const CardsHero = ({ data }: { data?: CardsHeroData }) => {
  // Default placeholder data
  const defaultData: CardsHeroData = {
    smallCards: [
      { title: "Pacientes satisfechos", image: "/woman_card.webp" },
      { title: "Atención personalizada", image: "/man_card.webp" },
      { title: "Tecnología Avanzada", image: "/dental_card.webp" },
      { title: "Opiniones positivas", image: "/old_card.webp" },
    ],
    mediumCards: [
      { 
        title: "Más de 20 años de experiencia en Rehabilitación Oral", 
        subtitle: "Calidad y profesionalismo",
        image: "/home.jpeg",
        gradientDirection: 'normal',
        opacity: 0.3
      },
      { 
        title: "¡Recupera tu sonrisa!", 
        image: "/home.jpeg",
        gradientDirection: 'reverse',
        opacity: 0.3
      },
    ],
  };

  const cardsData = data || defaultData;

  return (
    <div className="lg:max-w-7xl container mx-auto px-4">
      <div className="pt-8 lg:pt-16">
        <SectionTitle header="h2" className="pb-4 md:pb-8 text-center font-bold mb-4" uppercase>
          ¿Por qué elegirnos?
        </SectionTitle>
        {/* Desktop layout - updated to make medium cards take double space */}
        <div className="hidden md:block">
          {/* First row */}
          <div className="grid grid-cols-12 gap-4 md:gap-6 md:mb-6 lg:mb-8">
            <div className="col-span-3">
              <SmallCard data={cardsData.smallCards[0]} delay={100} />
            </div>
            <div className="col-span-6">
              <MediumCard data={cardsData.mediumCards[0]} />
            </div>
            <div className="col-span-3">
              <SmallCard data={cardsData.smallCards[1]} delay={200} />
            </div>
          </div>
          
          {/* Second row */}
          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
            <div className="col-span-6">
              <MediumCard data={cardsData.mediumCards[1]} />
            </div>
            <div className="col-span-3">
              <SmallCard data={cardsData.smallCards[2]} delay={300} />
            </div>
            <div className="col-span-3">
              <SmallCard data={cardsData.smallCards[3]} delay={400} />
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden space-y-4 md:space-y-6 lg:space-y-8">
          {/* First row - two small cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <SmallCard data={cardsData.smallCards[0]} delay={100} />
            <SmallCard data={cardsData.smallCards[1]} delay={200} />
          </div>
          
          {/* Second row - medium card */}
          <div>
            <MediumCard data={cardsData.mediumCards[0]} />
          </div>
          
          {/* Third row - two small cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <SmallCard data={cardsData.smallCards[2]} delay={300} />
            <SmallCard data={cardsData.smallCards[3]} delay={400} />
          </div>
          
          {/* Fourth row - medium card */}
          <div>
            <MediumCard data={cardsData.mediumCards[1]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsHero; 