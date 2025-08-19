"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageSwitch() {
  return (
    <Select>
      <SelectTrigger className="flex justify-center items-center w-[40px]">
        <SelectValue placeholder="🇫🇷" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fr">🇫🇷</SelectItem>
        <SelectItem value="en">🇬🇧</SelectItem>
      </SelectContent>
    </Select>
  );
}
