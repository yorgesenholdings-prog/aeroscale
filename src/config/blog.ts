import type { BlogPost } from "@/types";

/**
 * No posts yet — this is intentionally empty. Add entries here to publish;
 * the listing page and individual post route both read from this array
 * automatically, so no other code changes are needed to add a post.
 */
export const blogPosts: BlogPost[] = [];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatBlogDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
