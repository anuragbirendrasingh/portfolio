import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PDFDocument from 'pdfkit';

// Fix for ES modules __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Importing our generated data
import { jobsData, blogsData } from './src/lib/data.js';

const BASE_URL = 'https://anuragbirendra.dev';

// Collect all URLs
const urls = [
  `${BASE_URL}/`,
  `${BASE_URL}/jobs`,
  `${BASE_URL}/blogs`
];

jobsData.forEach(job => urls.push(`${BASE_URL}/jobs/${job.slug}`));
blogsData.forEach(blog => urls.push(`${BASE_URL}/blogs/${blog.slug}`));

// Generate TXT
const txtPath = path.join(__dirname, 'all-website-urls.txt');
fs.writeFileSync(txtPath, urls.join('\n'), 'utf8');
console.log('✅ Successfully generated all-website-urls.txt');

// Generate PDF
const pdfPath = path.join(__dirname, 'all-website-urls.pdf');
const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream(pdfPath));

doc.fontSize(24).font('Helvetica-Bold').text('All Website URLs', { align: 'center' }).moveDown();
doc.fontSize(12).font('Helvetica').text(`Total URLs: ${urls.length}`, { align: 'center' }).moveDown(2);

doc.fontSize(10);
urls.forEach((url, index) => {
  doc.fillColor('blue')
     .text(`${index + 1}. ${url}`, {
       link: url,
       underline: true
     })
     .moveDown(0.5);
});

doc.end();
console.log('✅ Successfully generated all-website-urls.pdf');
