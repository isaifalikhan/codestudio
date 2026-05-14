/** Tools that call CodexStudio APIs or third-party extraction (not purely client-side). */
export const SERVER_BACKED_TOOL_SLUGS = new Set([
  'tiktok-downloader',
  'youtube-downloader',
  'instagram-downloader',
  'facebook-video-downloader',
  'twitter-video-downloader',
  'youtube-to-mp3',
  'pinterest-downloader',
  'vimeo-downloader',
  'ai-blog-generator',
  'ai-email-writer',
  'ai-paraphraser',
  'ai-summarizer',
  'ai-grammar-checker',
  'ai-ad-copy',
  'ai-business-name',
  'ai-caption-generator',
  'ai-cover-letter',
  'ai-plagiarism-checker',
]);

export function isServerBackedTool(slug: string): boolean {
  return SERVER_BACKED_TOOL_SLUGS.has(slug);
}

/** Listed in the catalog but limited, instructional, or missing supporting routes. */
export const INCOMPLETE_TOOL_SLUGS = new Set([
  'pinterest-downloader',
  'vimeo-downloader',
  'spotify-to-mp3',
  'port-scanner',
  'url-shortener',
]);

export function isIncompleteTool(slug: string): boolean {
  return INCOMPLETE_TOOL_SLUGS.has(slug);
}
