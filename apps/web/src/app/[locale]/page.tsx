'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from '@/lib/translations';

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 lg:py-32">
        <div className="grid gap-6 md:gap-8 max-w-5xl mx-auto">
          <h1 className="font-bold text-center" style={{ fontSize: 'clamp(2rem, 5vw + 1rem, 4rem)' }}>
            {t('hero.greeting')} <span className="text-primary">Saransh Mehra</span>
          </h1>
          <p className="text-muted-foreground text-center" style={{ fontSize: 'clamp(1.125rem, 2vw + 0.5rem, 1.5rem)' }}>{t('hero.role')}</p>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.25rem, 1.25rem)' }}>
            {t('hero.description')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto w-full pt-4 md:pt-8">
            <Button size="lg" className="w-full">View Projects</Button>
            <Button variant="outline" size="lg" className="w-full">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="font-bold text-center mb-8 md:mb-12" style={{ fontSize: 'clamp(1.5rem, 3vw + 0.5rem, 2.25rem)' }}>
          What I Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Web Applications</h3>
              <p className="text-muted-foreground">
                Full-stack applications using Next.js, React, and TypeScript
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Cloud Architecture</h3>
              <p className="text-muted-foreground">
                Scalable AWS infrastructure with serverless patterns
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">API Development</h3>
              <p className="text-muted-foreground">
                RESTful and GraphQL APIs with proper documentation
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
