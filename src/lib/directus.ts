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
  // Campos de edital (presentes apenas quando category = editais-resultados)
  edital_org: string | null;
  edital_vagas: number | null;
  edital_cargos: string | null;
  edital_salario: string | null;
  edital_escolaridade: string | null;
  edital_inscricoes: string | null;
  edital_banca: string | null;
  edital_link: string | null;
};

// Tipos com relações já populadas (shape real retornado pelas queries)
export type PostSummary = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  published_date: string;
  reading_time: number | null;
  image: string | null;
  featured: boolean;
  category: Category | null;
  tags: Array<{ id: number; posts_id: number; tags_id: Tag }>;
};

export type EditalFields = {
  edital_org: string | null;
  edital_vagas: number | null;
  edital_cargos: string | null;
  edital_salario: string | null;
  edital_escolaridade: string | null;
  edital_inscricoes: string | null;
  edital_banca: string | null;
  edital_link: string | null;
};

export type PostExpanded = PostSummary & EditalFields & {
  content: string;
  status: "published" | "draft";
  author: Author | null;
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
