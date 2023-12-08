const fs = require('fs');
const path = require('path');

const publicPath = path.join(__dirname, '..', 'build');
const pages = ['/', '/blog', '/policy', '/terms', '/blogpost/:post']; // Add your pages here

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `<url><loc>https://pptdesigner.co/${page}</loc></url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), sitemap);
