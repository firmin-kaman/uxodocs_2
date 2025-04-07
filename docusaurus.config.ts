module.exports = {
  title: 'Uxopian Docs',
  url: 'https://uxopian.com',
  baseUrl: '/',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: false,
        blog: false,
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'arender',
        path: 'arender-docs',
        routeBasePath: 'arender',
        sidebarPath: require.resolve('./arender-docs/sidebarArender.ts'),
        lastVersion: 'current',
        versions: {
          current: { 
            label: '🚀 Arender Latest',
            badge: true
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'fast2',
        path: 'fast2-docs',
        routeBasePath: 'fast2',
        sidebarPath: require.resolve('./fast2-docs/sidebarFast2.ts'),
        lastVersion: 'current',
        versions: {
          current: { 
            label: '🚀 fast2 Latest',
            badge: true
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'flowerdocs',
        path: 'flowerdocs-docs',
        routeBasePath: 'flowerdocs',
        sidebarPath: require.resolve('./flowerdocs-docs/sidebarFlowerdocs.ts'),
        lastVersion: 'current',
        versions: {
          current: { 
            label: '🚀 flowerdocs Latest',
            badge: true
          },
        },
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: 'support_us',
      content:
        'Nous test cherchons à améliorer nos documents, veuillez répondre à <a target="_blank" rel="noopener noreferrer" href="#">cette enquête</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    navbar: {
      hideOnScroll: true,
      title: 'Uxopian Docs',
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Arender',
          docsPluginId: 'arender', // Lie ce bouton à la doc "arender"
          activeBaseRegex: `/arender/`, // Critique pour la détection d'activité
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Fast2',
          docsPluginId: 'fast2', // Lie ce bouton à la doc "fast2"
          activeBaseRegex: `/fast2/`, // Critique pour la détection d'activité
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'FlowerDocs',
          docsPluginId: 'flowerdocs', // Lie ce bouton à la doc "flowerdocs"
          activeBaseRegex: `/flowerdocs/`, // Critique pour la détection d'activité
        },
        // Menu déroulant des versions (sera dynamique selon la doc active)
        // Menu déroulant pour Arender
        {
          type: 'docsVersionDropdown',
          position: 'right',
          docsPluginId: 'arender',
          dropdownActiveClassDisabled: true,
        },
        // Menu déroulant pour Fast2
        {
          type: 'docsVersionDropdown',
          position: 'right',
          docsPluginId: 'fast2',
          dropdownActiveClassDisabled: true,
        },
        // Menu déroulant pour FlowerDocs
        {
          type: 'docsVersionDropdown',
          position: 'right',
          docsPluginId: 'flowerdocs',
          dropdownActiveClassDisabled: true,
        },
      ],
    },
  },
};