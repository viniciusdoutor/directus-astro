import { createDirectus, rest } from "@directus/sdk";

type Global = {
  title: string;
  description: string;
};

type Author = {
  first_name: string;
  last_name: string | null;
};

type Page = {
  title: string;
  content: string;
  slug: string;
};

type Post = {
  image: string | null;
  title: string;
  author: Author | null;
  content: string;
  published_date: string;
  slug: string;
};

type Schema = {
  posts: Post[];
  global: Global;
  pages: Page[];
};

const directus = createDirectus<Schema>(import.meta.env.PUBLIC_DIRECTUS_URL).with(
  rest(),
);

export default directus;
