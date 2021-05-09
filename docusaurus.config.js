/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Bens Physics Lesson',
  tagline: 'Physics is swag',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bean-y', // Usually your GitHub org/user name.
  projectName: 'physics-website', // Usually your repo name.
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
              href: 'https://github.com',
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
