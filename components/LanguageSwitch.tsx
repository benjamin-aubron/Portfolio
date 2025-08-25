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
      <SelectTrigger className="flex justify-center items-center md:w-[40px] w-[160px] bg-neutral-800 md:bg-inherit cursor-pointer">
        <SelectValue placeholder="🇫🇷" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fr">🇫🇷</SelectItem>
        <SelectItem value="en">🇬🇧</SelectItem>
      </SelectContent>
    </Select>
  );
}
