import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const diary = defineCollection({
  loader: glob({ base: './src/content/diary', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    trip: z.string(),
    location_name: z.string(),
    weather_temp: z.number(),
    images: z.array(z.string()).optional(),
  }),
});

export const collections = { diary };
