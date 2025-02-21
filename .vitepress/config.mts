import { defineConfig, UserConfig } from 'vitepress'
import { generateSidebar, withSidebar } from 'vitepress-sidebar';
import { withI18n, } from 'vitepress-i18n';
// import { VitePressI18nOptions } from 'vitepress-i18n/types.ts';

const editLinkPattern = `/:path`;
// https://vitepress.dev/reference/site-config
const vitePressConfig: UserConfig = defineConfig({
  title: "UFactory Docs",
  description: "A VitePress Site",
  lastUpdated: true,
  // outDir: '../docs-dist',
  // cleanUrls: true,
  markdown: {
    math: true
  },
  rewrites: {
    'en/:rest*': ':rest*'
  },
})

const defaultLocale: string = 'en';
const supportLocales: string[] = [defaultLocale, 'zhHans'];

const commonSidebarConfig: any = {
  debugPrint: false,
  manualSortFileNameByPriority: ['introduction.md', 'guide', 'advanced-usage'],
  collapsed: true,
  capitalizeFirst: false,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  // frontmatterOrderDefaultValue: 9, // For 'CHANGELOG.md'
  // sortMenusByFrontmatterOrder: true,
  sortMenusOrderNumericallyFromLink: true,
};

const vitePressSidebarConfig = [
  ...supportLocales.map((lang) => {
    return {
      ...commonSidebarConfig,
      documentRootPath: `/${lang}`,
      resolvePath: defaultLocale === lang ? '/' : `/${lang}/`,
      ...(defaultLocale === lang ? {} : { basePath: `/${lang}/` })
    };
  })
];


const vitePressI18nConfig: any = {
  locales: supportLocales,
  debugPrint: false,
  rootLocale: defaultLocale,
  searchProvider: 'local',
  description: {
    en: 'Documentation for UFACTORY products. It covers user manual, API documentation, support articles and frequently asked questions (FAQs).',
    zhHans:
      'UFACTORY中文文档库，包括用户手册，API手册，技术支持文章，FAQ。'
  },
  themeConfig: {
    en: {
      nav: [
        {
          text: 'Official Website',
          link: 'https://ufactory.cc'
        },
        {
          text: 'Contact Us',
          link: 'https://www.ufactory.cc/contact-us/'
        },

      ],
      outline: {
        label: 'On this Page',
        level: [2, 4]
      },
    },
    zhHans: {
      nav: [
        {
          text: '官方网站',
          link: 'https://cn.ufactory.cc'
        },
        {
          text: '联系我们',
          link: 'https://cn.ufactory.cc/contact-us/'
        },
      ],
      outline: {
        label: '页面导航',
        level: [2, 4]
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xArm-Developer/ufactory_usermanual' }
    ],
    // search: {
    //   provider: 'local'
    // },
    // editLink: {
    //   pattern: editLinkPattern
    // },
  }
};

export default defineConfig(
  withSidebar(withI18n(vitePressConfig, vitePressI18nConfig), vitePressSidebarConfig)
);
