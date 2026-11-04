#!/usr/bin/env node
/* =========================================================
   build-articles.js
   Reads articles-data.js → generates SEO-friendly static HTML
   Creates: /news/YYYY/MM/DD/slug.html + sitemap.xml + robots.txt
   Usage:   node build-articles.js
   ========================================================= */
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://kabaddione.com';

/* --- Load article data (safely evaluate the browser-style JS) --- */
const dataCode = fs.readFileSync('articles-data.js', 'utf8');
const win = {};
new Function('window', dataCode)(win);
const ARTICLES = win.ARTICLES || [];
const CATEGORY_INFO = win.CATEGORY_INFO || {};

if (!ARTICLES.length) {
    console.error('❌ No articles found in articles-data.js');
    process.exit(1);
}

/* --- Load template --- */
const template = fs.readFileSync('article-template.html', 'utf8');

/* --- Helpers --- */
function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
function escapeJson(s) {
    return JSON.stringify(String(s));
}
function formatDateLong(iso) {
    return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
function slugify(str) {
    return String(str).toLowerCase().trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
function categoryMeta(cat) {
    return CATEGORY_INFO[cat] || {
        label: cat,
        icon: 'fa-newspaper',
        gradient: 'linear-gradient(135deg,#4A0E4E,#6C3CE0)'
    };
}
function articleParts(a) {
    const d = new Date(a.date);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const slug = a.slug || a.id || slugify(a.title);
    return { y, m, day, slug, path: `/news/${y}/${m}/${day}/${slug}.html` };
}
function initials(name) {
    return String(name).split(/\s+/).map(w => w[0]).slice(0,2).join('').toUpperCase();
}
function buildRelatedHtml(current) {
    const related = ARTICLES
        .filter(a => a.id !== current.id && (
            a.category === current.category ||
            (a.tags || []).some(t => (current.tags || []).includes(t))
        ))
        .slice(0, 3);
    if (!related.length) return '';
    return `
    <section class="related">
        <h2><i class="fa-solid fa-newspaper"></i> Related Articles</h2>
        <div class="related-grid">
            ${related.map(r => {
                const m = categoryMeta(r.category);
                const p = articleParts(r);
                return `
                <a href="${p.path}" class="related-card">
                    <div class="rc-img" style="background:${m.gradient}"><i class="fa-solid ${m.icon}"></i></div>
                    <div class="rc-body">
                        <div class="rc-tag">${escapeHtml(m.label)}</div>
                        <h3>${escapeHtml(r.title)}</h3>
                        <div class="rc-date">${formatDateLong(r.date)} · ${escapeHtml(r.readTime)}</div>
                    </div>
                </a>`;
            }).join('')}
        </div>
    </section>`;
}

/* --- Generate each article --- */
let count = 0;
const generatedPaths = [];

ARTICLES.forEach(article => {
    const meta = categoryMeta(article.category);
    const { y, m, day, slug, path: urlPath } = articleParts(article);
    const canonical = BASE_URL + urlPath;

    const html = template
        .replace(/\{\{TITLE\}\}/g, escapeHtml(article.title))
        .replace(/\{\{DESCRIPTION\}\}/g, escapeHtml(article.excerpt))
        .replace(/\{\{CANONICAL\}\}/g, canonical)
        .replace(/\{\{OG_URL\}\}/g, canonical)
        .replace(/\{\{OG_TITLE\}\}/g, escapeHtml(article.title))
        .replace(/\{\{OG_DESC\}\}/g, escapeHtml(article.excerpt))
        .replace(/\{\{CATEGORY_LABEL\}\}/g, escapeHtml(meta.label))
        .replace(/\{\{CATEGORY_ICON\}\}/g, meta.icon)
        .replace(/\{\{CATEGORY_GRADIENT\}\}/g, meta.gradient)
        .replace(/\{\{CATEGORY_SLUG\}\}/g, escapeHtml(article.category))
        .replace(/\{\{DATE_ISO\}\}/g, article.date)
        .replace(/\{\{DATE_FORMATTED\}\}/g, formatDateLong(article.date))
        .replace(/\{\{AUTHOR\}\}/g, escapeHtml(article.author))
        .replace(/\{\{AUTHOR_INITIALS\}\}/g, escapeHtml(initials(article.author)))
        .replace(/\{\{READ_TIME\}\}/g, escapeHtml(article.readTime))
        .replace(/\{\{CONTENT\}\}/g, article.content)
        .replace(/\{\{TAGS_HTML\}\}/g, (article.tags || [])
            .map(t => `<span class="art-tag">#${escapeHtml(t)}</span>`).join(''))
        .replace(/\{\{RELATED_HTML\}\}/g, buildRelatedHtml(article))
        .replace(/\{\{ARTICLE_ID\}\}/g, escapeHtml(article.id))
        .replace(/\{\{SLUG\}\}/g, slug)
        .replace(/\{\{TITLE_JSON\}\}/g, escapeJson(article.title));

    const dir = path.join('news', y, m, day);
    fs.mkdirSync(dir, { recursive: true });
    const filePath = path.join(dir, slug + '.html');
    fs.writeFileSync(filePath, html, 'utf8');
    generatedPaths.push(urlPath);
    count++;
    console.log(`  ✓ ${urlPath}`);
});

/* --- /news/index.html → redirect to /news.html --- */
fs.mkdirSync('news', { recursive: true });
fs.writeFileSync('news/index.html',
    `<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/news.html"><link rel="canonical" href="${BASE_URL}/news.html"></head><body><script>location.replace('/news.html')</script></body></html>`,
    'utf8');
console.log('  ✓ /news/index.html (redirect)');

/* --- sitemap.xml --- */
const STATIC_PAGES = [
    { loc: '/', priority: '1.0', changefreq: 'daily' },
    { loc: '/news.html', priority: '0.9', changefreq: 'daily' },
    { loc: '/overlay.html', priority: '0.8', changefreq: 'weekly' },
    { loc: '/matches.html', priority: '0.8', changefreq: 'hourly' },
    { loc: '/download.html', priority: '0.7', changefreq: 'weekly' },
];
const today = new Date().toISOString().split('T')[0];
const sitemapEntries = [
    ...STATIC_PAGES.map(p => `
    <url>
        <loc>${BASE_URL}${p.loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${p.changefreq}</changefreq>
        <priority>${p.priority}</priority>
    </url>`),
    ...ARTICLES.map(a => `
    <url>
        <loc>${BASE_URL}${articleParts(a).path}</loc>
        <lastmod>${a.date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>`)
].join('');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapEntries}
</urlset>
`;
fs.writeFileSync('sitemap.xml', sitemap, 'utf8');
console.log(`  ✓ sitemap.xml (${STATIC_PAGES.length + ARTICLES.length} URLs)`);

/* --- robots.txt --- */
fs.writeFileSync('robots.txt',
`User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`, 'utf8');
console.log('  ✓ robots.txt');

console.log(`\n🎉 Build complete — ${count} article${count !== 1 ? 's' : ''} generated.`);
