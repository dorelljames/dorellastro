import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      date: z.date(),
      featured_image: image().optional(),
      categories: z.array(z.string()).optional(),
      url: z.string().optional(),
      description: z.string().optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};
