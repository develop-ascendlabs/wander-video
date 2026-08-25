import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    /** Basename under /videos (causeway, garden, garden-banner, …) */
    video: z.string(),
    videoAlt: z.string(),
    videoCaption: z.string(),
    aspect: z.enum(['vertical', 'landscape']).default('vertical'),
    targetQuery: z.string(),
  }),
});

export const collections = { blog };
