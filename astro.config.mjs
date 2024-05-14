import { defineConfig } from 'astro/config'
import { defineConfig, passthroughImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import rehypeExternalLinks from 'rehype-external-links'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.dorelljames.com',
	integrations: [tailwind(), sitemap()],
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
					content: { type: 'text', value: ' ↗' }
				}
			]
		]
	}
})
