# directus-astro

Site estático com **Astro 5** consumindo o CMS **Directus** via SDK REST.

## Stack

| Camada   | Tecnologia                    |
|----------|-------------------------------|
| Frontend | Astro 5 + Tailwind CSS v4     |
| CMS      | Directus 11 (Docker)          |
| Banco    | PostgreSQL 16 (Docker)        |
| SDK      | `@directus/sdk` v21           |

## Estrutura de páginas

| Rota             | Fonte de dados       |
|------------------|----------------------|
| `/`              | Singleton `global`   |
| `/blog`          | Coleção `posts`      |
| `/blog/[slug]`   | Coleção `posts`      |
| `/[slug]`        | Coleção `pages`      |

---

## Inicialização

### Pré-requisitos

- Node.js ≥ 18
- Docker + Docker Compose

### 1. Subir o Directus (banco + CMS)

```bash
docker compose up -d
```

Aguarde o Directus inicializar (~20 s). Verifique com:

```bash
curl http://localhost:8055/server/health
# esperado: {"status":"ok"}
```

**Painel admin:** `http://localhost:8055`  
**Credenciais:** `admin@admin.com` / `admin123`

### 2. Configurar variáveis de ambiente

```bash
cp .env.example .env
# edite .env se necessário (padrão já aponta para localhost:8055)
```

### 3. Instalar dependências e iniciar o dev server

```bash
npm install
npm run dev
```

**Frontend:** `http://localhost:4321`

---

## Estrutura de coleções no Directus

### `global` (singleton)
| Campo         | Tipo   |
|---------------|--------|
| `title`       | string |
| `description` | text   |

### `posts`
| Campo            | Tipo                        |
|------------------|-----------------------------|
| `title`          | string                      |
| `slug`           | string                      |
| `content`        | text                        |
| `published_date` | date                        |
| `image`          | string                      |
| `author`         | M2O → `directus_users`      |

### `pages`
| Campo     | Tipo   |
|-----------|--------|
| `title`   | string |
| `slug`    | string |
| `content` | text   |

> Permissões públicas de leitura estão configuradas nas três coleções e em `directus_users` (campos `first_name`, `last_name`).

---

## Comandos úteis

```bash
# Iniciar apenas os containers do Directus
docker compose up -d

# Parar os containers (dados preservados)
docker compose down

# Destruir tudo incluindo dados do banco
docker compose down -v

# Dev server do frontend
npm run dev

# Build estático
npm run build

# Preview do build
npm run preview
```

## Variáveis de ambiente

| Variável              | Padrão                  | Descrição                |
|-----------------------|-------------------------|--------------------------|
| `PUBLIC_DIRECTUS_URL` | `http://localhost:8055` | URL base da API Directus |
