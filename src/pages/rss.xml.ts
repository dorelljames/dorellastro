import rss from '@astrojs/rss'
import type { APIContext } from 'astro'

export function GET(context: APIContext) {
	return rss({
		// `<title>` field in output xml
		title: 'd||ell',
		// `<description>` field in output xml
		description: 'Personal site of Dorell James',
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#contextsite
		site: context.site || 'https://www.dorelljames.com',
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: [],
		// (optional) inject custom xml
		customData: `<language>en-us</language>`
	})
}
