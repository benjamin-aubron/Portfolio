"use client";

import { useChangeLocale, useCurrentLocale } from "../../public/locales/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";

export default function LanguageSwitch() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <Select
      value={locale}
      onValueChange={(lang) => changeLocale(lang as "fr" | "en")}
    >
      <SelectTrigger className="flex justify-center items-center w-[40px]">
        <SelectValue placeholder={locale === "fr" ? "🇫🇷" : "🇬🇧"} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fr">🇫🇷</SelectItem>
        <SelectItem value="en">🇬🇧</SelectItem>
      </SelectContent>
    </Select>
  );
}
