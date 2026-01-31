import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import EmotionRegistry from '@/components/emotion-registry';
import { Providers } from '@/components/providers';
import { TranslationsProvider } from '@/lib/translations';
import { getMessages } from '@/lib/messages';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - Full Stack Developer',
  description: 'Modern portfolio showcasing cutting-edge web development',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <EmotionRegistry>
          <TranslationsProvider messages={messages}>
            <Providers>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </Providers>
          </TranslationsProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
