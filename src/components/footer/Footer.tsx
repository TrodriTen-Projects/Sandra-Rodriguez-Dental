import Logo from "../navbar/Logo";
import ContactIcons from "../contact/ContactIcons";
import SocialIcons from "../contact/SocialIcons";
import SectionTitle from '../SectionTitle';
import { BRAND, EXTERNAL_LINKS } from '@/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primaryDark pt-20 pb-3 border-t border-primary text-white">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Logo Section - Left side */}
          <div className="mb-6 md:mb-0">
            <Logo width={300} isWhite={true}/>
          </div>

          {/* Right side columns wrapper */}
          <div className="w-full md:w-auto flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Contact Column */}
            <div className="text-left mb-2 md:mb-0">
              <SectionTitle header="h2" className="text-xl font-medium mb-2">
                Contáctanos
              </SectionTitle>
              <ContactIcons showSocialIcons={false} />
            </div>

            {/* Social Media Column */}
            <div className="text-left mb-6 md:mb-0">
              <SectionTitle header="h2" className="text-xl font-medium mb-4">
                Redes Sociales
              </SectionTitle>
              <SocialIcons iconClassName="h-7 w-7" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-300 mt-8">
          © {currentYear} {BRAND.NAME}. Todos los derechos reservados.
          Sitio creado por <a href={EXTERNAL_LINKS.DEVELOPER_PORTFOLIO} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">zShuck</a>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
