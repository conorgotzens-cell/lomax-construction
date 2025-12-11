import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { servicesData, marketsData, locationsData } from '../src/data/siteContent.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.lomaxconstruction.com';

const staticRoutes = [
    '/',
    '/about',
    '/services',
    '/projects',
    '/locations',
    '/contact'
];

const generateSitemap = () => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Static Routes
    staticRoutes.forEach(route => {
        xml += `  <url>\n`;
        xml += `    <loc>${DOMAIN}${route}</loc>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n`;
        xml += `  </url>\n`;
    });

    // Services
    Object.keys(servicesData).forEach(slug => {
        xml += `  <url>\n`;
        xml += `    <loc>${DOMAIN}/services/${slug}</loc>\n`;
        xml += `    <changefreq>monthly</changefreq>\n`;
        xml += `    <priority>0.9</priority>\n`;
        xml += `  </url>\n`;
    });

    // Markets
    Object.keys(marketsData).forEach(slug => {
        xml += `  <url>\n`;
        xml += `    <loc>${DOMAIN}/markets/${slug}</loc>\n`;
        xml += `    <changefreq>monthly</changefreq>\n`;
        xml += `    <priority>0.9</priority>\n`;
        xml += `  </url>\n`;
    });

    // Locations
    Object.keys(locationsData).forEach(slug => {
        xml += `  <url>\n`;
        xml += `    <loc>${DOMAIN}/locations/${slug}</loc>\n`;
        xml += `    <changefreq>monthly</changefreq>\n`;
        xml += `    <priority>0.8</priority>\n`;
        xml += `  </url>\n`;
    });

    xml += '</urlset>';

    const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, xml);
    console.log(`Sitemap generated at ${outputPath}`);
};

generateSitemap();
