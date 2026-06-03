import directus from "./directus";
import { readItems, readSingleton } from "@directus/sdk";
import type { Category, Tag, Global, PostSummary, PostExpanded, Curso } from "./directus";

// Seletores de campos — o SDK não infere tipos com campos relacionais aninhados,
// por isso usamos `as any` no objeto de query e devolvemos tipos explícitos.
const SUMMARY_FIELDS = [
  "id", "title", "slug", "excerpt", "published_date", "reading_time", "image", "featured",
  { category: ["id", "name", "slug", "color"] },
  { tags: [{ tags_id: ["id", "name", "slug"] }] },
];

const DETAIL_FIELDS = [
  ...SUMMARY_FIELDS,
  "content", "status",
  "edital_org", "edital_vagas", "edital_cargos", "edital_salario",
  "edital_escolaridade", "edital_inscricoes", "edital_banca", "edital_link",
  { author: ["first_name", "last_name"] },
];

type PostFilter = Record<string, unknown>;

export async function fetchPosts(opts: {
  filter?: PostFilter;
  limit?: number;
  sort?: string[];
} = {}): Promise<PostSummary[]> {
  const result = await directus.request(
    readItems("posts", {
      filter: { status: { _eq: "published" }, ...opts.filter },
      fields: SUMMARY_FIELDS,
      limit: opts.limit ?? -1,
      sort: opts.sort ?? ["-published_date"],
    } as any)
  );
  return result as unknown as PostSummary[];
}

export async function fetchAllPostsExpanded(): Promise<PostExpanded[]> {
  const result = await directus.request(
    readItems("posts", {
      filter: { status: { _eq: "published" } },
      fields: DETAIL_FIELDS,
    } as any)
  );
  return result as unknown as PostExpanded[];
}

export async function fetchRecentPosts(limit: number, excludeSlug?: string): Promise<PostSummary[]> {
  return fetchPosts({
    filter: excludeSlug ? { slug: { _neq: excludeSlug } } : {},
    limit,
  });
}

export async function fetchPostsByCategory(categorySlug: string): Promise<PostSummary[]> {
  return fetchPosts({
    filter: { category: { slug: { _eq: categorySlug } } },
  });
}

export async function fetchPostsByTag(tagSlug: string): Promise<PostSummary[]> {
  return fetchPosts({
    filter: { tags: { tags_id: { slug: { _eq: tagSlug } } } },
  });
}

export async function fetchRelatedPosts(
  excludeSlug: string,
  categorySlug: string | null,
  limit = 3
): Promise<PostSummary[]> {
  return fetchPosts({
    filter: {
      slug: { _neq: excludeSlug },
      ...(categorySlug ? { category: { slug: { _eq: categorySlug } } } : {}),
    },
    limit,
  });
}

export async function fetchFeaturedPost(): Promise<PostSummary | null> {
  const result = await fetchPosts({
    filter: { featured: { _eq: true } },
    limit: 1,
  });
  return result[0] ?? null;
}

export async function fetchCategories(): Promise<Category[]> {
  const result = await directus.request(
    readItems("categories", {
      fields: ["id", "name", "slug", "color", "description"],
      sort: ["name"],
    } as any)
  );
  return result as unknown as Category[];
}

export async function fetchTags(): Promise<Tag[]> {
  const result = await directus.request(
    readItems("tags", {
      fields: ["id", "name", "slug"],
      sort: ["name"],
    } as any)
  );
  return result as unknown as Tag[];
}

export async function fetchGlobal(): Promise<Global> {
  return directus.request(readSingleton("global"));
}

export async function fetchCursos(): Promise<Curso[]> {
  const result = await directus.request(
    readItems("cursos", {
      filter: { status: { _eq: "published" } },
      fields: ["*"],
      sort: ["sort"],
    } as any)
  );
  return result as unknown as Curso[];
}

export async function fetchCurso(slug: string): Promise<Curso | null> {
  const result = await directus.request(
    readItems("cursos", {
      filter: { slug: { _eq: slug }, status: { _eq: "published" } },
      fields: ["*"],
      limit: 1,
    } as any)
  );
  const items = result as unknown as Curso[];
  return items[0] ?? null;
}

// Busca editais cujo título contenha pelo menos um dos termos informados.
export async function fetchEditalsByCargo(terms: string[], limit = 4): Promise<PostSummary[]> {
  if (terms.length === 0) return [];
  const result = await directus.request(
    readItems("posts", {
      filter: {
        status: { _eq: "published" },
        category: { slug: { _eq: "editais-resultados" } },
        _or: terms.map(t => ({ title: { _icontains: t } })),
      },
      fields: SUMMARY_FIELDS,
      sort: ["-published_date"],
      limit,
    } as any)
  );
  return result as unknown as PostSummary[];
}
