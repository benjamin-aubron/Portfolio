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

export default function LanguageSwitch() {
	const router = useRouter();
	const locale = useLocale();

	const handleLanguageChange = (newLocale: string) => {
		router.push(`/${newLocale}`);
	};

	return (
		<Select value={locale} onValueChange={handleLanguageChange}>
			<SelectTrigger className="flex justify-center items-center md:w-[40px] w-[160px] bg-neutral-800 md:bg-inherit cursor-pointer">
				<SelectValue placeholder={locale === "fr" ? "🇫🇷" : "🇬🇧"} />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="fr">🇫🇷</SelectItem>
				<SelectItem value="en">🇬🇧</SelectItem>
			</SelectContent>
		</Select>
	);
}
