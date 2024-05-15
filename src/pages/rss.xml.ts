import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'

export async function GET(context: APIContext) {
	const [blogPosts, blogArchives] = await Promise.all([
		getCollection('blog', ({ data }) => {
			return data.categories?.includes('Web Development') && !data?.draft
		}),
		getCollection('archives', ({ data }) => {
			return !data.categories?.includes('Web Development') && !data?.draft
		})
	])

	const blogItems = blogPosts?.map((post) => ({
		title: post.data.title,
		pubDate: post.data.date,
		description: post.data.description,
		link: `/blog/${post.slug}`
	}))

	const blogArchiveItems = blogArchives?.map((post) => ({
		title: post.data.title,
		pubDate: post.data.date,
		description: post.data.description,
		link: `/blog/archives/${post.slug}`
	}))

	return rss({
		// `<title>` field in output xml
		title: 'Blog | d||ell',
		// `<description>` field in output xml
		description: 'Personal blog of @dorelljames. I love you and coding!',
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#contextsite
		site: context.site || 'https://www.dorelljames.com',
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: [...blogItems, ...blogArchiveItems]
		// (optional) inject custom xml
		// customData: `<language>en-us</language>`
	})
}
