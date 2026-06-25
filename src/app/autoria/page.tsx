import type { Metadata } from 'next';
import AutoriaGuard from '@/components/AutoriaGuard';

export const metadata: Metadata = {
  title: 'Autoría y mantenimiento del sitio',
  description:
    'Esta versión del sitio fue reconstruida y es mantenida actualmente por TrodriTen.',
  robots: { index: false, follow: false },
};

export default function AutoriaPage() {
  return <AutoriaGuard />;
}
