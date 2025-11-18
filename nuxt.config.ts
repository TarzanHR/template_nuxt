export default defineNuxtConfig({

	modules: [
		'@nuxtjs/i18n',
		'@nuxt/eslint',
		// N'active @prisma/nuxt qu'en développement
		...(process.env.NODE_ENV === 'production' ? [] : ['@prisma/nuxt']),
	],
	devtools: { enabled: process.env.NODE_ENV !== 'production' },
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
