"use client";
import React from "react";
import ImageCarousel from "./ImageCarousel";

interface ProcesoPaso {
  numero: number;
  descripcion: string;
}

interface TratamientoProcesoProps {
  pasos: ProcesoPaso[];
  imagenes: string[];
  tituloSecundario: string;
  altPrefix: string;
}

export default function TratamientoProceso({ pasos, imagenes, tituloSecundario, altPrefix }: TratamientoProcesoProps) {
  return (
    <section className="mb-12 md:mb-20 max-w-7xl mx-auto py-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <ImageCarousel 
            images={imagenes} 
            altPrefix={altPrefix}
          />
        </div>
        <div className="bg-gray-50 md:p-10 rounded-lg">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">{tituloSecundario}</h3>
          <ol className="space-y-6 md:space-y-8">
            {pasos.map((paso) => (
              <li key={paso.numero} className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-teal-500 text-white flex items-center justify-center text-base md:text-2xl font-bold">
                  {paso.numero}
                </div>
                <div>
                  <p className="text-gray-700 text-base md:text-lg">{paso.descripcion}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
} 