'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from '@/lib/translations';

export default function ProjectsPage() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  return (
    <div className="container mx-auto px-4 py-8 md:py-20">
        <div className="grid gap-6 md:gap-8 mb-8">
          <h1 className="font-bold" style={{ fontSize: 'clamp(1.875rem, 4vw + 0.5rem, 3rem)' }}>Projects</h1>
          <p className="text-muted-foreground" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.25rem, 1.25rem)' }}>Explore my latest work and side projects</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2" style={{ fontSize: 'clamp(1.125rem, 2vw + 0.25rem, 1.5rem)' }}>Project {i}</h3>
                <p className="text-muted-foreground" style={{ fontSize: 'clamp(0.875rem, 1.25vw + 0.25rem, 1rem)' }}>Project description here.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
  );
}