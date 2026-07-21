import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { IconBadge } from "@/components/ui/IconBadge";
import { getSortedBlogPosts, formatBlogDate } from "@/config/blog";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Blog | AeroScale",
  description:
    "Practical ideas on small business strategy, marketing, systems, and operations from the AeroScale team.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getSortedBlogPosts();

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />

      <section className="border-b border-border-subtle bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
            FROM THE BLOG
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-slate sm:text-5xl">
            Practical ideas for growing and running your business.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Notes on strategy, marketing, systems, and the practical side of running a small
            business — written by the AeroScale team.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page">
          {posts.length === 0 ? (
            <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-dashed border-border-subtle bg-white p-10 text-center">
              <IconBadge icon={Newspaper} size="lg" />
              <h2 className="mt-4 text-xl font-bold text-brand-slate">
                New posts are on the way.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                We&apos;re working on our first articles. Check back soon, or{" "}
                <Link href="/contact" className="font-semibold text-teal-text hover:text-teal-text-dark">
                  get in touch
                </Link>{" "}
                if you have a topic you&apos;d like us to cover.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl border border-border-subtle bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-text hover:shadow-md"
                >
                  <time dateTime={post.date} className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                    {formatBlogDate(post.date)}
                  </time>
                  <h2 className="mt-2 text-lg font-semibold text-brand-slate group-hover:text-teal-text">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-text">
                    Read more
                    <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
