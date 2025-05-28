import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

// Define your website URL
const siteUrl = 'https://lmaisolutionist.com';

// List all the pages on your website
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/#services', changefreq: 'weekly', priority: 0.8 },
  { url: '/#process', changefreq: 'monthly', priority: 0.8 },
  { url: '/#testimonials', changefreq: 'monthly', priority: 0.7 },
  { url: '/#faq', changefreq: 'monthly', priority: 0.7 },
  { url: '/#contact', changefreq: 'monthly', priority: 0.9 }
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: siteUrl });

// Return a promise that resolves with your XML string
const sitemap = async () => {
  try {
    // Create a readable stream from your links array
    const links = pages.map(page => ({
      url: page.url,
      changefreq: page.changefreq,
      priority: page.priority
    }));
    
    // Pipe the readable stream to the sitemap stream
    const data = await streamToPromise(Readable.from(links).pipe(stream));
    
    // Write the XML to a file
    createWriteStream('./public/sitemap.xml').write(data.toString());
    
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

sitemap();