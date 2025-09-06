// i18n/request.ts
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
	const supportedLocales = ["en", "fr"];

	if (!locale || !supportedLocales.includes(locale)) {
		locale = "en";
	}

	return {
		locale,
		messages: (await import(`../messages/${locale}.json`)).default,
	};
});
