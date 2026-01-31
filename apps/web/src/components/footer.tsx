'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-auto bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="grid gap-2">
            <h3 className="font-semibold" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.25rem, 1.25rem)' }}>Portfolio</h3>
            <p className="text-muted-foreground" style={{ fontSize: 'clamp(0.875rem, 1.25vw + 0.25rem, 1rem)' }}>
              Building modern web applications with cutting-edge technologies.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="font-semibold" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.25rem, 1.25rem)' }}>Quick Links</h3>
            <nav className="grid gap-2" style={{ fontSize: 'clamp(0.875rem, 1.25vw + 0.25rem, 1rem)' }}>
              <Link href={`/${currentLocale}/about`} className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href={`/${currentLocale}/projects`} className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href={`/${currentLocale}/blog`} className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link href={`/${currentLocale}/contact`} className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="grid gap-2">
            <h3 className="font-semibold" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.25rem, 1.25rem)' }}>Connect</h3>
            <div className="grid gap-2" style={{ fontSize: 'clamp(0.875rem, 1.25vw + 0.25rem, 1rem)' }}>
              <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground" style={{ fontSize: 'clamp(0.875rem, 1.25vw + 0.25rem, 1rem)' }}>
          © {currentYear} Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
