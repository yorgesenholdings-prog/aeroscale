import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { blogPosts, getBlogPostBySlug, formatBlogDate } from "@/config/blog";
import { buildMetadata } from "@/lib/metadata";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Post Not Found | AeroScale",
      description: "This blog post could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${post.title} | AeroScale`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <article className="bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <time dateTime={post.date} className="text-xs font-semibold uppercase tracking-wide text-text-muted">
            {formatBlogDate(post.date)}
            {post.author && ` · ${post.author}`}
          </time>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-brand-slate sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-8 space-y-5">
            {post.content.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
