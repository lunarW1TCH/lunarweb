import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const project = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    technologies: z.array(
      z.object({
        name: z.string(),
        link: z.string().url().optional(),
      })
    ),
    imagePath: z.string(),
    links: z
      .array(
        z.object({
          name: z.string(),
          link: z.string().url(),
        })
      )
      .optional(),
  }),
});

export const collections = { blog, project };
