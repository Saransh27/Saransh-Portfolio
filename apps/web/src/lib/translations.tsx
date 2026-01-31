'use client';

import { createContext, useContext } from 'react';

const TranslationsContext = createContext<any>({});

export function TranslationsProvider({
  messages,
  children,
}: {
  messages: any;
  children: React.ReactNode;
}) {
  return (
    <TranslationsContext.Provider value={messages}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations() {
  const messages = useContext(TranslationsContext);
  return (key: string) => {
    const keys = key.split('.');
    let value: any = messages;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
}
