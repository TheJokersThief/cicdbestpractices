import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'CI/CD Best Practises',
      logo: {
        dark: './src/assets/logo.png',
        light: './src/assets/logo-light.png',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/thejokersthief/cicdbestpractises',
      },
      sidebar: [
        {
          label: 'Continuous Integration',
          items: [
            { label: 'Caching', link: '/ci/caching/' },
            { label: 'Parallelisation', link: '/ci/parallelisation/' },
            { label: 'Workload Identity', link: '/ci/workload-identity/' },
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
