const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Technical writing resources',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    searchPlaceholder: 'Search...',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/dharmelolar/technical-writing-resources/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'articles',
            'books',
            'courses',
            'youtube',
            'communities',
            'tools',
            'who-pay',
            'open-source',
            'open-projects.md',
            'blogs',
            'interviews',
            'publication',
            'job-boards',
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
