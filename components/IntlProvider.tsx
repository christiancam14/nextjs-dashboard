import React, { PropsWithChildren, useEffect, useState } from "react";
import { IntlProvider as NextIntlProvider } from "next-intl";
import { useLocale } from "../context/LocaleContext";

export default function IntlProvider({ children }: PropsWithChildren) {
  const { locale } = useLocale();
  const [messages, setMessages] = useState<Record<string, string>>({});

  useEffect(() => {
    async function loadMessages() {
      const localeModule = await import(`../locales/${locale}.json`);
      setMessages(localeModule.default);
    }
    loadMessages();
  }, [locale]);

  return (
    <NextIntlProvider messages={messages} locale={locale}>
      {children}
    </NextIntlProvider>
  );
}
