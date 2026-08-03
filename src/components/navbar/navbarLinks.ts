export type SubLinkItem = {
  key: string;
  label: string;
  href: string;
  image: string;
  disabled?: boolean;
};

export type SubLink = {
  key: string;
  label: string;
  href: string;
  disabled?: boolean;
  subLinkItems?: SubLinkItem[];
};

export type NavLink = {
  key: string;
  label: string;
  href: string;
  isDropdown?: boolean;
  subLinks?: SubLink[];
};

export const navbarLinks: NavLink[] = [
  { key: 'home', label: 'Inicio', href: '/' },
  { 
    key: 'treatments', 
    label: 'Tratamientos', 
    href: '/tratamientos-dentales',
    isDropdown: true,
    subLinks: [
      { 
        key: 'protesis', 
        label: 'Prótesis', 
        href: '/tratamientos-dentales',
        disabled: true,
        subLinkItems: [
          { key: 'fija', label: 'Prótesis dental fija', href: '/tratamientos-dentales/protesis-dentales-fija', image: '/hippy.webp' },
          { key: 'sobreimplantes', label: 'Prótesis dental sobre implantes', href: '/tratamientos-dentales/protesis-dentales-sobreimplantes', image: '/pelirroja.webp' },
          { key: 'sobredientes', label: 'Prótesis dental sobre dientes', href: '/tratamientos-dentales/protesis-dentales-sobredientes', image: '/sobrediente.webp' },
          { key: 'removible', label: 'Prótesis dental removible', href: '/tratamientos-dentales/protesis-dentales-removible', image: '/removible.webp' },
          { key: 'nometal', label: 'Coronas libres de metal', href: '/tratamientos-dentales/protesis-dentales-coronas-nometal', image: '/corona_no_metal.webp' },
          { key: 'porcelana', label: 'Coronas metal porcelana', href: '/tratamientos-dentales/protesis-dentales-coronas-porcelana', image: '/corona_metal.webp' },
          { key: 'sobreimplante', label: 'Coronas sobre implantes', href: '/tratamientos-dentales/protesis-dentales-coronas-sobreimplante', image: '/corona_sobreimplante.webp' },
        ]
      },
      { 
        key: 'blanqueamientos', 
        label: 'Estética Dental', 
        disabled: true,
        href: '/tratamientos-dentales',
        subLinkItems: [
          { key: 'blanqueamiento', label: 'Blanqueamiento', href: '/tratamientos-dentales/estetica-dental-blanqueamientos', image: '/blanqueamientos.webp' },
        ]
      },
    ]
  },
  { key: 'blog', label: 'Blog', href: '/blog' },
  // { key: 'specialists', label: 'Especialistas', href: '/especialistas' },
  // { key: 'services', label: 'Servicios', href: '/servicios' },
  // { key: 'successCases', label: 'Casos de Éxito', href: '/casos' },
  // { key: 'contact', label: 'Contacto', href: '/contacto' },
  { key: 'citaPrevia', label: 'Pide cita previa', href: 'https://wa.me/+573212786958'}
];
  