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
    href: '/tratamientos',
    isDropdown: true,
    subLinks: [
      // { 
      //   key: 'implantes', 
      //   label: 'Implantes', 
      //   href: '/tratamientos/implantes',
      //   subLinkItems: [
      //     { key: 'coronas', label: 'Coronas', href: '/tratamientos/implantes/coronas' },
      //     { key: 'carillas', label: 'Carillas', href: '/tratamientos/implantes/carillas' }
      //   ]
      // },
      { 
        key: 'protesis', 
        label: 'Prótesis', 
        href: '/tratamientos/protesis',
        disabled: true,
        subLinkItems: [
          { key: 'fija', label: 'Prótesis dental fija', href: '/tratamientos/protesis/fija', image: '/hippy.webp' },
          { key: 'sobreimplantes', label: 'Prótesis dental sobre implantes', href: '/tratamientos/protesis/sobreimplantes', image: '/pelirroja.webp' },
          { key: 'sobredientes', label: 'Prótesis dental sobre dientes', href: '/tratamientos/protesis/sobredientes', image: '/sobrediente.webp' },
          { key: 'removible', label: 'Prótesis dental removible', href: '/tratamientos/protesis/removible', image: '/removible.webp' },
          { key: 'nometal', label: 'Coronas libres de metal', href: '/tratamientos/protesis/coronas/nometal', image: '/corona_no_metal.webp' },
          { key: 'porcelana', label: 'Coronas metal porcelana', href: '/tratamientos/protesis/coronas/porcelana', image: '/corona_metal.webp' },
          { key: 'sobreimplante', label: 'Coronas sobre implantes', href: '/tratamientos/protesis/coronas/sobreimplante', image: '/corona_sobreimplante.webp' },
        ]
      },
      { 
        key: 'blanqueamientos', 
        label: 'Estética Dental', 
        disabled: true,
        href: '/tratamientos/estetica',
        subLinkItems: [
          { key: 'blanqueamiento', label: 'Blanqueamiento', href: '/tratamientos/estetica/blanqueamientos', image: '/blanqueamientos.webp' },
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
  