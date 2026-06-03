import type { Category, Tag } from "./directus";

export function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("pt-BR", {
    day: "2-digit", month: "long", year: "numeric",
  });
}

export function assetUrl(id: string | null | undefined, base: string, params = "width=800&height=450&fit=cover"): string | null {
  return id ? `${base}/assets/${id}?${params}` : null;
}

export function authorName(raw: unknown): string | null {
  if (!raw || typeof raw !== "object") return null;
  const a = raw as { first_name?: string; last_name?: string };
  return [a.first_name, a.last_name].filter(Boolean).join(" ") || null;
}

export function categoryIcon(slug: string): string {
  if (/estadual/.test(slug))      return "building";
  if (/concurs/.test(slug))       return "briefcase";
  if (/estudo|dica|cogni|aprendiz/.test(slug)) return "book";
  if (/edital|result/.test(slug)) return "document";
  if (/jurisprud/.test(slug))     return "scales";
  if (/legisla/.test(slug))       return "shield";
  if (/tribunal|stf/.test(slug))  return "gavel";
  return "shield";
}

// Helpers de compatibilidade — use os campos tipados diretamente quando possível
export function getCategory(raw: Category | null | undefined): Category | null {
  return raw ?? null;
}

export function getTags(raw: Array<{ tags_id: Tag }> | undefined): Tag[] {
  return raw?.map(pt => pt.tags_id) ?? [];
}
