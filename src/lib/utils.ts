import type { Category, Tag, PostTag } from "./directus";

export function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("pt-BR", {
    day: "2-digit", month: "long", year: "numeric",
  });
}

export function getCategory(raw: unknown): Category | null {
  if (raw && typeof raw === "object" && "slug" in raw) return raw as Category;
  return null;
}

export function getTags(raw: PostTag[] | undefined): Tag[] {
  if (!raw) return [];
  return raw
    .map((pt) => (pt.tags_id && typeof pt.tags_id === "object" ? pt.tags_id as Tag : null))
    .filter(Boolean) as Tag[];
}

export function assetUrl(id: string | null | undefined, base: string, params = "width=800&height=450&fit=cover"): string | null {
  return id ? `${base}/assets/${id}?${params}` : null;
}

export function authorName(raw: unknown): string | null {
  if (!raw || typeof raw !== "object") return null;
  const a = raw as { first_name?: string; last_name?: string };
  return [a.first_name, a.last_name].filter(Boolean).join(" ") || null;
}
