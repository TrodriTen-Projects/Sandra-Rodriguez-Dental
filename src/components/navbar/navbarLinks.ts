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
          { key: 'implantes', label: 'Implantes dentales', href: '/tratamientos-dentales/implantes-dentales', image: '/corona_sobreimplante.webp' },
        ]
      },
      {
        key: 'blanqueamientos',
        label: 'Estética Dental',
        disabled: true,
        href: '/tratamientos-dentales',
        subLinkItems: [
          { key: 'disenoSonrisa', label: 'Diseño de sonrisa', href: '/tratamientos-dentales/diseno-de-sonrisa', image: '/home.webp' },
          { key: 'blanqueamiento', label: 'Blanqueamiento', href: '/tratamientos-dentales/estetica-dental-blanqueamientos', image: '/blanqueamientos.webp' },
          { key: 'resina', label: 'Resina dental', href: '/tratamientos-dentales/resina-dental', image: '/dental_card.webp' },
        ]
      },
      {
        key: 'prevencion',
        label: 'Prevención y cuidado',
        disabled: true,
        href: '/tratamientos-dentales',
        subLinkItems: [
          { key: 'limpieza', label: 'Limpieza dental', href: '/tratamientos-dentales/limpieza-dental', image: '/consultorio.webp' },
          { key: 'ferula', label: 'Férula para bruxismo', href: '/tratamientos-dentales/ferula-para-bruxismo', image: '/consultorio_2.webp' },
        ]
      },
    ]
  },
  {
    key: 'problemas',
    label: 'Problemas',
    href: '/problemas-dentales',
    isDropdown: true,
    subLinks: [
      { key: 'p-faltan', label: 'Me faltan dientes', href: '/problemas-dentales/me-faltan-dientes' },
      { key: 'p-roto', label: 'Diente roto o fracturado', href: '/problemas-dentales/diente-roto' },
      { key: 'p-bruxismo', label: 'Bruxismo (apretar o rechinar)', href: '/problemas-dentales/bruxismo' },
      { key: 'p-manchados', label: 'Dientes manchados', href: '/problemas-dentales/dientes-manchados' },
      { key: 'p-desgaste', label: 'Sonrisa desgastada', href: '/problemas-dentales/desgaste-dental' },
    ],
  },
  { key: 'blog', label: 'Blog', href: '/blog' },
  { key: 'tarifas', label: 'Tarifas', href: '/tarifas' },
  // { key: 'specialists', label: 'Especialistas', href: '/especialistas' },
  // { key: 'services', label: 'Servicios', href: '/servicios' },
  // { key: 'successCases', label: 'Casos de Éxito', href: '/casos' },
  // { key: 'contact', label: 'Contacto', href: '/contacto' },
  { key: 'citaPrevia', label: 'Pide cita previa', href: 'https://wa.me/+573212786958'}
];
  