import SectionTitle from '../SectionTitle';
import Image from 'next/image';
const DoctorHero = () => {
  // Removed unused images array

  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-4 lg:py-12 max-w-7xl">
        <SectionTitle header="h2" className="pb-4 md:pb-8 text-center font-bold mb-8 text-primary-dark" uppercase>
          ¿Quiénes somos?
        </SectionTitle>
        <div className="flex flex-col md:flex-row md:items-stretch md:gap-10 lg:gap-16">
          {/* Carousel section */}
          <div className="mb-2 md:mb-0 w-full md:w-[45%] lg:w-[40%] flex items-center justify-center md:items-center md:justify-center">
            <div className="w-full flex items-center justify-center rounded-3xl duration-300">
              <Image
                src="/sandra.webp"
                width={500}
                height={500}
                alt="Dra. Sandra Liliana Rodríguez"
                className="object-cover rounded-3xl w-full"
              />
            </div>
          </div>

          {/* Content section */}
          <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col justify-center">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-md p-4 py-8 md:p-10 lg:p-12 relative">
              {/* Badge */}
   
              <SectionTitle header="h2" className="text-2xl md:text-3xl font-extrabold !mb-2 text-primary-dark">
                Dra. Sandra Liliana Rodríguez
              </SectionTitle>
              <div className="bg-primary text-white px-4 py-1 my-2 rounded-full shadow-lg text-sm font-semibold tracking-wide max-w-[212px]">
                +20 años de experiencia
              </div>
              <SectionTitle header="h2" className="!mb-4 text-xl md:text-2xl text-primary/80 font-medium" uppercase={false}>
                Especialista en Rehabilitación Oral y Prostodoncia
              </SectionTitle>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Con más de 20 años de experiencia clínica y docente en Bogotá, la Dra. Sandra Liliana Rodríguez es referente en rehabilitación oral, implantes dentales y prostodoncia. Ha formado a generaciones de odontólogos, combinando su pasión por la enseñanza con un compromiso constante por la excelencia y la atención personalizada.
              </p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                En nuestro consultorio dental en Bogotá, ofrecemos tratamientos avanzados de rehabilitación oral e implantes dentales, empleando tecnología de última generación para lograr resultados efectivos, duraderos y naturales. Cada paciente recibe un trato profesional y cálido, con comunicación clara y soluciones adaptadas a sus necesidades, restaurando funcionalidad y estética dental.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nuestra filosofía se basa en la confianza, la ética y la excelencia, garantizando que cada paciente disfrute de un ambiente seguro y acogedor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHero;
