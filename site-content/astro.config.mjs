import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'CI/CD Best Practises',
      social: {
        github: 'https://github.com/thejokersthief/cicdbestpractises',
      },
      sidebar: [
        {
          label: 'Continuous Integration',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Caching', link: '/ci/caching/' },
          ],
        },
        {
          label: 'Providers',
          autogenerate: { directory: 'providers' },
        },
        {
          label: 'Languages',
          autogenerate: { directory: 'languages' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
