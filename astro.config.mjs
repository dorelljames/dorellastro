import { defineConfig, passthroughImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import rehypeExternalLinks from 'rehype-external-links'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.dorelljames.com',
	integrations: [
		tailwind(),
		sitemap(),
		partytown({
			config: {
				forward: ['dataLayer.push']
			}
		})
	],
	image: {
		service: passthroughImageService()
	},
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: '_blank',
					rel: 'noopener nofollow',
					content: {
						type: 'text',
						value: '↗'
					}
				}
			]
		]
	}
})
