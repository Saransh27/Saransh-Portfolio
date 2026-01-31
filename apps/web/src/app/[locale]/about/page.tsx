'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from '@/lib/translations';

export default function AboutPage() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  return (
    <div className="container mx-auto px-4 py-8 md:py-20">
        <div className="grid gap-6 md:gap-8">
          <h1 className="font-bold" style={{ fontSize: 'clamp(1.875rem, 4vw + 0.5rem, 3rem)' }}>About</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardContent className="p-6 md:p-8 grid gap-4">
                <h2 className="font-semibold" style={{ fontSize: 'clamp(1.25rem, 2.5vw + 0.5rem, 1.75rem)' }}>Who I Am</h2>
                <p className="leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.25rem, 1.125rem)' }}>About page content will go here. I'm a passionate developer focused on creating amazing web experiences.</p>
                <p className="leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.25rem, 1.125rem)' }}>With expertise in modern web technologies, I build scalable and performant applications.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 md:p-8 grid gap-4">
                <h3 className="font-semibold" style={{ fontSize: 'clamp(1.125rem, 2vw + 0.25rem, 1.5rem)' }}>Skills</h3>
                <ul className="space-y-2" style={{ fontSize: 'clamp(0.875rem, 1.25vw + 0.25rem, 1rem)' }}>
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Node.js</li>
                  <li>• CSS & Tailwind</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  );
}
