import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog â BallR",
  description:
    "Tips, guides, and stories about pickup football in Bangkok, Bali, and beyond.",
};

const blogPosts = [
  {
    slug: "how-to-organize-pickup-football-bangkok",
    title: "How to Organize Pickup Football in Bangkok",
    excerpt:
      "A practical guide to setting up regular games in Bangkok â from finding venues to managing payments and keeping players coming back.",
    category: "Guide",
    date: "March 2026",
    readTime: "5 min",
  },
  {
    slug: "rules-for-fair-pickup-soccer",
    title: "Rules for Fair Pickup Soccer Games",
    excerpt:
      "The unwritten rules that separate good pickup games from chaotic ones. Spoiler: slide tackling in a friendly is never okay.",
    category: "Culture",
    date: "March 2026",
    readTime: "4 min",
  },
  {
    slug: "building-consistent-football-community",
    title: "Building a Consistent Pickup Football Community",
    excerpt:
      "Why most WhatsApp groups die after 3 months and what you can do differently. Hint: reliability matters more than skill.",
    category: "Community",
    date: "March 2026",
    readTime: "6 min",
  },
  {
    slug: "best-times-play-football-bangkok-weather",
    title: "Best Times to Play Football in Bangkok Weather",
    excerpt:
      "A seasonal breakdown of when to play outdoors in Bangkok, and when you should probably just stay inside and watch the Premier League.",
    category: "Guide",
    date: "March 2026",
    readTime: "4 min",
  },
  {
    slug: "team-balancing-casual-soccer",
    title: "Team Balancing in Casual Soccer: Why It Matters",
    excerpt:
      "The science and art of making fair teams. From ELO ratings to snake drafts â how BallR keeps games competitive.",
    category: "Product",
    date: "March 2026",
    readTime: "5 min",
  },
  {
    slug: "expat-football-guide-southeast-asia",
    title: "The Expat Football Guide to Southeast Asia",
    excerpt:
      "Moving abroad doesn't mean giving up the beautiful game. Here's where (and how) to play in Bangkok, Bali, and beyond.",
    category: "Guide",
    date: "March 2026",
    readTime: "7 min",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            The BallR <span className="text-accent">Blog</span>
          </h1>
          <p className="text-text-secondary text-lg">
            Tips, guides, and stories from the pickup football world.
          </p>
        </div>

        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-surface border border-border/20 rounded-2xl p-6 hover:border-accent/30 transition-all group"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs bg-primary/20 text-accent px-2.5 py-0.5 rounded-lg font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-text-muted">{post.date}</span>
                <span className="text-xs text-text-muted">
                  &middot; {post.readTime} read
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                {post.excerpt}
              </p>
              {post.date !== "Coming Soon" && (
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-4 text-sm text-accent font-medium hover:underline"
                >
                  Read more &rarr;
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
