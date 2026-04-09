import { enrichToolSeo } from '@/lib/tool-seo-copy';

export type ToolCore = {
  slug: string;
  name: string;
  category: string;
  emoji: string;
  tagline: string;
  description: string;
  keywords: string[];
  buildType: 'client';
};

export type Tool = ToolCore & {
  longDescription: string;
  howToSteps: [string, string, string];
};

const rawTools: ToolCore[] = [
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
  // ── VIDEO DOWNLOADER TOOLS ─────────────────────────────
  { slug: 'tiktok-downloader', name: 'TikTok Video Downloader', category: 'Video Tools', emoji: '🎵', tagline: 'Download TikTok videos without watermark', description: 'Free TikTok video downloader. Download TikTok videos without watermark in HD MP4 and save audio when available. Paste any TikTok link and download instantly. No signup.', keywords: ['tiktok video download', 'tiktok video downloader', 'download tiktok video without watermark', 'download tiktok video hd', 'save tiktok video free', 'tiktok mp4 downloader'], buildType: 'client' },
  { slug: 'youtube-downloader', name: 'YouTube Video Downloader', category: 'Video Tools', emoji: '▶️', tagline: 'Download YouTube videos in MP4 or MP3', description: 'Free YouTube video downloader. Download YouTube videos in 720p, 1080p MP4 or extract MP3 audio. No software needed. Works in browser.', keywords: ['youtube downloader', 'download youtube video free', 'youtube to mp4', 'save youtube video'], buildType: 'client' },
  { slug: 'instagram-downloader', name: 'Instagram Downloader', category: 'Video Tools', emoji: '📸', tagline: 'Download Instagram Reels, photos, and stories', description: 'Free Instagram downloader. Save Instagram Reels, videos, photos, carousels, and stories. Paste any Instagram URL and download instantly.', keywords: ['instagram downloader', 'download instagram reels', 'save instagram video free', 'instagram photo downloader'], buildType: 'client' },
  { slug: 'facebook-video-downloader', name: 'Facebook Video Downloader', category: 'Video Tools', emoji: '👥', tagline: 'Download Facebook videos and Reels in HD', description: 'Free Facebook video downloader. Save Facebook videos and Reels in HD quality. Paste any public Facebook video URL and download instantly.', keywords: ['facebook video downloader', 'download facebook video free', 'save facebook video', 'fb video downloader'], buildType: 'client' },
  { slug: 'twitter-video-downloader', name: 'Twitter/X Video Downloader', category: 'Video Tools', emoji: '🐦', tagline: 'Download videos and GIFs from X (Twitter)', description: 'Free Twitter/X video downloader. Save videos and animated GIFs from any public tweet. Paste the tweet URL and download in MP4 format.', keywords: ['twitter video downloader', 'download twitter video free', 'x video downloader', 'save tweet video'], buildType: 'client' },
  { slug: 'youtube-to-mp3', name: 'YouTube to MP3 Converter', category: 'Video Tools', emoji: '🎬', tagline: 'Extract MP3 audio from any YouTube video', description: 'Free YouTube to MP3 converter. Extract and download high-quality MP3 audio from any YouTube video. Fast conversion, 128kbps to 320kbps.', keywords: ['youtube to mp3', 'youtube mp3 converter free', 'extract audio from youtube', 'convert youtube to mp3'], buildType: 'client' },
  { slug: 'pinterest-downloader', name: 'Pinterest Video Downloader', category: 'Video Tools', emoji: '📌', tagline: 'Download Pinterest videos and images', description: 'Free Pinterest downloader. Save Pinterest videos and images to your device. Paste any Pin URL and download in original quality. No login.', keywords: ['pinterest downloader', 'download pinterest video', 'save pinterest image', 'pinterest video saver'], buildType: 'client' },
  { slug: 'vimeo-downloader', name: 'Vimeo Downloader', category: 'Video Tools', emoji: '🎥', tagline: 'Download Vimeo videos in original quality', description: 'Free Vimeo video downloader. Download any public Vimeo video in its original quality. Paste the Vimeo URL and save to your device instantly.', keywords: ['vimeo downloader', 'download vimeo video free', 'save vimeo video', 'vimeo video saver'], buildType: 'client' },
  { slug: 'youtube-thumbnail-downloader', name: 'YouTube Thumbnail Downloader', category: 'Video Tools', emoji: '📺', tagline: 'Download YouTube video thumbnails in HD', description: 'Free YouTube thumbnail downloader. Get any YouTube video thumbnail in SD, HD, and maxresdefault quality. Paste the video URL to download.', keywords: ['youtube thumbnail downloader', 'download youtube thumbnail', 'get youtube thumbnail', 'youtube thumbnail extractor'], buildType: 'client' },
  { slug: 'video-to-gif', name: 'Video to GIF Converter', category: 'Video Tools', emoji: '🎞️', tagline: 'Convert video clips to animated GIF', description: 'Free online video to GIF converter. Upload any video and convert a clip to an animated GIF. Set duration, frame rate, and size. Download instantly.', keywords: ['video to gif converter', 'convert mp4 to gif', 'make gif from video free', 'video gif maker online'], buildType: 'client' },
  { slug: 'audio-trimmer', name: 'Audio Trimmer', category: 'Video Tools', emoji: '🎤', tagline: 'Trim MP3 audio files online for free', description: 'Free online audio trimmer. Upload MP3, WAV, or OGG files and trim to your desired start and end time. Download the cut audio clip instantly.', keywords: ['audio trimmer online', 'trim mp3 free', 'cut audio online', 'audio cutter free'], buildType: 'client' },
  { slug: 'spotify-to-mp3', name: 'Spotify to MP3', category: 'Video Tools', emoji: '🎵', tagline: 'Download Spotify tracks as MP3 files', description: 'Convert Spotify track links to downloadable MP3 files free. Paste any Spotify song URL and download it as high-quality audio to your device.', keywords: ['spotify to mp3', 'download spotify music free', 'spotify mp3 converter', 'save spotify songs'], buildType: 'client' },
  // ── SOCIAL MEDIA TOOLS ────────────────────────────────
  { slug: 'hashtag-generator', name: 'Hashtag Generator', category: 'Social Media', emoji: '#️⃣', tagline: 'Generate 30 trending hashtags for any topic', description: 'Free hashtag generator. Get 30 relevant trending hashtags for Instagram, TikTok, Twitter, and LinkedIn. Enter any topic to generate hashtags instantly.', keywords: ['hashtag generator', 'instagram hashtag generator', 'tiktok hashtag generator', 'best hashtags for instagram'], buildType: 'client' },
  { slug: 'instagram-bio-generator', name: 'Instagram Bio Generator', category: 'Social Media', emoji: '📏', tagline: 'Generate the perfect Instagram bio with AI', description: 'Free AI Instagram bio generator. Enter your name, niche, and keywords to generate a compelling Instagram bio under 150 characters. Copy instantly.', keywords: ['instagram bio generator', 'instagram bio ideas', 'create instagram bio', 'best instagram bio generator'], buildType: 'client' },
  { slug: 'instagram-fonts', name: 'Instagram Font Generator', category: 'Social Media', emoji: '🔤', tagline: 'Copy-paste fancy fonts for Instagram and TikTok', description: 'Free Instagram font generator. Convert normal text to 50+ fancy fonts and Unicode styles for Instagram bios, captions, and TikTok profiles. Copy instantly.', keywords: ['instagram font generator', 'fancy text generator', 'cool fonts for instagram', 'tiktok font generator'], buildType: 'client' },
  { slug: 'youtube-banner-maker', name: 'YouTube Banner Maker', category: 'Social Media', emoji: '🖼️', tagline: 'Create a YouTube channel art banner free', description: 'Free YouTube banner maker. Create a professional YouTube channel art banner at 2560x1440px. Add text, colors, and images. Download instantly.', keywords: ['youtube banner maker', 'youtube channel art maker', 'create youtube banner free', 'youtube header generator'], buildType: 'client' },
  { slug: 'engagement-rate-calculator', name: 'Engagement Rate Calculator', category: 'Social Media', emoji: '📊', tagline: 'Calculate Instagram and TikTok engagement rate', description: 'Free social media engagement rate calculator. Enter likes, comments, and follower count to calculate your Instagram or TikTok engagement rate percentage.', keywords: ['engagement rate calculator', 'instagram engagement rate', 'tiktok engagement rate calculator', 'social media engagement'], buildType: 'client' },
  { slug: 'email-subject-generator', name: 'Email Subject Line Generator', category: 'Social Media', emoji: '✉️', tagline: 'Generate click-worthy email subject lines with AI', description: 'Free AI email subject line generator. Enter your email topic and get 10 click-worthy subject lines optimized for open rates. Copy the best one.', keywords: ['email subject line generator', 'email subject generator', 'best email subject lines', 'ai email subject'], buildType: 'client' },
  { slug: 'tiktok-bio-generator', name: 'TikTok Bio Generator', category: 'Social Media', emoji: '📱', tagline: 'Generate a catchy TikTok bio instantly', description: 'Free TikTok bio generator. Enter your niche and personality keywords to generate a catchy TikTok bio that gets followers. AI-powered, copy instantly.', keywords: ['tiktok bio generator', 'tiktok bio ideas', 'create tiktok bio', 'best tiktok bio generator'], buildType: 'client' },
  { slug: 'social-media-calendar', name: 'Social Media Content Calendar', category: 'Social Media', emoji: '📅', tagline: 'Plan 30 days of social media content', description: 'Free social media calendar generator. Plan and organize 30 days of social posts across Instagram, Twitter, LinkedIn, and TikTok. Export to CSV.', keywords: ['social media calendar', 'content calendar generator', 'social media planner free', 'instagram content calendar'], buildType: 'client' },
  { slug: 'link-in-bio-generator', name: 'Link in Bio Page Generator', category: 'Social Media', emoji: '🔗', tagline: 'Create a free link-in-bio landing page', description: 'Free link-in-bio generator. Create a mobile-friendly micro landing page with multiple links for Instagram, TikTok, and Twitter bios. Like Linktree but free.', keywords: ['link in bio generator', 'free linktree alternative', 'link in bio page free', 'instagram bio link'], buildType: 'client' },
  // ── FINANCE & BUSINESS TOOLS ──────────────────────────
  { slug: 'invoice-generator', name: 'Invoice Generator', category: 'Finance', emoji: '🧾', tagline: 'Create professional invoices and download as PDF', description: 'Free invoice generator. Create professional invoices with your logo, itemized services, taxes, and discounts. Download as PDF instantly. No signup required.', keywords: ['invoice generator', 'free invoice maker online', 'create invoice pdf free', 'professional invoice generator'], buildType: 'client' },
  { slug: 'loan-calculator', name: 'Loan EMI Calculator', category: 'Finance', emoji: '🏦', tagline: 'Calculate monthly loan payments and total interest', description: 'Free loan EMI calculator. Calculate monthly payments, total interest, and amortization schedule for any loan. Supports home, car, and personal loans.', keywords: ['loan calculator', 'emi calculator', 'monthly payment calculator', 'loan interest calculator free'], buildType: 'client' },
  { slug: 'mortgage-calculator', name: 'Mortgage Calculator', category: 'Finance', emoji: '🏠', tagline: 'Calculate mortgage payments and total interest', description: 'Free mortgage calculator. Calculate monthly payments, total interest, and full amortization schedule for any home loan. Shows yearly breakdown.', keywords: ['mortgage calculator', 'home loan calculator', 'monthly mortgage payment calculator', 'mortgage interest calculator'], buildType: 'client' },
  { slug: 'compound-interest', name: 'Compound Interest Calculator', category: 'Finance', emoji: '📈', tagline: 'See how investments grow with compound interest', description: 'Free compound interest calculator. See how your investment grows over time with compounding. Enter principal, rate, time, and compounding frequency.', keywords: ['compound interest calculator', 'investment growth calculator', 'compound interest formula calculator', 'savings growth calculator'], buildType: 'client' },
  { slug: 'vat-calculator', name: 'VAT Calculator', category: 'Finance', emoji: '💰', tagline: 'Add or remove VAT from any price instantly', description: 'Free VAT calculator. Add VAT to a price or remove VAT from a total. Supports all VAT rates. Calculate GST, sales tax, and other consumption taxes.', keywords: ['vat calculator', 'vat calculator online free', 'add vat to price', 'remove vat from price'], buildType: 'client' },
  { slug: 'discount-calculator', name: 'Discount Calculator', category: 'Finance', emoji: '💲', tagline: 'Calculate sale price after any discount', description: 'Free discount calculator. Enter original price and discount percentage to get the sale price and savings amount. Also works in reverse.', keywords: ['discount calculator', 'sale price calculator', 'percentage off calculator', 'how much is x percent off'], buildType: 'client' },
  { slug: 'profit-margin-calculator', name: 'Profit Margin Calculator', category: 'Finance', emoji: '🎯', tagline: 'Calculate gross and net profit margins', description: 'Free profit margin calculator. Calculate gross profit margin and net profit margin percentages. Enter revenue and costs to see profitability instantly.', keywords: ['profit margin calculator', 'gross profit margin calculator', 'profit percentage calculator free', 'business profit calculator'], buildType: 'client' },
  { slug: 'salary-calculator', name: 'Salary to Hourly Calculator', category: 'Finance', emoji: '💵', tagline: 'Convert annual salary to hourly, daily, weekly rate', description: 'Free salary calculator. Convert annual salary to hourly, daily, weekly, and monthly rates. Also reverse: hourly rate to annual salary. Supports overtime.', keywords: ['salary to hourly calculator', 'annual salary calculator', 'hourly rate calculator free', 'convert salary to hourly'], buildType: 'client' },
  { slug: 'roi-calculator', name: 'ROI Calculator', category: 'Finance', emoji: '📊', tagline: 'Calculate return on investment percentage', description: 'Free ROI calculator. Calculate return on investment (ROI) percentage from initial cost and final value. Essential for business and marketing decisions.', keywords: ['roi calculator', 'return on investment calculator', 'calculate roi online free', 'investment roi calculator'], buildType: 'client' },
  { slug: 'receipt-generator', name: 'Receipt Generator', category: 'Finance', emoji: '📋', tagline: 'Create printable receipts for cash sales', description: 'Free receipt generator. Create professional printable receipts for cash and card sales. Add your business info, items, and totals. Download as PDF.', keywords: ['receipt generator', 'free receipt maker', 'create receipt online', 'printable receipt generator free'], buildType: 'client' },
  { slug: 'pay-stub-generator', name: 'Pay Stub Generator', category: 'Finance', emoji: '📄', tagline: 'Generate pay stubs and payslips with deductions', description: 'Free pay stub generator. Create professional payslips with salary, deductions, and net pay. Download as PDF. No account or software required.', keywords: ['pay stub generator', 'payslip generator free', 'create pay stub online', 'free paycheck stub maker'], buildType: 'client' },
  { slug: 'hours-calculator', name: 'Hours & Pay Calculator', category: 'Finance', emoji: '⏱️', tagline: 'Calculate total pay from hours worked', description: 'Free hours and pay calculator. Enter clock-in and clock-out times plus hourly rate to calculate total pay including overtime. Perfect for freelancers.', keywords: ['hours worked calculator', 'time and pay calculator', 'hourly pay calculator', 'work hours pay calculator free'], buildType: 'client' },
  // ── AI TOOLS ──────────────────────────────────────────
  { slug: 'ai-blog-generator', name: 'AI Blog Post Generator', category: 'AI Tools', emoji: '📝', tagline: 'Generate a full blog post draft with AI', description: 'Free AI blog post generator. Enter your topic and keywords to generate a 800-word SEO-optimized blog post draft with headings. Powered by Claude AI.', keywords: ['ai blog post generator', 'ai content generator free', 'auto blog writer', 'ai article generator'], buildType: 'client' },
  { slug: 'ai-email-writer', name: 'AI Email Writer', category: 'AI Tools', emoji: '📧', tagline: 'Write professional emails instantly with AI', description: 'Free AI email writer. Describe your email purpose and tone to generate a professional email in seconds. Formal, casual, follow-up, cold outreach and more.', keywords: ['ai email writer', 'ai email generator free', 'write email with ai', 'professional email generator'], buildType: 'client' },
  { slug: 'ai-paraphraser', name: 'AI Paraphrasing Tool', category: 'AI Tools', emoji: '💬', tagline: 'Rewrite any text in different tones with AI', description: 'Free AI paraphrasing tool. Paste any text and rewrite it in formal, casual, creative, or academic tone. Powered by Claude AI. 100% free.', keywords: ['ai paraphrasing tool', 'paraphrase text online free', 'rewrite text ai', 'best paraphrase tool 2026'], buildType: 'client' },
  { slug: 'ai-summarizer', name: 'AI Text Summarizer', category: 'AI Tools', emoji: '📑', tagline: 'Summarize any long text in seconds with AI', description: 'Free AI text summarizer. Paste any article, essay, or document and get a concise summary in bullet points or paragraph form. Powered by Claude AI.', keywords: ['ai text summarizer', 'summarize text online free', 'automatic text summarizer', 'article summarizer ai'], buildType: 'client' },
  { slug: 'ai-grammar-checker', name: 'AI Grammar Checker', category: 'AI Tools', emoji: '🔍', tagline: 'Fix grammar, spelling, and clarity with AI', description: 'Free AI grammar checker. Paste your text to find and fix grammar errors, spelling mistakes, and clarity issues. Powered by Claude AI. No signup.', keywords: ['ai grammar checker', 'grammar checker free online', 'check grammar online', 'ai grammar correction'], buildType: 'client' },
  { slug: 'ai-ad-copy', name: 'AI Ad Copy Generator', category: 'AI Tools', emoji: '🎯', tagline: 'Generate Facebook, Google, Instagram ad copy', description: 'Free AI ad copy generator. Enter your product name and benefits to generate compelling ad copy for Facebook Ads, Google Ads, and Instagram. Multiple formats.', keywords: ['ai ad copy generator', 'facebook ad copy generator', 'google ad copy ai', 'ad copy generator free'], buildType: 'client' },
  { slug: 'ai-business-name', name: 'AI Business Name Generator', category: 'AI Tools', emoji: '📊', tagline: 'Generate unique business name ideas with AI', description: 'Free AI business name generator. Describe your business and industry to get 20 unique, brandable name ideas. Check domain availability instantly.', keywords: ['business name generator', 'ai business name ideas', 'company name generator free', 'startup name generator'], buildType: 'client' },
  { slug: 'ai-caption-generator', name: 'AI Caption Generator', category: 'AI Tools', emoji: '📱', tagline: 'Generate Instagram and LinkedIn captions with AI', description: 'Free AI caption generator. Describe your photo or topic to generate 5 engaging Instagram, LinkedIn, or TikTok captions with relevant emojis and hashtags.', keywords: ['ai caption generator', 'instagram caption generator free', 'social media caption generator ai', 'caption maker ai'], buildType: 'client' },
  { slug: 'ai-cover-letter', name: 'AI Cover Letter Writer', category: 'AI Tools', emoji: '📃', tagline: 'Generate a tailored cover letter with AI', description: 'Free AI cover letter generator. Paste a job description and your skills to generate a personalized, professional cover letter in seconds. Download as PDF.', keywords: ['ai cover letter generator', 'cover letter writer free', 'generate cover letter ai', 'automatic cover letter maker'], buildType: 'client' },
  { slug: 'ai-plagiarism-checker', name: 'AI Content Detector', category: 'AI Tools', emoji: '🔎', tagline: 'Detect AI-generated text and plagiarism', description: 'Free AI content detector. Check if text was written by AI (ChatGPT, Claude) or copied from other sources. Get an originality score with highlighted sections.', keywords: ['ai detector', 'ai content detector free', 'ai writing detector', 'chatgpt text detector'], buildType: 'client' },
  // ── WRITING & DOCUMENT TOOLS ──────────────────────────
  { slug: 'resume-builder', name: 'Resume / CV Builder', category: 'Writing', emoji: '📄', tagline: 'Build a professional resume and download as PDF free', description: 'Free resume builder. Create a professional CV/resume with modern templates. Add work experience, skills, education, and projects. Download as PDF for free.', keywords: ['resume builder free', 'cv maker online', 'free resume maker', 'create resume online free', 'professional cv builder'], buildType: 'client' },
  { slug: 'text-repeater', name: 'Text Repeater', category: 'Writing', emoji: '🔡', tagline: 'Repeat any text N times with custom separator', description: 'Free text repeater. Repeat any word, phrase, or text a specified number of times. Choose separator (newline, comma, space). Used for WhatsApp and social media.', keywords: ['text repeater', 'repeat text online free', 'word repeater tool', 'text duplicator'], buildType: 'client' },
  { slug: 'text-reverser', name: 'Text Reverser', category: 'Writing', emoji: '🔀', tagline: 'Reverse text backwards or reverse word order', description: 'Free text reverser. Reverse any text character by character, or reverse the word order in a sentence. Copy and paste the reversed result.', keywords: ['text reverser', 'reverse text online', 'backwards text generator', 'reverse words online'], buildType: 'client' },
  { slug: 'online-notepad', name: 'Online Notepad', category: 'Writing', emoji: '📋', tagline: 'Free distraction-free notepad in your browser', description: 'Free online notepad. Write and save notes directly in your browser with no account required. Auto-saves in localStorage. Distraction-free writing environment.', keywords: ['online notepad', 'free notepad online', 'browser notepad no signup', 'text editor online free'], buildType: 'client' },
  { slug: 'signature-generator', name: 'Digital Signature Generator', category: 'Writing', emoji: '✒️', tagline: 'Create a handwritten-style digital signature', description: 'Free digital signature generator. Draw or type your name to create a handwritten-style signature. Download as transparent PNG for documents and emails.', keywords: ['signature generator', 'digital signature creator free', 'electronic signature maker', 'create signature online'], buildType: 'client' },
  { slug: 'random-word-generator', name: 'Random Word Generator', category: 'Writing', emoji: '🎲', tagline: 'Generate random words for games and writing', description: 'Free random word generator. Generate random nouns, verbs, adjectives, or mixed words for creative writing, games, brainstorming, and vocabulary practice.', keywords: ['random word generator', 'random words online', 'word generator for games', 'random noun generator'], buildType: 'client' },
  { slug: 'title-case-converter', name: 'Title Case Converter', category: 'Writing', emoji: '🎯', tagline: 'Convert text to APA, Chicago, or MLA title case', description: 'Free title case converter. Convert any text to proper APA, Chicago, AP, or MLA title case. Handles articles, prepositions, and conjunctions correctly.', keywords: ['title case converter', 'title case tool', 'apa title case', 'mla title case generator'], buildType: 'client' },
  { slug: 'cover-letter-generator', name: 'Cover Letter Generator', category: 'Writing', emoji: '📝', tagline: 'Generate a professional cover letter as PDF', description: 'Free cover letter generator. Fill in your details and job information to generate a professional cover letter. Download as PDF instantly. No signup needed.', keywords: ['cover letter generator free', 'cover letter maker', 'create cover letter online', 'free cover letter template'], buildType: 'client' },
  { slug: 'reading-time-calculator', name: 'Reading Time Calculator', category: 'Writing', emoji: '⏱️', tagline: 'Calculate estimated reading time for any text', description: 'Free reading time calculator. Paste any text to get estimated reading time based on average reading speeds. Shows words per minute and total read time.', keywords: ['reading time calculator', 'how long to read', 'estimated reading time', 'reading speed calculator'], buildType: 'client' },
  { slug: 'table-of-contents', name: 'Table of Contents Generator', category: 'Writing', emoji: '📊', tagline: 'Auto-generate a table of contents from headings', description: 'Free table of contents generator. Paste your document headings to automatically generate a formatted TOC with anchor links. For blog posts and docs.', keywords: ['table of contents generator', 'toc generator online', 'auto table of contents', 'heading anchor generator'], buildType: 'client' },
  // ── IMAGE EDITING TOOLS ───────────────────────────────
  { slug: 'meme-generator', name: 'Meme Generator', category: 'Image Editing', emoji: '🖼️', tagline: 'Create memes from templates or your own images', description: 'Free meme generator. Choose from 100+ popular meme templates or upload your own image. Add top and bottom text and download your meme instantly.', keywords: ['meme generator', 'create meme online free', 'meme maker no watermark', 'custom meme generator'], buildType: 'client' },
  { slug: 'image-cropper', name: 'Image Cropper', category: 'Image Editing', emoji: '✂️', tagline: 'Crop images to exact dimensions or aspect ratio', description: 'Free online image cropper. Crop photos to exact pixel dimensions or popular aspect ratios (16:9, 4:3, 1:1, square). Download the cropped image instantly.', keywords: ['image cropper online', 'crop photo online free', 'crop image to size', 'free image cropping tool'], buildType: 'client' },
  { slug: 'image-color-picker', name: 'Image Color Picker', category: 'Image Editing', emoji: '🎨', tagline: 'Pick any color from an uploaded image', description: 'Free image color picker. Upload any image and click on any pixel to get its exact HEX, RGB, and HSL color code. Extract color palettes from photos.', keywords: ['image color picker', 'pick color from image', 'get color from photo', 'eyedropper tool online'], buildType: 'client' },
  { slug: 'image-rotator', name: 'Image Rotator & Flipper', category: 'Image Editing', emoji: '🔄', tagline: 'Rotate and flip images in any direction', description: 'Free online image rotator. Rotate photos 90°, 180°, or 270°, or flip horizontally and vertically. Supports JPG, PNG, and WebP. Download instantly.', keywords: ['rotate image online free', 'flip image online', 'image rotator tool', 'rotate photo 90 degrees free'], buildType: 'client' },
  { slug: 'watermark-adder', name: 'Watermark Adder', category: 'Image Editing', emoji: '💧', tagline: 'Add text or logo watermark to images', description: 'Free watermark adder. Add custom text or image watermarks to photos. Set position (corner, center), opacity, font size, and color. Download instantly.', keywords: ['add watermark to image free', 'watermark photo online', 'image watermark tool', 'text watermark image'], buildType: 'client' },
  { slug: 'photo-enhancer', name: 'AI Photo Enhancer', category: 'Image Editing', emoji: '📷', tagline: 'Upscale and enhance photo quality with AI', description: 'Free AI photo enhancer. Upscale low-resolution images up to 4x using AI. Sharpen blurry photos, reduce noise, and enhance details automatically.', keywords: ['photo enhancer online free', 'ai image upscaler', 'enhance image quality free', 'increase image resolution'], buildType: 'client' },
  { slug: 'image-filters', name: 'Image Filter Tool', category: 'Image Editing', emoji: '🌈', tagline: 'Apply filters and effects to photos online', description: 'Free online image filter tool. Apply vintage, black & white, sepia, brightness, contrast, and saturation filters to photos. Preview and download instantly.', keywords: ['image filter online', 'photo filter free', 'add filter to photo', 'black and white photo converter'], buildType: 'client' },
  { slug: 'image-to-base64', name: 'Image to Base64 Converter', category: 'Image Editing', emoji: '🌊', tagline: 'Convert images to Base64 for HTML/CSS embedding', description: 'Free image to Base64 converter. Upload any image to get its Base64 encoded string for embedding in HTML, CSS, JSON, or JavaScript. Copy instantly.', keywords: ['image to base64', 'convert image to base64 online free', 'base64 image encoder', 'embed image in html base64'], buildType: 'client' },
  { slug: 'image-metadata', name: 'Image Metadata Viewer (EXIF)', category: 'Image Editing', emoji: '🔢', tagline: 'View EXIF data from any photo', description: 'Free EXIF metadata viewer. Upload any JPEG photo to see camera model, settings (ISO, aperture, shutter speed), GPS location, and date taken.', keywords: ['exif data viewer', 'image metadata viewer', 'view photo exif online', 'check photo location data free'], buildType: 'client' },
  { slug: 'aspect-ratio-calculator', name: 'Aspect Ratio Calculator', category: 'Image Editing', emoji: '📐', tagline: 'Calculate correct width or height for any ratio', description: 'Free aspect ratio calculator. Enter width and height to maintain aspect ratio when resizing. Supports 16:9, 4:3, 1:1, 21:9 and custom ratios.', keywords: ['aspect ratio calculator', 'image aspect ratio', 'calculate aspect ratio', 'maintain aspect ratio resize'], buildType: 'client' },
  // ── ADVANCED DEVELOPER TOOLS ──────────────────────────
  { slug: 'css-gradient-generator', name: 'CSS Gradient Generator', category: 'Developer Tools', emoji: '🎨', tagline: 'Create beautiful CSS gradients visually', description: 'Free CSS gradient generator. Create linear and radial gradients visually with a color picker. Copy the CSS code. Preview in real time.', keywords: ['css gradient generator', 'gradient generator online', 'css linear gradient tool', 'create css gradient free'], buildType: 'client' },
  { slug: 'css-box-shadow', name: 'CSS Box Shadow Generator', category: 'Developer Tools', emoji: '📦', tagline: 'Build CSS box shadows with live preview', description: 'Free CSS box shadow generator. Visually build box-shadow styles with live preview. Control offset, blur, spread, color, and inset. Copy CSS code.', keywords: ['css box shadow generator', 'box shadow generator online free', 'css shadow maker', 'box shadow tool'], buildType: 'client' },
  { slug: 'ip-lookup', name: 'IP Address Lookup', category: 'Developer Tools', emoji: '🌐', tagline: 'Find location and ISP for any IP address', description: 'Free IP address lookup. Find the location (country, city), ISP, timezone, and network info for any IP address. Also shows your current IP.', keywords: ['ip address lookup', 'ip location finder', 'what is my ip', 'ip address checker free'], buildType: 'client' },
  { slug: 'dns-lookup', name: 'DNS Lookup Tool', category: 'Developer Tools', emoji: '📡', tagline: 'Check DNS records for any domain', description: 'Free DNS lookup tool. Check A, AAAA, MX, TXT, CNAME, and NS records for any domain. Find mail servers, verify SPF records, check DNS propagation.', keywords: ['dns lookup', 'dns record checker', 'check dns records online', 'mx record lookup free'], buildType: 'client' },
  { slug: 'unix-timestamp', name: 'Unix Timestamp Converter', category: 'Developer Tools', emoji: '🕐', tagline: 'Convert Unix timestamps to readable dates', description: 'Free Unix timestamp converter. Convert Unix timestamps to human-readable date/time and vice versa. Supports milliseconds and seconds. Any timezone.', keywords: ['unix timestamp converter', 'epoch converter online', 'convert timestamp to date', 'unix time converter free'], buildType: 'client' },
  { slug: 'uuid-generator', name: 'UUID Generator', category: 'Developer Tools', emoji: '🔲', tagline: 'Generate random UUIDs in bulk instantly', description: 'Free UUID generator. Generate random UUID v1 and v4 identifiers. Generate up to 100 UUIDs at once. Copy single or bulk copy all. Instant generation.', keywords: ['uuid generator', 'generate uuid online free', 'random uuid v4 generator', 'guid generator online'], buildType: 'client' },
  { slug: 'json-to-csv', name: 'JSON to CSV Converter', category: 'Developer Tools', emoji: '📊', tagline: 'Convert JSON arrays to CSV spreadsheets', description: 'Free JSON to CSV converter. Paste a JSON array and convert it to a formatted CSV file for spreadsheets. Download as .csv or copy. Works for any JSON.', keywords: ['json to csv converter', 'convert json to csv online free', 'json csv tool', 'export json as csv'], buildType: 'client' },
  { slug: 'http-status-checker', name: 'HTTP Status Code Checker', category: 'Developer Tools', emoji: '🌐', tagline: 'Check the HTTP status of any URL', description: 'Free HTTP status code checker. Enter any URL to check its response code (200 OK, 301 Redirect, 404 Not Found, 500 Error). Check redirects and headers.', keywords: ['http status checker', 'check website status code', 'url status checker', 'http response code checker free'], buildType: 'client' },
  { slug: 'jwt-decoder', name: 'JWT Token Decoder', category: 'Developer Tools', emoji: '🗝️', tagline: 'Decode and inspect JWT tokens instantly', description: 'Free JWT decoder. Paste any JSON Web Token to decode and inspect its header, payload, and signature. Verify token structure without sharing your secret.', keywords: ['jwt decoder online', 'decode jwt token free', 'jwt inspector', 'json web token decoder'], buildType: 'client' },
  { slug: 'port-scanner', name: 'Open Port Checker', category: 'Developer Tools', emoji: '🔌', tagline: 'Check which ports are open on any server', description: 'Free open port checker. Test if common ports (80, 443, 22, 3306, 8080) are open on any IP or domain. Essential for server setup and troubleshooting.', keywords: ['open port checker', 'port scanner online free', 'check port open', 'test open ports website'], buildType: 'client' },
  // ── HEALTH & FITNESS TOOLS ────────────────────────────
  { slug: 'calorie-calculator', name: 'Calorie Calculator (TDEE)', category: 'Health', emoji: '🔥', tagline: 'Calculate daily calorie needs for your goals', description: 'Free calorie calculator. Calculate your Total Daily Energy Expenditure (TDEE) and recommended calorie intake for weight loss, gain, or maintenance.', keywords: ['calorie calculator', 'tdee calculator free', 'daily calorie intake calculator', 'how many calories should I eat'], buildType: 'client' },
  { slug: 'water-intake-calculator', name: 'Water Intake Calculator', category: 'Health', emoji: '💧', tagline: 'Calculate your ideal daily water intake', description: 'Free water intake calculator. Find out how much water you should drink daily based on your weight, height, activity level, and climate. In liters and oz.', keywords: ['water intake calculator', 'how much water should I drink', 'daily water calculator', 'hydration calculator free'], buildType: 'client' },
  { slug: 'ideal-weight', name: 'Ideal Weight Calculator', category: 'Health', emoji: '⚖️', tagline: 'Find your ideal weight range for your height', description: 'Free ideal weight calculator. Find your healthy weight range based on height, age, and gender using multiple methods (BMI, Devine, Hamwi). Metric and imperial.', keywords: ['ideal weight calculator', 'healthy weight for height', 'ideal body weight calculator free', 'weight range calculator'], buildType: 'client' },
  { slug: 'sleep-calculator', name: 'Sleep Calculator', category: 'Health', emoji: '😴', tagline: 'Find the best bedtime based on sleep cycles', description: 'Free sleep calculator. Enter your wake-up time to get the best bedtimes based on 90-minute sleep cycles. Helps you wake up refreshed and alert.', keywords: ['sleep calculator', 'what time should I go to sleep', 'sleep cycle calculator', 'best bedtime calculator free'], buildType: 'client' },
  { slug: 'protein-calculator', name: 'Protein Intake Calculator', category: 'Health', emoji: '🧬', tagline: 'Calculate daily protein needs for your goal', description: 'Free protein intake calculator. Find your daily protein requirement based on weight, activity level, and fitness goal (muscle gain, weight loss, maintenance).', keywords: ['protein calculator', 'how much protein do I need', 'daily protein intake calculator', 'protein requirement calculator free'], buildType: 'client' },
  { slug: 'ovulation-calculator', name: 'Ovulation Calculator', category: 'Health', emoji: '💊', tagline: 'Calculate ovulation date and fertile window', description: 'Free ovulation calculator. Enter your last period date and cycle length to predict ovulation date, fertile window, and next expected period.', keywords: ['ovulation calculator', 'fertile window calculator', 'ovulation date calculator free', 'when am I ovulating'], buildType: 'client' },
  { slug: 'due-date-calculator', name: 'Pregnancy Due Date Calculator', category: 'Health', emoji: '🤰', tagline: 'Calculate pregnancy due date from last period', description: 'Free pregnancy due date calculator. Enter your last menstrual period date to calculate your expected due date, current week of pregnancy, and trimester.', keywords: ['due date calculator', 'pregnancy calculator', 'when is my baby due', 'pregnancy due date from last period'], buildType: 'client' },
  { slug: 'pace-calculator', name: 'Running Pace Calculator', category: 'Health', emoji: '🏃', tagline: 'Calculate running pace, distance, or time', description: 'Free running pace calculator. Enter any two of: pace, distance, and time to calculate the third. Supports min/km, min/mile, 5K, 10K, marathon.', keywords: ['pace calculator', 'running pace calculator free', 'min per km calculator', 'marathon pace calculator'], buildType: 'client' },
  // ── BUSINESS & PRODUCTIVITY TOOLS ─────────────────────
  { slug: 'timezone-converter', name: 'Time Zone Converter', category: 'Business', emoji: '⏰', tagline: 'Convert time between any cities worldwide', description: 'Free time zone converter. Convert time between any two cities or time zones. Find the best meeting time across multiple time zones. World clock included.', keywords: ['time zone converter', 'world time zone converter free', 'convert time between cities', 'meeting time zone planner'], buildType: 'client' },
  { slug: 'date-difference', name: 'Date Difference Calculator', category: 'Business', emoji: '📅', tagline: 'Calculate days between any two dates', description: 'Free date difference calculator. Calculate exact number of days, weeks, months, and years between any two dates. Shows business days and weekends separately.', keywords: ['date difference calculator', 'days between dates calculator', 'how many days between', 'date calculator free'], buildType: 'client' },
  { slug: 'random-number', name: 'Random Number Generator', category: 'Business', emoji: '🎲', tagline: 'Generate random numbers in any range', description: 'Free random number generator. Generate one or multiple random numbers in any range. Supports integers and decimals. No repeats option for raffles.', keywords: ['random number generator', 'generate random number free', 'random number picker', 'lottery number generator'], buildType: 'client' },
  { slug: 'random-name-picker', name: 'Random Name Picker', category: 'Business', emoji: '🔀', tagline: 'Pick a random winner from a list of names', description: 'Free random name picker. Paste a list of names and spin the wheel to randomly select a winner. Used for giveaways, classroom selection, and contests.', keywords: ['random name picker', 'random winner generator', 'pick random name from list', 'wheel of names free'], buildType: 'client' },
  { slug: 'pomodoro-timer', name: 'Pomodoro Timer', category: 'Business', emoji: '📊', tagline: '25-minute focus timer with break intervals', description: 'Free Pomodoro timer. 25-minute work sessions followed by 5-minute breaks. Sound alerts. Track completed Pomodoros. Boost focus and productivity.', keywords: ['pomodoro timer online', 'free pomodoro timer', 'focus timer 25 minutes', 'productivity timer pomodoro'], buildType: 'client' },
  { slug: 'stopwatch', name: 'Online Stopwatch & Timer', category: 'Business', emoji: '⏱️', tagline: 'Stopwatch, countdown timer, and interval timer', description: 'Free online stopwatch and timer. Lap timer, countdown timer, and interval timer in one tool. Sound alerts when time runs out. Works in any browser tab.', keywords: ['online stopwatch', 'countdown timer free', 'stopwatch online free', 'timer with sound online'], buildType: 'client' },
  { slug: 'url-shortener', name: 'URL Shortener', category: 'Business', emoji: '🔗', tagline: 'Shorten any long URL to a short link', description: 'Free URL shortener. Shorten any long URL to a compact short link. No signup required. Copy and share your short link on social media or messaging apps.', keywords: ['url shortener free', 'shorten url online', 'link shortener no signup', 'short url maker'], buildType: 'client' },
  { slug: 'checklist-maker', name: 'Checklist Maker', category: 'Business', emoji: '✅', tagline: 'Create printable checklists in seconds', description: 'Free online checklist maker. Create, check off, and print checklists. Auto-saves in browser. No account needed. Export as PDF or print directly.', keywords: ['checklist maker online free', 'create checklist free', 'printable checklist maker', 'to do list maker'], buildType: 'client' },
  { slug: 'meeting-cost-calculator', name: 'Meeting Cost Calculator', category: 'Business', emoji: '📋', tagline: 'Calculate the real cost of your meetings', description: 'Free meeting cost calculator. Enter the number of attendees and average salaries to see the real-time cost of your meeting. An eye-opening productivity tool.', keywords: ['meeting cost calculator', 'cost of meeting calculator', 'how much does a meeting cost', 'meeting roi calculator'], buildType: 'client' },
  { slug: 'domain-age-checker', name: 'Domain Age Checker', category: 'Business', emoji: '🌐', tagline: 'Check how old any domain name is', description: 'Free domain age checker. Find out how old any domain is, when it was first registered, and its expiration date. Useful for SEO research and website buying.', keywords: ['domain age checker', 'how old is a domain', 'domain registration date checker', 'whois age lookup free'], buildType: 'client' },
  // ── EDUCATION TOOLS ───────────────────────────────────
  { slug: 'gpa-calculator', name: 'GPA Calculator', category: 'Education', emoji: '🧮', tagline: 'Calculate cumulative GPA from grades', description: 'Free GPA calculator. Calculate your semester and cumulative GPA from letter grades and credit hours. Supports 4.0, 5.0, and percentage scales.', keywords: ['gpa calculator', 'calculate gpa free', 'cumulative gpa calculator', 'college gpa calculator online'], buildType: 'client' },
  { slug: 'grade-calculator', name: 'Grade Calculator', category: 'Education', emoji: '📊', tagline: 'Calculate weighted final grade percentage', description: 'Free grade calculator. Enter assignment scores and weights to calculate your final weighted grade percentage. Shows what grade you need on final exam.', keywords: ['grade calculator', 'weighted grade calculator', 'final grade calculator free', 'what grade do I need calculator'], buildType: 'client' },
  { slug: 'citation-generator', name: 'Citation Generator', category: 'Education', emoji: '📖', tagline: 'Generate APA, MLA, and Chicago citations', description: 'Free citation generator. Create formatted citations in APA, MLA, Chicago, and Harvard styles from a URL, book, journal article, or website.', keywords: ['citation generator', 'apa citation generator free', 'mla citation maker', 'bibliography generator online'], buildType: 'client' },
  { slug: 'roman-numerals', name: 'Roman Numeral Converter', category: 'Education', emoji: '🔢', tagline: 'Convert between numbers and Roman numerals', description: 'Free Roman numeral converter. Convert any number (1–3,999) to Roman numerals and convert Roman numerals back to standard numbers. Instant conversion.', keywords: ['roman numeral converter', 'number to roman numerals', 'roman numeral calculator', 'convert roman numerals free'], buildType: 'client' },
  { slug: 'number-base-converter', name: 'Number Base Converter', category: 'Education', emoji: '🌡️', tagline: 'Convert between binary, octal, decimal, hex', description: 'Free number base converter. Convert numbers between binary (base 2), octal (base 8), decimal (base 10), and hexadecimal (base 16). Used in programming and CS.', keywords: ['binary to decimal converter', 'number base converter online free', 'hex to binary', 'decimal to binary converter'], buildType: 'client' },
  { slug: 'flashcard-maker', name: 'Flashcard Maker', category: 'Education', emoji: '🎯', tagline: 'Create digital flashcards for studying', description: 'Free digital flashcard maker. Create study flashcards with question on front and answer on back. Flip cards to study. Save in browser. No account needed.', keywords: ['flashcard maker online free', 'digital flashcards', 'study flashcards creator', 'online flashcard maker'], buildType: 'client' },
  { slug: 'pronunciation-guide', name: 'Word Pronunciation Tool', category: 'Education', emoji: '🗣️', tagline: 'Hear the pronunciation of any word', description: 'Free word pronunciation tool. Type any English word to hear it pronounced with phonetic transcription. Uses Web Speech API. Works in all modern browsers.', keywords: ['word pronunciation tool', 'how to pronounce', 'pronunciation guide online', 'hear word pronunciation free'], buildType: 'client' },
  { slug: 'logic-puzzle-generator', name: 'Sudoku & Puzzle Generator', category: 'Education', emoji: '🧩', tagline: 'Generate and play Sudoku puzzles online', description: 'Free online Sudoku generator. Generate easy, medium, hard, and expert Sudoku puzzles. Play in browser or print. New puzzle every time you load.', keywords: ['sudoku generator', 'free sudoku online', 'printable sudoku puzzles', 'sudoku puzzle maker free'], buildType: 'client' },
];

