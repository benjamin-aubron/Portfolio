"use client";

import { useChangeLocale, useCurrentLocale } from "../../public/locales/client";

export default function LanguageSwitch() {

  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const toggleLanguage = () => {
    const newLang = locale === "fr" ? "en" : "fr";
    changeLocale(newLang);
  };

  return (
    <button onClick={toggleLanguage} className="hover:bg-neutral-800 rounded-md py-2 px-4 text-left">
      {locale === "fr" ? "🇫🇷" : "🇬🇧"}
    </button>
  );
}
