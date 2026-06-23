import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getAllPosts, BlogSection, BlogSubsection, CONTACT } from '@/content';
import ScrollAnimator from '@/components/ScrollAnimator';

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Renders plain body text with **bold** support and paragraph splits */
function BodyText({ text }: { text: string }) {
  return (
    <>
      {text.split('\n\n').map((paragraph, i) => (
        <p key={i} className="text-gray-600 leading-relaxed mb-4">
          {paragraph.split(/(\*\*[^*]+\*\*)/).map((chunk, j) =>
            chunk.startsWith('**') && chunk.endsWith('**') ? (
              <strong key={j} className="text-gray font-semibold">{chunk.slice(2, -2)}</strong>
            ) : (
              <span key={j}>{chunk}</span>
            )
          )}
        </p>
      ))}
    </>
  );
}

/** Renders body text with a single inline internal link inside the correct paragraph */
function BodyWithLink({ text, link }: { text: string; link: { anchor: string; url: string } }) {
  return (
    <>
      {text.split('\n\n').map((paragraph, i) => {
        if (!paragraph.includes(link.anchor)) {
          return (
            <p key={i} className="text-gray-600 leading-relaxed mb-4">
              {paragraph}
            </p>
          );
        }
        const [before, after] = paragraph.split(link.anchor);
        return (
          <p key={i} className="text-gray-600 leading-relaxed mb-4">
            {before}
            <Link
              href={link.url}
              className="text-primary font-semibold underline decoration-2 underline-offset-4 hover:text-primaryDark transition-colors"
            >
              {link.anchor}
            </Link>
            {after}
          </p>
        );
      })}
    </>
  );
}

function Subsection({ sub }: { sub: BlogSubsection }) {
  return (
    <div className="pl-4 border-l-2 border-secondaryLight">
      <h3 className="text-lg font-semibold text-primaryDark mb-3">{sub.heading}</h3>
      {sub.internalLink ? (
        <BodyWithLink text={sub.body} link={sub.internalLink} />
      ) : (
        <BodyText text={sub.body} />
      )}
    </div>
  );
}

function SectionBlock({ section }: { section: BlogSection }) {
  return (
    <div className="hidden-initially mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray mb-5 pb-3 border-b border-secondaryLight/40">
        {section.heading}
      </h2>

      {section.body && <BodyText text={section.body} />}

      {section.list && (
        <ul className="mt-4 space-y-3">
          {section.list.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
              <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {section.subsections && (
        <div className="mt-6 space-y-8">
          {section.subsections.map((sub, i) => (
            <Subsection key={i} sub={sub} />
          ))}
        </div>
      )}
    </div>
  );
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();

  if (!post) notFound();

  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <ScrollAnimator threshold={0.08} rootMargin="60px">
      <main>
      {/* ── Hero — same pattern as TratamientoHero ── */}
      <section className="relative w-full h-[100vh] md:h-[80vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            priority
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005268]/80 to-transparent" />
        </div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              {post.category}
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-3">
              {post.title}
            </h1>
            <p className="text-xl text-white/90 mb-6">{post.subtitle}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/70 text-sm">
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime} min de lectura</span>
              <span>·</span>
              <span>Dra. Sandra Rodríguez</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Intro */}
        <div className="hidden-initially mb-12">
          {post.content.intro.split('\n\n').map((p, i) => (
            <p key={i} className="text-lg text-gray-600 leading-relaxed mb-5 first:font-medium first:text-gray">
              {p}
            </p>
          ))}
        </div>

        {/* Sections */}
        {post.content.sections.map((section, i) => (
          <SectionBlock key={i} section={section} />
        ))}

        {/* Conclusion */}
        <div className="hidden-initially mt-4 mb-10 bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-primaryDark mb-4">Para cerrar</h2>
          {post.content.conclusion.split('\n\n').map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-3 last:mb-0">{p}</p>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="hidden-initially flex items-start gap-3 text-sm text-gray-400 bg-gray-50 rounded-xl p-4 mb-10">
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{post.content.medicalDisclaimer}</span>
        </div>

        {/* CTA */}
        <div className="hidden-initially bg-primaryDark rounded-2xl p-8 md:p-10 text-center">
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
            {post.content.callToAction}
          </p>
          <a
            href={CONTACT.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primaryDark font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-secondaryLight transition-colors duration-200"
          >
            Agenda tu consulta por WhatsApp
          </a>
        </div>
      </article>

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="hidden-initially text-2xl font-bold text-gray mb-6 uppercase tracking-wider">
            También te puede interesar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((relPost) => (
              <Link
                key={relPost.id}
                href={`/blog/${relPost.slug}`}
                className="hidden-initially group flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md border border-gray-100 transition-shadow duration-200"
              >
                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={relPost.coverImage}
                    alt={relPost.coverImageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {relPost.category}
                  </span>
                  <p className="text-sm font-semibold text-gray mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                    {relPost.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      </main>
    </ScrollAnimator>
  );
}
