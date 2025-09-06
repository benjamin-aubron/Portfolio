import { useTranslations } from "next-intl";

export default function HomePage() {
	const t = useTranslations("HomePage");
	return <h1 className="text-2xl text-white">{t("title")}</h1>;
}
