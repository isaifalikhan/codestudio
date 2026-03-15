export type Tool = {
  slug: string;
  name: string;
  category: string;
  emoji: string;
  tagline: string;
  description: string;
  keywords: string[];
  buildType: 'client';
};

export const tools: Tool[] = [
  // ── IMAGE TOOLS ───────────────────────────────────────────
  {
    slug: 'image-compressor',
    name: 'Image Compressor',
    category: 'Image Tools',
    emoji: '🗜️',
    tagline: 'Compress images up to 80% without quality loss',
    description:
      'Free online image compressor. Reduce PNG, JPG, and WebP file sizes up to 80% without visible quality loss. No upload, works in browser.',
    keywords: ['image compressor', 'compress image online', 'reduce image size', 'jpg compressor', 'png compressor'],
    buildType: 'client',
  },
  {
    slug: 'image-resizer',
    name: 'Image Resizer',
    category: 'Image Tools',
    emoji: '📐',
    tagline: 'Resize images to any dimension instantly',
    description:
      'Free online image resizer. Resize PNG, JPG, WebP to exact pixels or percentage. Maintain aspect ratio. No signup, works instantly in browser.',
    keywords: ['image resizer', 'resize image online free', 'resize photo', 'change image size'],
    buildType: 'client',
  },
  {
    slug: 'image-converter',
    name: 'Image Format Converter',
    category: 'Image Tools',
    emoji: '🔄',
    tagline: 'Convert between JPG, PNG, WebP, and AVIF',
    description:
      'Convert images between JPG, PNG, WebP, and AVIF formats free. No file upload to server. Fast conversion in your browser. Download instantly.',
    keywords: ['image converter', 'jpg to png', 'png to webp', 'convert image format online free'],
    buildType: 'client',
  },
  {
    slug: 'background-remover',
    name: 'Background Remover',
    category: 'Image Tools',
    emoji: '✂️',
    tagline: 'Remove image background instantly with AI',
    description:
      'Remove image background free online. AI-powered background removal in seconds. Download transparent PNG. No signup required.',
    keywords: ['remove background', 'background remover online free', 'remove image background', 'transparent background'],
    buildType: 'client',
  },
  {
    slug: 'favicon-generator',
    name: 'Favicon Generator',
    category: 'Image Tools',
    emoji: '🔖',
    tagline: 'Generate favicon from image or text in seconds',
    description:
      'Free favicon generator. Upload image or type text to create favicons in all sizes (16x16 to 512x512). Get ready-to-use HTML code instantly.',
    keywords: ['favicon generator', 'create favicon free', 'favicon maker', 'website icon generator'],
    buildType: 'client',
  },
  // ── PDF TOOLS ─────────────────────────────────────────────
  {
    slug: 'pdf-compressor',
    name: 'PDF Compressor',
    category: 'PDF Tools',
    emoji: '📄',
    tagline: 'Reduce PDF file size without losing quality',
    description:
      'Compress PDF files free online. Reduce PDF size for email, upload, or storage. Fast, secure, no signup required. Works in browser.',
    keywords: ['pdf compressor', 'compress pdf online free', 'reduce pdf size', 'make pdf smaller'],
    buildType: 'client',
  },
  {
    slug: 'merge-pdf',
    name: 'Merge PDF',
    category: 'PDF Tools',
    emoji: '📎',
    tagline: 'Combine multiple PDF files into one',
    description:
      'Merge multiple PDF files into one free online. Drag to reorder pages. Fast, secure PDF merger. No account required. Download in seconds.',
    keywords: ['merge pdf', 'combine pdf files', 'join pdf online free', 'pdf merger'],
    buildType: 'client',
  },
  {
    slug: 'pdf-to-jpg',
    name: 'PDF to JPG',
    category: 'PDF Tools',
    emoji: '🖼️',
    tagline: 'Convert each PDF page to a JPG image',
    description:
      'Convert PDF pages to JPG images free. High-quality PDF to JPG conversion. Download individual images or as a ZIP file. No signup.',
    keywords: ['pdf to jpg', 'convert pdf to image', 'pdf to jpeg online free', 'extract images from pdf'],
    buildType: 'client',
  },
  {
    slug: 'split-pdf',
    name: 'Split PDF',
    category: 'PDF Tools',
    emoji: '✂️',
    tagline: 'Split PDF into separate pages or ranges',
    description:
      'Split PDF files free online. Extract specific pages or split into separate documents. Fast, secure PDF splitter. No upload limit.',
    keywords: ['split pdf', 'separate pdf pages', 'extract pages from pdf', 'pdf splitter free'],
    buildType: 'client',
  },
  {
    slug: 'word-to-pdf',
    name: 'Word to PDF',
    category: 'PDF Tools',
    emoji: '📝',
    tagline: 'Convert Word documents to PDF instantly',
    description:
      'Convert Word (.docx) to PDF free online. Preserve formatting perfectly. Fast, secure conversion. No software to install. Download instantly.',
    keywords: ['word to pdf', 'convert docx to pdf free', 'doc to pdf converter', 'word document to pdf'],
    buildType: 'client',
  },
  // ── TEXT TOOLS ────────────────────────────────────────────
  {
    slug: 'word-counter',
    name: 'Word Counter',
    category: 'Text Tools',
    emoji: '🔢',
    tagline: 'Count words, characters, and reading time',
    description:
      'Free word counter. Count words, characters, sentences, paragraphs, and reading time. Paste any text for instant real-time analysis.',
    keywords: ['word counter', 'word count tool', 'character counter', 'count words online', 'reading time calculator'],
    buildType: 'client',
  },
  {
    slug: 'character-counter',
    name: 'Character Counter',
    category: 'Text Tools',
    emoji: '🔤',
    tagline: 'Count characters for Twitter, SMS and meta tags',
    description:
      'Free character counter online. Count characters with and without spaces. Show Twitter limit, SMS limit, meta description limit in real time.',
    keywords: ['character counter', 'count characters online', 'twitter character count', 'text length counter'],
    buildType: 'client',
  },
  {
    slug: 'case-converter',
    name: 'Case Converter',
    category: 'Text Tools',
    emoji: '🔡',
    tagline: 'Convert text between UPPER, lower, Title Case',
    description:
      'Free case converter. Convert text to UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case instantly. Paste and copy.',
    keywords: ['case converter', 'text case converter online', 'uppercase to lowercase', 'title case converter'],
    buildType: 'client',
  },
  {
    slug: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    category: 'Text Tools',
    emoji: '📜',
    tagline: 'Generate placeholder text in seconds',
    description:
      'Free Lorem Ipsum generator. Generate placeholder text by paragraphs, sentences, or words. Copy instantly. Used by designers and developers worldwide.',
    keywords: ['lorem ipsum generator', 'placeholder text generator', 'dummy text generator', 'lorem ipsum online'],
    buildType: 'client',
  },
  {
    slug: 'text-to-slug',
    name: 'Text to Slug Converter',
    category: 'Text Tools',
    emoji: '🔗',
    tagline: 'Convert any title to a clean URL slug',
    description:
      'Free slug generator. Convert any title or text to a URL-friendly slug instantly. Perfect for blog posts, page URLs, and filenames. No signup.',
    keywords: ['slug generator', 'url slug converter', 'text to url', 'seo slug generator online'],
    buildType: 'client',
  },
  {
    slug: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    category: 'Text Tools',
    emoji: '🧹',
    tagline: 'Remove duplicate or empty lines from text',
    description:
      'Free duplicate line remover. Paste text to remove duplicate lines, empty lines, or sort alphabetically. Instantly clean and deduplicate any list.',
    keywords: ['remove duplicate lines', 'deduplicate text online', 'remove duplicate text free', 'sort lines alphabetically'],
    buildType: 'client',
  },
  // ── SECURITY TOOLS ────────────────────────────────────────
  {
    slug: 'password-generator',
    name: 'Password Generator',
    category: 'Security Tools',
    emoji: '🔐',
    tagline: 'Generate strong random passwords instantly',
    description:
      'Free strong password generator. Create secure random passwords with custom length and character types. 100% client-side — your password is never stored.',
    keywords: ['password generator', 'strong password generator', 'random password maker', 'secure password creator free'],
    buildType: 'client',
  },
  {
    slug: 'password-strength-checker',
    name: 'Password Strength Checker',
    category: 'Security Tools',
    emoji: '🛡️',
    tagline: 'Check how strong your password is',
    description:
      'Free password strength checker. Test any password and see its strength score, crack time estimate, and improvement tips. Runs entirely in your browser.',
    keywords: ['password strength checker', 'how strong is my password', 'password security tester', 'password checker online'],
    buildType: 'client',
  },
  {
    slug: 'hash-generator',
    name: 'Hash Generator',
    category: 'Security Tools',
    emoji: '#️⃣',
    tagline: 'Generate MD5, SHA-256, SHA-512 hashes',
    description:
      'Free hash generator. Create MD5, SHA-1, SHA-256, SHA-384, SHA-512 cryptographic hashes from any text instantly. Client-side only. No data sent to server.',
    keywords: ['hash generator', 'md5 hash generator', 'sha256 generator online', 'sha512 online hash', 'text to hash'],
    buildType: 'client',
  },
  {
    slug: 'base64-encoder',
    name: 'Base64 Encoder / Decoder',
    category: 'Security Tools',
    emoji: '🔑',
    tagline: 'Encode or decode Base64 strings instantly',
    description:
      'Free Base64 encoder and decoder. Encode text or files to Base64 or decode Base64 back to readable text. Instant, client-side, no signup.',
    keywords: ['base64 encoder', 'base64 decoder online', 'encode base64 free', 'base64 converter'],
    buildType: 'client',
  },
  // ── DEVELOPER TOOLS ───────────────────────────────────────
  {
    slug: 'json-formatter',
    name: 'JSON Formatter',
    category: 'Developer Tools',
    emoji: '📋',
    tagline: 'Format and validate JSON with a colored tree',
    description:
      'Free JSON formatter and validator. Paste raw JSON to get a colored, collapsible tree. Validates syntax and highlights errors instantly. No signup.',
    keywords: ['json formatter', 'json validator online', 'json beautifier', 'format json free', 'json viewer'],
    buildType: 'client',
  },
  {
    slug: 'css-minifier',
    name: 'CSS Minifier',
    category: 'Developer Tools',
    emoji: '🎨',
    tagline: 'Minify CSS to reduce website file size',
    description:
      'Free CSS minifier. Paste your CSS to remove whitespace, comments, and unnecessary characters. Reduce file size instantly. Copy or download.',
    keywords: ['css minifier', 'minify css online', 'css compressor', 'css minifier free', 'compress css'],
    buildType: 'client',
  },
  {
    slug: 'js-minifier',
    name: 'JavaScript Minifier',
    category: 'Developer Tools',
    emoji: '⚡',
    tagline: 'Minify JavaScript to speed up your website',
    description:
      'Free JavaScript minifier. Compress JS by removing whitespace and comments. Reduce bundle size instantly. Paste code and copy minified output.',
    keywords: ['javascript minifier', 'js minifier online', 'minify js free', 'compress javascript', 'js compressor'],
    buildType: 'client',
  },
  {
    slug: 'html-formatter',
    name: 'HTML Formatter',
    category: 'Developer Tools',
    emoji: '🖥️',
    tagline: 'Beautify or minify HTML code instantly',
    description:
      'Free HTML formatter. Beautify messy HTML with proper indentation, or minify HTML to reduce file size. Paste code and get results instantly.',
    keywords: ['html formatter', 'html beautifier online', 'format html free', 'html minifier', 'indent html'],
    buildType: 'client',
  },
  {
    slug: 'color-picker',
    name: 'Color Picker & Converter',
    category: 'Developer Tools',
    emoji: '🎨',
    tagline: 'Pick colors and convert HEX, RGB, HSL',
    description:
      'Free color picker and converter. Convert between HEX, RGB, HSL, and RGBA color formats. Visual color wheel picker. Copy code instantly.',
    keywords: ['color picker online', 'hex to rgb converter', 'rgb to hex online', 'color converter free', 'hsl color picker'],
    buildType: 'client',
  },
  {
    slug: 'regex-tester',
    name: 'Regex Tester',
    category: 'Developer Tools',
    emoji: '🔍',
    tagline: 'Test regular expressions with live match highlights',
    description:
      'Free regex tester. Test regular expressions with live match highlighting, explanation of each part, and capture group support. Supports JS regex.',
    keywords: ['regex tester', 'regular expression tester online', 'regex validator free', 'test regex online'],
    buildType: 'client',
  },
  {
    slug: 'url-encoder',
    name: 'URL Encoder / Decoder',
    category: 'Developer Tools',
    emoji: '🔗',
    tagline: 'Encode or decode URL strings instantly',
    description:
      'Free URL encoder and decoder. Encode special characters in URLs or decode URL-encoded strings. Supports encodeURIComponent and encodeURI modes.',
    keywords: ['url encoder', 'url decoder online', 'encode url free', 'decode url online', 'url encoding tool'],
    buildType: 'client',
  },
  {
    slug: 'meta-tag-generator',
    name: 'Meta Tag Generator',
    category: 'Developer Tools',
    emoji: '🏷️',
    tagline: 'Generate SEO meta tags, OG tags, Twitter cards',
    description:
      'Free meta tag generator. Enter your page details to generate SEO meta tags, Open Graph tags, and Twitter Card tags. Copy HTML code instantly.',
    keywords: ['meta tag generator', 'open graph generator', 'seo meta tags generator free', 'twitter card generator'],
    buildType: 'client',
  },
  {
    slug: 'markdown-preview',
    name: 'Markdown Preview',
    category: 'Developer Tools',
    emoji: '📝',
    tagline: 'Write and preview Markdown live side by side',
    description:
      'Free Markdown editor and live preview. Write Markdown on the left and see the rendered HTML on the right in real time. Download as HTML.',
    keywords: ['markdown editor online', 'markdown preview', 'markdown to html converter', 'live markdown editor free'],
    buildType: 'client',
  },
  // ── CALCULATORS ───────────────────────────────────────────
  {
    slug: 'age-calculator',
    name: 'Age Calculator',
    category: 'Calculators',
    emoji: '🎂',
    tagline: 'Calculate exact age from date of birth',
    description:
      'Free age calculator. Enter date of birth to get exact age in years, months, and days. Find age on any specific date. Fast and accurate.',
    keywords: ['age calculator', 'how old am I', 'age from date of birth', 'calculate age online free', 'birthday age calculator'],
    buildType: 'client',
  },
  {
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    category: 'Calculators',
    emoji: '⚖️',
    tagline: 'Calculate your Body Mass Index instantly',
    description:
      'Free BMI calculator. Calculate your Body Mass Index from height and weight. Supports metric (kg/cm) and imperial (lbs/ft). See your BMI category instantly.',
    keywords: ['bmi calculator', 'body mass index calculator', 'calculate bmi online free', 'bmi checker'],
    buildType: 'client',
  },
  {
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    category: 'Calculators',
    emoji: '💯',
    tagline: 'Calculate percentages in 3 different ways',
    description:
      'Free percentage calculator. What is X% of Y? X is what % of Y? Calculate percentage increase or decrease. Three calculation modes in one tool.',
    keywords: ['percentage calculator', 'percent calculator online', 'calculate percentage free', 'percentage increase calculator'],
    buildType: 'client',
  },
  {
    slug: 'tip-calculator',
    name: 'Tip Calculator',
    category: 'Calculators',
    emoji: '🍽️',
    tagline: 'Calculate tip and split bill between people',
    description:
      'Free tip calculator. Calculate how much to tip and split the bill between multiple people. Set custom tip percentage. Instant calculation.',
    keywords: ['tip calculator', 'bill split calculator', 'how much to tip', 'restaurant tip calculator free'],
    buildType: 'client',
  },
  {
    slug: 'currency-converter',
    name: 'Currency Converter',
    category: 'Calculators',
    emoji: '💱',
    tagline: 'Convert currencies with live exchange rates',
    description:
      'Free currency converter with live exchange rates. Convert PKR, USD, GBP, EUR, AED and 150+ currencies. Updated rates via free API.',
    keywords: ['currency converter', 'live exchange rates', 'pkr to usd converter', 'online currency calculator', 'rupee to dollar'],
    buildType: 'client',
  },
  {
    slug: 'unit-converter',
    name: 'Unit Converter',
    category: 'Calculators',
    emoji: '📏',
    tagline: 'Convert length, weight, temperature and more',
    description:
      'Free unit converter. Convert length, weight, temperature, volume, area, speed, and digital storage. Supports metric and imperial units.',
    keywords: ['unit converter online', 'measurement converter free', 'length converter', 'kg to lbs converter', 'temperature converter'],
    buildType: 'client',
  },
  // ── SEO & MARKETING TOOLS ─────────────────────────────────
  {
    slug: 'qr-code-generator',
    name: 'QR Code Generator',
    category: 'SEO & Marketing',
    emoji: '📱',
    tagline: 'Generate QR codes for URLs, WiFi, vCards',
    description:
      'Free QR code generator. Create custom QR codes for websites, WiFi passwords, contact cards, and text. Download as PNG or SVG. No signup.',
    keywords: ['qr code generator', 'create qr code free', 'qr code maker online', 'custom qr code generator', 'wifi qr code'],
    buildType: 'client',
  },
  {
    slug: 'keyword-density',
    name: 'Keyword Density Checker',
    category: 'SEO & Marketing',
    emoji: '📊',
    tagline: 'Check keyword frequency in your content',
    description:
      'Free keyword density checker. Paste your content to see keyword frequency, density percentage, and word distribution. Essential for SEO optimization.',
    keywords: ['keyword density checker', 'keyword frequency tool', 'check keyword density online', 'seo content analyzer'],
    buildType: 'client',
  },
  {
    slug: 'meta-description-generator',
    name: 'Meta Description Generator',
    category: 'SEO & Marketing',
    emoji: '🏷️',
    tagline: 'Generate optimized meta descriptions with AI',
    description:
      'Free meta description generator. Enter your page title and keywords to generate SEO-optimized meta descriptions under 160 characters instantly.',
    keywords: ['meta description generator', 'generate meta description free', 'seo meta description tool', 'ai meta description'],
    buildType: 'client',
  },
  {
    slug: 'privacy-policy-generator',
    name: 'Privacy Policy Generator',
    category: 'SEO & Marketing',
    emoji: '🔒',
    tagline: 'Generate a free privacy policy for your website',
    description:
      'Free privacy policy generator. Answer 5 questions about your website to get a complete privacy policy. Covers GDPR, CCPA compliance basics.',
    keywords: ['privacy policy generator', 'free privacy policy for website', 'generate privacy policy', 'gdpr privacy policy generator'],
    buildType: 'client',
  },
  {
    slug: 'sitemap-generator',
    name: 'XML Sitemap Generator',
    category: 'SEO & Marketing',
    emoji: '🗺️',
    tagline: 'Generate an XML sitemap for your website',
    description:
      'Free XML sitemap generator. Enter your website URL to generate a complete XML sitemap for Google Search Console submission. Download instantly.',
    keywords: ['xml sitemap generator', 'sitemap creator free', 'generate sitemap online', 'sitemap xml free tool'],
    buildType: 'client',
  },
];

export const toolCategories = [
  { id: 'all', label: 'All Tools', count: 40 },
  { id: 'Image Tools', label: 'Image Tools', count: 5 },
  { id: 'PDF Tools', label: 'PDF Tools', count: 5 },
  { id: 'Text Tools', label: 'Text Tools', count: 6 },
  { id: 'Security Tools', label: 'Security Tools', count: 4 },
  { id: 'Developer Tools', label: 'Developer Tools', count: 8 },
  { id: 'Calculators', label: 'Calculators', count: 6 },
  { id: 'SEO & Marketing', label: 'SEO & Marketing', count: 5 },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getRelatedTools(currentSlug: string, limit: number): Tool[] {
  const current = getToolBySlug(currentSlug);
  if (!current) return [];
  return tools.filter((t) => t.slug !== currentSlug && t.category === current.category).slice(0, limit);
}
