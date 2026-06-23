import React from "react";
import SectionTitle from "../SectionTitle";
interface TipoOpcion {
  nombre: string;
  descripcion: string;
  mejorPara: string;
  resultado: string;
}

interface TratamientoTiposProps {
  titulo: string;
  opciones: TipoOpcion[];
}

export default function TratamientoTipos({ titulo, opciones }: TratamientoTiposProps) {
  return (
    <section className="mb-20 my-8 md:my-16 max-w-7xl mx-auto">
      <div className="bg-gray-100 p-6 md:p-10 rounded-lg">
        <SectionTitle header="h3" className="text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-6">
          {titulo}
        </SectionTitle>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-primary/10 text-primaryDark">
              <th className="px-6 py-4 text-left text-base md:text-lg font-semibold rounded-tl-lg">Tipos</th>
              <th className="px-6 py-4 text-left text-base md:text-lg font-semibold">Recomendado</th>
              <th className="px-6 py-4 text-left text-base md:text-lg font-semibold rounded-tr-lg">Procedimiento</th>
            </tr>
          </thead>
          <tbody>
            {opciones.map((opcion, index) => (
              <tr key={index} className="border-b last:border-b-0 hover:bg-primary/5 transition">
                <td className="px-6 py-5 align-top font-medium text-primaryDark whitespace-normal w-1/4">
                  {opcion.nombre}
                  <div className="text-xs text-gray-500 mt-1">{opcion.descripcion}</div>
                </td>
                <td className="px-6 py-5 align-top w-2/5 text-gray-700">{opcion.mejorPara}</td>
                <td className="px-6 py-5 align-top w-1/4 text-gray-700">{opcion.resultado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
} 