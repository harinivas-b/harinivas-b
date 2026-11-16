import fs from 'node:fs';

const files = [
  'dist/index.html',
  'dist/about/index.html',
  'dist/vlsi-analog-ic/index.html',
  'dist/projects/index.html',
  'dist/leadership-public-speaking/index.html',
  'dist/entrepreneurship/index.html'
];

let allPassed = true;

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  const h1Match = content.match(/<h1>(.*?)<\/h1>/);
  const canonicalMatch = content.match(/rel="canonical"\s+href="(.*?)"/);
  const hasGVerify = content.includes('google-site-verification');
  const hasJsonLd = content.includes('application/ld+json');

  const title = titleMatch ? titleMatch[1] : null;
  const h1 = h1Match ? h1Match[1] : null;
  const canonical = canonicalMatch ? canonicalMatch[1] : null;

  console.log(`[TEST] File: ${f}`);
  console.log(`       Title: ${title}`);
  console.log(`       H1: ${h1}`);
  console.log(`       Canonical: ${canonical}`);
  console.log(`       Google Verification: ${hasGVerify ? 'PASS' : 'FAIL'}`);
  console.log(`       JSON-LD: ${hasJsonLd ? 'PASS' : 'FAIL'}`);

  if (!title || !h1 || !canonical || !hasGVerify || !hasJsonLd) {
    allPassed = false;
  }
}

if (!allPassed) {
  console.error('Validation FAILED!');
  process.exit(1);
} else {
  console.log('\nALL 6 ROUTES PASSED INITIAL HTML AUDIT (Titles, H1s, Canonicals, JSON-LD, Search Console Verified).');
}
