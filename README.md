# JusNews — Blog de Concursos Jurídicos

Portal editorial de notícias, editais e dicas de estudo para concurseiros do Direito.
Construído com **Astro 5** + **Directus 11** + **Tailwind CSS v4**.

## Stack

| Camada    | Tecnologia                         |
|-----------|------------------------------------|
| Frontend  | Astro 5 · Tailwind CSS v4          |
| CMS       | Directus 11 (Docker)               |
| Banco     | PostgreSQL 16 (Docker)             |
| SDK       | `@directus/sdk` v21                |
| Fontes    | Playfair Display · IBM Plex Sans · Lora |

---

## Inicialização

### Pré-requisitos

- Node.js ≥ 18
- Docker + Docker Compose

### 1. Subir o Directus (banco + CMS)

```bash
docker compose up -d
```

Aguarda ~20 s. Confirme com:

```bash
curl http://localhost:8055/server/health
# {"status":"ok"}
```

**Admin:** `http://localhost:8055` · login: `admin@admin.com` / `admin123`

### 2. Variáveis de ambiente

```bash
cp .env.example .env
# Padrão já aponta para localhost:8055
```

### 3. Instalar dependências e iniciar o dev server

```bash
npm install
npm run dev
```

**Frontend:** `http://localhost:4321`

---

## Schema do Directus

### `global` (singleton)
| Campo         | Tipo   | Descrição                    |
|---------------|--------|------------------------------|
| `title`       | string | Título do site               |
| `description` | text   | Descrição meta               |
| `tagline`     | string | Slogan do portal             |

### `categories`
| Campo         | Tipo   | Descrição                    |
|---------------|--------|------------------------------|
| `name`        | string | Nome da categoria            |
| `slug`        | string | URL slug único               |
| `color`       | string | Cor hex do badge (ex: `#2563eb`) |
| `description` | text   | Descrição curta              |

### `tags`
| Campo  | Tipo   | Descrição     |
|--------|--------|---------------|
| `name` | string | Nome da tag   |
| `slug` | string | URL slug único|

### `posts`
| Campo            | Tipo                         | Descrição                     |
|------------------|------------------------------|-------------------------------|
| `title`          | string                       | Título do post                |
| `slug`           | string                       | URL slug único                |
| `excerpt`        | text                         | Resumo (aparece nos cards)    |
| `content`        | text (HTML)                  | Corpo completo do post        |
| `published_date` | date                         | Data de publicação            |
| `status`         | string (`published`/`draft`) | Visibilidade pública          |
| `featured`       | boolean                      | Exibir no hero da home        |
| `reading_time`   | integer                      | Minutos estimados de leitura  |
| `image`          | string (UUID)                | Imagem via Directus Files     |
| `author`         | M2O → `directus_users`       | Autor do post                 |
| `category`       | M2O → `categories`           | Categoria principal           |
| `tags`           | M2M → `tags` (via `posts_tags`) | Tags do post              |

### `pages`
| Campo     | Tipo        | Descrição       |
|-----------|-------------|-----------------|
| `title`   | string      | Título da página|
| `slug`    | string      | URL slug        |
| `content` | text (HTML) | Corpo HTML      |

---

## Rotas geradas

| Rota                      | Arquivo                         | Descrição                  |
|---------------------------|---------------------------------|----------------------------|
| `/`                       | `pages/index.astro`             | Homepage com hero e grid   |
| `/blog`                   | `pages/blog/index.astro`        | Listagem com sidebar       |
| `/blog/[slug]`            | `pages/blog/[slug].astro`       | Detalhe do post            |
| `/categoria/[slug]`       | `pages/categoria/[slug].astro`  | Posts por categoria        |
| `/tag/[slug]`             | `pages/tag/[slug].astro`        | Posts por tag              |
| `/[slug]`                 | `pages/[slug].astro`            | Páginas estáticas          |

---

## Componentes

| Componente           | Localização                             | Uso                                |
|----------------------|-----------------------------------------|------------------------------------|
| `CategoryBadge`      | `components/CategoryBadge.astro`        | Badge colorido de categoria        |
| `TagPill`            | `components/TagPill.astro`              | Pílula de tag                      |
| `PostCard`           | `components/PostCard.astro`             | Card de post (grid/listing)        |
| `Sidebar`            | `components/Sidebar.astro`              | Sidebar com categorias e tags      |

---

## Comandos

```bash
# Iniciar containers Directus + PostgreSQL
docker compose up -d

# Parar (dados preservados)
docker compose down

# Destruir incluindo volumes (apaga banco)
docker compose down -v

# Dev server
npm run dev

# Build estático → dist/
npm run build

# Preview do build
npm run preview
```

## Variáveis de ambiente

| Variável              | Padrão                  | Descrição                |
|-----------------------|-------------------------|--------------------------|
| `PUBLIC_DIRECTUS_URL` | `http://localhost:8055` | URL base da API Directus |
