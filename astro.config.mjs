import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'SCEIS Placement Handbook',
      lastUpdated: true,
      editLink: {
        baseUrl: 'https://github.com/termon/sceis-placement-handbook/edit/main/'
      },
      logo: {
        src: '/src/assets/logo-ulster.svg',
        //replacesTitle: true,
      },
      // social: {
      //   github: 'https://github.com/termon/sceis-placement-handbook',
      // },
      sidebar: [
        {
          label: 'Placement Handbook',
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
        //   label: 'Placement Visitor',
        //   autogenerate: { directory: 'academic' },
        // },
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
