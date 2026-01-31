'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { FontSizeControl, useTheme } from '@repo/ui';
import { useTranslations } from '@/lib/translations';
import { Moon, Sun, Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();
  const { theme, setTheme } = useTheme();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const currentLocale = pathname.split('/')[1] || 'en';
  const currentLanguage = LANGUAGES.find((lang) => lang.code === currentLocale) || LANGUAGES[0];
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const switchLocale = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
    setIsLangOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto] gap-4 items-center">
          <Link href={`/${currentLocale}`} className="font-bold text-xl">
            Portfolio
          </Link>
          <nav className="hidden md:flex gap-6 justify-center">
            <Link href={`/${currentLocale}/about`} className="hover:underline transition-colors">
              {t('common.about')}
            </Link>
            <Link href={`/${currentLocale}/projects`} className="hover:underline transition-colors">
              {t('common.projects')}
            </Link>
            <Link href={`/${currentLocale}/blog`} className="hover:underline transition-colors">
              {t('common.blog')}
            </Link>
            <Link href={`/${currentLocale}/contact`} className="hover:underline transition-colors">
              {t('common.contact')}
            </Link>
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <FontSizeControl />
            <div className="relative" ref={dropdownRef}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLangOpen(!isLangOpen)}
                aria-label="Select language"
                className="flex items-center gap-2"
              >
                <span className="text-base">{currentLanguage.flag}</span>
                <span className="hidden sm:inline">{currentLanguage.name}</span>
                <Globe className="h-4 w-4 sm:hidden" />
              </Button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background border rounded-md shadow-lg z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLocale(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-muted transition-colors ${
                        currentLocale === lang.code ? 'bg-muted' : ''
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
