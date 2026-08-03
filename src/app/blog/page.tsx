import type { Metadata } from 'next';
import Image from 'next/image';
import BlogCard from '@/components/blog/BlogCard';
import { getAllPosts } from '@/content';
import ScrollAnimator from '@/components/ScrollAnimator';

export const metadata: Metadata = {
  title: 'Blog Dental | Dra. Sandra Liliana Rodríguez',
  description:
    'Guías educativas sobre coronas, prótesis, rehabilitación oral y salud dental, escritas por la Dra. Sandra Rodríguez, prostodoncista en Bogotá.',
  keywords:
    'blog dental, salud bucal, coronas dentales, prótesis dental, rehabilitación oral, bruxismo, odontología Bogotá',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog Dental | Dra. Sandra Liliana Rodríguez',
    description:
      'Artículos informativos sobre prostodoncia y salud dental por la Dra. Sandra Rodríguez, Bogotá.',
    url: 'https://www.sandrarodriguezdental.com/blog',
    siteName: 'Sandra Liliana Rodriguez Dental',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: 'https://www.sandrarodriguezdental.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Blog Dental - Dra. Sandra Liliana Rodriguez',
      },
    ],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <ScrollAnimator threshold={0.1} rootMargin="50px">
      <main>
        {/* ── Hero — same pattern as TratamientoHero ── */}
        <section className="relative w-full h-[60vh] md:h-[60vh]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/home.webp"
              alt="Blog Sandra Rodríguez Dental"
              fill
              priority
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#005268]/80 to-transparent" />
          </div>
          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-2xl">
              <p className="text-sm text-white/90 mb-2">Guías educativas · Salud Dental</p>
              <h1 className="text-white text-5xl font-bold leading-tight mb-4">Blog Dental</h1>
              <p className="text-xl text-white mb-8 max-w-xl leading-relaxed">
                Artículos informativos escritos por la Dra. Sandra Rodríguez para que llegues a tu consulta con las preguntas correctas.
              </p>
            </div>
          </div>
        </section>

        {/* ── Grid ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>
    </ScrollAnimator>
  );
}
