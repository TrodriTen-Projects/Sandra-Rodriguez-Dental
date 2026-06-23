import React from "react";
import SectionTitle from '../SectionTitle';

interface ValueItem {
  icono: string;
  titulo: string;
  descripcion: string;
}

interface FirstVisitSectionProps {
  titulo: string;
  descripcion: string[];
  valores: ValueItem[];
}

function renderIcon(icono: string) {
  switch (icono) {
    case "home":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case "clock":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "smile":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function FirstVisitSection({
  titulo,
  descripcion,
  valores
}: FirstVisitSectionProps) {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        {/* Main heading and description */}
        <div className="mx-auto mb-16 text-center">
          <SectionTitle header="h3" className="font-semibold text-center" uppercase>
            {titulo}
          </SectionTitle>
          <div className="prose prose-lg text-gray-700">
            {descripcion.map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="w-full max-w-5xl mx-auto h-px bg-secondaryLight mb-16"></div>
        {/* Three values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {valores.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                {renderIcon(value.icono)}
              </div>
              <SectionTitle header="h3" className="text-xl font-semibold text-primaryDark mb-3" uppercase={false}>
                {value.titulo}
              </SectionTitle>
              <p className="text-gray-700">{value.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 