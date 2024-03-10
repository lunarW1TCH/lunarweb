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
    links: z
      .array(
        z.object({
          name: z.string(),
          link: z.string().url(),
        })
      )
      .optional(),
    priority: z.number().int(),
    createdOn: z.date(),
    updatedOn: z.date().optional(),
  }),
});

const vector = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    related: z
      .object({
        name: z.string(),
        link: z.string(),
      })
      .array()
      .optional(),
  }),
});

const skill = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    link: z.string().url(),
    description: z.string().optional(),
    projects: z
      .object({
        name: z.string(),
        link: z.string(),
      })
      .array()
      .optional(),
    type: z.enum(['Library/Framework', 'Language', 'Tool/Other']),
  }),
});

export const collections = { blog, project, vector, skill };
