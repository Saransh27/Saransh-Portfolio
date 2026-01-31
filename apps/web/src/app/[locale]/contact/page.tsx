'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from '@/lib/translations';

export default function ContactPage() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  return (
    <div className="container mx-auto px-4 py-8 md:py-20">
        <div className="grid gap-6 md:gap-8 mb-8">
          <h1 className="font-bold" style={{ fontSize: 'clamp(1.875rem, 4vw + 0.5rem, 3rem)' }}>Contact</h1>
          <p className="text-muted-foreground" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.25rem, 1.25rem)' }}>Get in touch with me</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardContent className="p-6 md:p-8">
              <form className="grid gap-6">
                <div className="grid gap-2">
                  <label className="font-medium" style={{ fontSize: 'clamp(0.875rem, 1.25vw + 0.25rem, 1rem)' }}>Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border rounded-md text-base"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border rounded-md text-base"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 border rounded-md text-base resize-y"
                    rows={6}
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 md:p-8 grid gap-4">
              <h3 className="font-semibold" style={{ fontSize: 'clamp(1.125rem, 2vw + 0.25rem, 1.5rem)' }}>Contact Info</h3>
              <div className="grid gap-3" style={{ fontSize: 'clamp(0.875rem, 1.25vw + 0.25rem, 1rem)' }}>
                <p>📧 your@email.com</p>
                <p>🌐 yourwebsite.com</p>
                <p>📍 Your Location</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
