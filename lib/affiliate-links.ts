/**
 * Affiliate URLs for tools on /resources. Replace XXXXX with your actual affiliate IDs
 * when you sign up for each program.
 */
const AFFILIATE_URLS: Record<string, string> = {
  canva: 'https://partner.canva.com/XXXXX',
  // Add when you have affiliate accounts:
  // hostinger: 'https://www.hostinger.com/refer/codexstudio',
  // namecheap: 'https://www.namecheap.com/?aff=XXXXX',
  // semrush: 'https://www.semrush.com/sem/?ref=XXXXX',
  // fiverr: 'https://www.fiverr.com/s/XXXXX',
};

export function getAffiliateUrl(toolId: string): string | undefined {
  return AFFILIATE_URLS[toolId];
}
