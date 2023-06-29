import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://termon.github.io',
  base: '/sceis-placement-handbook',
  integrations: [
    starlight({
      title: 'SCEIS Placement Handbook',
      editLink: {
        baseUrl: 'https://github.com/termon/sceis-placement-handbook/edit/main/'
      },
      logo: {
        src: '/src/assets/logo-ulster.svg',
        //light: '/src/assets/light-logo-engineer.svg',
        //dark: '/src/assets/dark-logo-engineer.svg',
      },
      // social: {
      //   github: 'https://github.com/termon/sceis-placement-handbook',
      // },
      sidebar: [
        {
          label: 'Handbook',
          //   autogenerate: { directory: 'handbook' },
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Background', link: '/' },
            { label: 'Introduction', link: '/introduction' },
            { label: 'Preparation', link: '/preparation' },
            { label: 'On Placement', link: '/on-placement' },
          ],
        },
        {
          label: 'Tools',
          autogenerate: { directory: 'student' },
        },
        // {
        //   label: 'Useful Links',
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: 'Home', link: '/' },
        //     { label: 'Recruit', link: 'https://recruit.ulster.ac.uk' },
        //     { label: 'Handshake', link: 'https://ulster.joinhandshake.co.uk/login' },
        //   ],
        // },

      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
