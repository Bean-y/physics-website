/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Bens Physics Site',
  tagline: 'Online Physics Made Easy',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bean-y', // GitHub org/user name.
  projectName: 'physics-website', // repo name.
  themeConfig: {
    navbar: {
      title: 'Ben\'s Physics Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/physics-logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Lessons',
        },


      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {

        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Bean-y/physics-website',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Benjamin Ofsoski.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Bean-y/physics-website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Bean-y/physics-website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
