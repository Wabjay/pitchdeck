// import { createSitemap } from 'sitemap';
import { createSitemap } from 'sitemap'
import { writeFileSync } from 'fs';
import { join } from 'path';

const generateSitemap = async () => {
  const pages = ['/', '/blog', '/blogspot/:post', '/pitch-decks', '/pitch/:pitch']; // Add the root URL

  // Add other URLs in your React application
  // For example, if you have a /about and /contact page:
  // pages.push('/about');
  // pages.push('/contact');

  // ... add more pages as needed

  const sitemap = createSitemap({
    hostname: 'https://Pitchdeck.design', // Replace with your domain
    urls: pages.map(page => ({ url: page, changefreq: 'daily', priority: 0.7 })),
  });

  // Write the sitemap to a file
  const sitemapPath = join(__dirname, 'public', 'sitemap.xml');
  writeFileSync(sitemapPath, sitemap.toString());

  console.log('Sitemap generated:', sitemapPath);
};

generateSitemap();
