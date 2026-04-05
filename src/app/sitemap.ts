import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ballr.club';

  const staticPages = [
    '',
    '/about',
    '/leagues',
    '/create',
    '/different',
    '/blog',
    '/careers',
    '/feature-request',
    '/goal-of-the-month',
    '/player-of-the-month',
    '/vote',
    '/th',
    '/pickup-football-bangkok',
    '/play-football-bangkok',
    '/expat-football-bangkok',
    '/amateur-football-bangkok',
  ];

  const blogPages = [
    '/blog/best-times-play-football-bangkok-weather',
    '/blog/building-consistent-football-community',
    '/blog/expat-football-guide-southeast-asia',
    '/blog/how-to-organize-pickup-football-bangkok',
    '/blog/rules-for-fair-pickup-soccer',
    '/blog/team-balancing-casual-soccer',
  ];

  const cityPages = [
    '/leagues/bangkok',
    '/leagues/berlin',
    '/leagues/bali',
  ];

  const cityGuidePages = [
    '/city-guide',
    '/city-guide/bangkok',
    '/city-guide/berlin',
    '/city-guide/bali',
  ];

  const seoPages = [
    '/seo/amateur-fussball-bangkok',
    '/seo/expat-fussball-bangkok',
    '/seo/fussball-spielen-bangkok',
    '/seo/pickup-fussball-bangkok',
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...blogPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...cityPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...cityGuidePages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...seoPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
