import { defineCollection, z } from 'astro:content';

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
    link: z.string().optional(),
    description: z.string().optional(),
    projects: z
      .object({
        name: z.string(),
        link: z.string(),
      })
      .array()
      .optional(),
    type: z.enum(['Library/Framework', 'Language', 'Tool/Other']),
    jobs: z
      .object({
        name: z.string(),
        link: z.string(),
      })
      .array()
      .optional(),
  }),
});

export const collections = { project, vector, skill };
