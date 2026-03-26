export interface BlogPost {
  title: string;
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

