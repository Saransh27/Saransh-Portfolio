'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from '@/lib/translations';

export default function BlogPage() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  const posts = [
    {
      slug: 'getting-started-nextjs',
      title: 'Getting Started with Next.js 16',
      excerpt: 'Learn how to build modern web applications with Next.js 16 and React 19.',
      date: '2026-01-15',
    },
    {
      slug: 'typescript-best-practices',
      title: 'TypeScript Best Practices',
      excerpt: 'Improve your TypeScript code with these essential best practices.',
      date: '2026-01-20',
    },
    {
      slug: 'turborepo-monorepo',
      title: 'Building Monorepos with Turborepo',
      excerpt: 'Set up and manage a monorepo using Turborepo for better code organization.',
      date: '2026-01-25',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-20">
        <div className="grid gap-6 md:gap-8 mb-8">
          <h1 className="font-bold" style={{ fontSize: 'clamp(1.875rem, 4vw + 0.5rem, 3rem)' }}>Blog</h1>
          <p className="text-muted-foreground" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.25rem, 1.25rem)' }}>Technical insights and tutorials</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 auto-rows-fr">
          {posts.map((post) => (
            <Card key={post.slug}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h2 className="font-semibold" style={{ fontSize: 'clamp(1.25rem, 2.5vw + 0.5rem, 1.75rem)' }}>{post.title}</h2>
                  <span className="text-muted-foreground whitespace-nowrap" style={{ fontSize: 'clamp(0.875rem, 1.25vw + 0.25rem, 1rem)' }}>{post.date}</span>
                </div>
                <p className="text-muted-foreground mb-4" style={{ fontSize: 'clamp(0.875rem, 1.25vw + 0.25rem, 1rem)' }}>{post.excerpt}</p>
                <Button variant="outline" asChild>
                  <Link href={`/${currentLocale}/blog/${post.slug}`}>Read More →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
  );
}
