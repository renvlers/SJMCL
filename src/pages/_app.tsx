import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from "@/layouts/main-layout";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { localeResources } from '@/locales';

import "@/styles/globals.css";

i18n
  .use(initReactI18next)
  .init({
    resources: localeResources,
    fallbackLng: process.env.NEXT_PUBLIC_I18N_FALLBACK_LANGUAGE || 'en',
    lng: 'zh-Hans',
    interpolation: {
      escapeValue: false,
    },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}
