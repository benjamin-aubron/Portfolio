// app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";

// Génère les pages statiques pour 'en' et 'fr'
export function generateStaticParams() {
	return [{ locale: "en" }, { locale: "fr" }];
}

async function loadMessages(locale: string) {
	// Import dynamique du fichier de traduction correspondant
	const messages = await import(`../../messages/${locale}.json`);
	return messages.default;
}

type Props = {
	params: Promise<{ locale: string }>;
	children: React.ReactNode;
};

export default async function LocaleLayout({
	params,
	children,
}: Props) {
	const { locale } = await params;
	const messages = await loadMessages(locale);

	return (
		<html lang={locale}>
			<body>
				{/* Fournit le contexte i18n au reste de l'app */}
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
