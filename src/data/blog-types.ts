export interface BlogPost {
  title: string;
  /** Shorter title tag when the headline would overrun the SERP. */
  seoTitle?: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  lastModified?: string;
  image: string;
  featured?: boolean;
  content?: string;
}

