import { createDirectus, rest } from "@directus/sdk";

export type Category = {
  id: number;
  name: string;
  slug: string;
  color: string | null;
  description: string | null;
};

export type Tag = {
  id: number;
  name: string;
  slug: string;
};

export type PostTag = {
  id: number;
  posts_id: number;
  tags_id: number | Tag;
};

export type Author = {
  first_name: string;
  last_name: string | null;
};

export type Global = {
  title: string;
  description: string;
  tagline: string | null;
};

export type Page = {
  id: number;
  title: string;
  content: string;
  slug: string;
};

export type Post = {
  id: number;
  image: string | null;
  title: string;
  excerpt: string | null;
  author: number | Author | null;
  content: string;
  published_date: string;
  slug: string;
  status: "published" | "draft";
  featured: boolean;
  reading_time: number;
  category: number | Category | null;
  tags: PostTag[];
};

type Schema = {
  posts: Post[];
  global: Global;
  pages: Page[];
  categories: Category[];
  tags: Tag[];
  posts_tags: PostTag[];
};

const directus = createDirectus<Schema>(import.meta.env.PUBLIC_DIRECTUS_URL).with(rest());

export default directus;
