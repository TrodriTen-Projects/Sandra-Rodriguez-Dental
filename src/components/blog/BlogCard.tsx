import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/content';

interface BlogCardProps {
  post: BlogPost;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="hidden-initially group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Cover image */}
      <Link href={`/blog/${post.slug}`} className="relative block h-52 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Category badge */}
        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
          {post.category}
        </span>
      </Link>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold text-gray leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {post.title}
          </h2>
        </Link>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{post.excerpt}</p>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
          <span>{formatDate(post.date)}</span>
          <span>{post.readTime} min de lectura</span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primaryDark transition-colors duration-200 uppercase tracking-widest"
        >
          Leer artículo
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
