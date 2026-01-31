import enMessages from '../../messages/en.json';
import esMessages from '../../messages/es.json';
import frMessages from '../../messages/fr.json';

const messages = {
  en: enMessages,
  es: esMessages,
  fr: frMessages,
};

export function getMessages(locale: string) {
  return messages[locale as keyof typeof messages] || messages.en;
}
