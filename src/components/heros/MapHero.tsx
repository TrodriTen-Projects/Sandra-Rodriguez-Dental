'use client'
import React from 'react';
import SectionTitle from '../SectionTitle';

const MapHero = () => {
  return (
    <div>
      <SectionTitle header="h2" className="text-2xl font-bold !mb-12 md:!mb-16 px-4 text-center" uppercase>
        ¿Dónde estamos?
      </SectionTitle>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.549789113958!2d-74.05527548255617!3d4.674045399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b54a093df51%3A0xc781e379efd4e2e2!2sDra.%20Sandra%20Liliana%20Rodriguez%20-%20Rehabilitaci%C3%B3n%20Oral!5e0!3m2!1sen!2ses!4v1736201592784!5m2!1sen!2ses" width="100%" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Google Maps'></iframe>
    </div>
  );
};

export default MapHero;
