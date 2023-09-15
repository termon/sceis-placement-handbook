import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'SCEIS Placement',
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
          label: 'Student Handbook',
          //   autogenerate: { directory: 'handbook' },
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Background', link: '/' },
            { label: 'Introduction', link: '/introduction' },
            { label: 'Preparation', link: '/preparation' },
            { label: 'On Placement', link: '/on-placement', },
          ],
        },
        {
          label: 'Tools',
         
          items: [
            { label: 'Recruit Student Guide', link: '/recruit/student' },   
            { label: 'Handshake Student Guide', link: '/tools/handshake' },             
            //{ label: 'For Academics', link: '/recruit/academic' },        
          ],          
        },
        // {
        //   label: 'Links',
        //   autogenerate: { directory: 'links' },
        // },
        // {
        //   label: 'Useful Links',
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: 'Login to Recruit', link: 'https://recruit.ulster.ac.uk' },
        //     { label: 'Login to Handshake', link: 'https://ulster.joinhandshake.co.uk/login' },
        //   ],
        // },

      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
