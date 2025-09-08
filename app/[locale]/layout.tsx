import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Benjamin AUBRON Portfolio",
	description:
		"Portfolio of Benjamin AUBRON, presenting his skills and projects.",
	authors: { name: 'Benjamin AUBRON' }
};

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

export default async function LocaleLayout({ params, children }: Props) {
	const { locale } = await params;
	const messages = await loadMessages(locale);

	return (
		<html lang={locale} className="scroll-smooth">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{/* Fournit le contexte i18n au reste de l'app */}
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
