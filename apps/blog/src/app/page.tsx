import { Card, CardContent } from '@repo/ui';
import { Button } from '@repo/ui';
import Link from 'next/link';

const posts = [
  {
    slug: 'building-with-nextjs-15',
    title: 'Building Modern Apps with Next.js 15',
    excerpt: 'Exploring the latest features and best practices',
    date: '2026-01-30',
    readTime: '5 min read',
  },
  {
    slug: 'turborepo-monorepo',
    title: 'Mastering Turborepo for Monorepos',
    excerpt: 'How to structure and optimize your monorepo',
    date: '2026-01-28',
    readTime: '8 min read',
  },
  {
    slug: 'aws-deployment',
    title: 'Deploying to AWS with Amplify',
    excerpt: 'A comprehensive guide to AWS deployment',
    date: '2026-01-25',
    readTime: '10 min read',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="font-bold text-xl">
            Blog
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Technical Blog</h1>
            <p className="text-xl text-muted-foreground">
              Insights on web development, architecture, and best practices
            </p>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.slug}>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold hover:text-primary">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href={`/blog/${post.slug}`}>Read More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