export const tools: Tool[] = rawTools.map(enrichToolSeo);

export const toolCategories = [
  { id: 'all', label: 'All Tools', count: tools.length },
  { id: 'Image Tools', label: 'Image Tools', count: 5 },
  { id: 'PDF Tools', label: 'PDF Tools', count: 5 },
  { id: 'Text Tools', label: 'Text Tools', count: 6 },
  { id: 'Security Tools', label: 'Security', count: 4 },
  { id: 'Developer Tools', label: 'Dev Tools', count: 19 },
  { id: 'Calculators', label: 'Calculators', count: 6 },
  { id: 'SEO & Marketing', label: 'SEO', count: 5 },
  { id: 'Video Tools', label: 'Video & Audio', count: 12 },
  { id: 'Social Media', label: 'Social Media', count: 9 },
  { id: 'Finance', label: 'Finance', count: 12 },
  { id: 'AI Tools', label: 'AI Tools', count: 10 },
  { id: 'Writing', label: 'Writing', count: 10 },
  { id: 'Image Editing', label: 'Image Editing', count: 10 },
  { id: 'Health', label: 'Health', count: 8 },
  { id: 'Business', label: 'Business', count: 10 },
  { id: 'Education', label: 'Education', count: 8 },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getRelatedTools(currentSlug: string, limit: number): Tool[] {
  const current = getToolBySlug(currentSlug);
  if (!current) return [];
  return tools.filter((t) => t.slug !== currentSlug && t.category === current.category).slice(0, limit);
}
