"use client";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useIsClient } from "@/lib/utils";
import { useId } from 'react';

export default function LanguageSwitch() {
	const router = useRouter();
	const locale = useLocale();
	const isClient = useIsClient();
	const id = useId();


	const handleLanguageChange = (newLocale: string) => {
		router.push(`/${newLocale}`);
	};

	if (!isClient) {
		return (
			<div className="flex justify-center items-center md:w-[40px] w-[160px] bg-neutral-800 md:bg-inherit cursor-pointer h-10 rounded-md border border-input px-3 py-2 text-sm">
				{locale === "fr" ? "🇫🇷" : "🇬🇧"}
			</div>
		);
	}

	return (
		<Select value={locale} onValueChange={handleLanguageChange}  >
			<SelectTrigger className="flex justify-center items-center md:w-[40px] w-[160px] bg-neutral-800 md:bg-inherit cursor-pointer" id={id}>
				<SelectValue placeholder={locale === "fr" ? "🇫🇷" : "🇬🇧"} />
			</SelectTrigger>
			<SelectContent className="bg-neutral-900 text-neutral-200 border-neutral-800 rounded-md w-[160px]">
				<SelectItem value="fr">🇫🇷</SelectItem>
				<SelectItem value="en">🇬🇧</SelectItem>
			</SelectContent>
		</Select>
	);
}
