// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/i18n', '@nuxt/eslint', '@prisma/nuxt'],
	devtools: { enabled: true },
	compatibilityDate: '2025-07-15',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
	i18n: {
		defaultLocale: 'fr',
		locales: [
			{ code: 'en', name: 'English', file: 'en.json' },
			{ code: 'fr', name: 'France', file: 'fr.json' },
		],
		strategy: 'prefix_except_default',
		langDir: 'locales',
	},
});
