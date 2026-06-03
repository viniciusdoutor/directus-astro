# SEO & Growth — Portal Golden Jus
### Guia completo de posicionamento para um blog de notícias jurídicas

> Este documento cobre: fundamentos de SEO, SEO técnico, SEO de conteúdo, SEO para notícias, Google Discover, E-E-A-T, dados estruturados, link building, growth hacking e ferramentas — tudo aplicado ao contexto do Portal Golden Jus.

---

## Índice

1. [Por que SEO é diferente para um portal de notícias jurídicas](#1)
2. [Os quatro pilares do SEO moderno](#2)
3. [E-E-A-T — A régua do Google para conteúdo jurídico](#3)
4. [SEO Técnico — A fundação invisível](#4)
5. [SEO de Conteúdo — O que rankear e como escrever](#5)
6. [Autoridade Temática — Dominar um assunto inteiro](#6)
7. [Linkagem Interna — O poder que já está no seu site](#7)
8. [Google Discover — Tráfego que chega antes da busca](#8)
9. [Dados Estruturados (Schema) — Falar a língua do Google](#9)
10. [Link Building — Como ganhar autoridade externa](#10)
11. [Growth Hacking para SEO](#11)
12. [Ferramentas — O que usar e quanto custa](#12)
13. [Plano de execução — Por onde começar](#13)
14. [Para estudar mais](#14)

---

<a name="1"></a>
## 1. Por que SEO é diferente para um portal de notícias jurídicas

SEO para blogs de conteúdo evergreen (tutoriais, guias permanentes) é diferente de SEO para portais de notícias. O Portal Golden Jus joga nos dois campos ao mesmo tempo, e entender isso é fundamental.

### Conteúdo evergreen vs. conteúdo de notícia

| Característica       | Conteúdo Evergreen                      | Notícia / Breaking News                   |
|----------------------|-----------------------------------------|-------------------------------------------|
| Exemplo              | "Como estudar para OAB"                | "STF decide sobre reforma administrativa" |
| Vida útil            | Anos                                   | Horas a dias                              |
| Como rankear         | Construção lenta de autoridade         | Velocidade de indexação + relevância      |
| Canal principal      | Google Search (orgânico)               | Google Discover + Google News             |
| Palavra-chave        | Alta concorrência, planejável          | Trending topics, imprevisíveis            |
| Estratégia           | Topical Authority                      | Indexação rápida + imagem grande          |

**O Golden Jus precisa das duas estratégias.** Notícias trazem picos de tráfego e novos leitores. Conteúdo evergreen gera tráfego consistente mês a mês.

### Por que o nicho jurídico exige mais cuidado

O Google classifica conteúdo jurídico como **YMYL (Your Money or Your Life)** — conteúdo que pode afetar a vida de uma pessoa. Isso significa que o algoritmo aplica uma régua mais rigorosa: não basta escrever bem, é preciso demonstrar credibilidade institucional e autoral.

Consequência prática: um blog jurídico iniciante rankeará mais devagar que um blog de culinária. Mas quando rankear, ficará por mais tempo — usuários confiam mais em fontes jurídicas que aparecem no topo.

---

<a name="2"></a>
## 2. Os quatro pilares do SEO moderno (2026)

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   TÉCNICO          CONTEÚDO         AUTORIDADE      EXPERIÊNCIA │
│   (Rastreável,     (Relevante,      (Links,         (Rápido,   │
│   indexável,       útil, profundo)  E-E-A-T,        mobile,    │
│   sem erros)                        schema)         UX limpo)  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
                              ↓
                    Posição no Google
```

Nenhum pilar funciona sozinho. Um site tecnicamente perfeito com conteúdo raso não rankeia. Um conteúdo excelente em um site lento com erros técnicos também não. Os quatro precisam andar juntos.

---

<a name="3"></a>
## 3. E-E-A-T — A régua do Google para conteúdo jurídico

**E-E-A-T** significa: **Experience** (Experiência), **Expertise** (Especialização), **Authoritativeness** (Autoridade) e **Trustworthiness** (Confiabilidade).

Em 2026, o Google afirmou que E-E-A-T não é apenas uma diretriz — é um "gatekeeper": conteúdo sem esses sinais visíveis simplesmente não compete em nichos YMYL.

### Como aplicar cada letra na prática

#### Experience (Experiência)
O autor demonstra ter vivido o assunto? Para o Golden Jus, isso significa:
- Citar casos reais de concursos que já aconteceram
- Trazer perspectivas de quem passou por processos seletivos
- Usar linguagem de quem está dentro do universo jurídico

#### Expertise (Especialização)
- Cada artigo deve ter um **autor identificado com nome completo e mini-bio** (não "Redação")
- A bio deve mencionar formação jurídica, área de atuação ou tempo de experiência
- Artigos técnicos (ex: análise de jurisprudência) devem ser assinados por advogado ou bacharel em Direito

#### Authoritativeness (Autoridade)
- Ser citado por outros sites jurídicos
- Ter o site mencionado em redes profissionais (OAB, academias jurídicas)
- Colaboração com nomes conhecidos do universo jurídico

#### Trustworthiness (Confiabilidade)
- Página "Sobre Nós" bem desenvolvida, com missão editorial clara
- Política de privacidade atualizada
- Dados de contato reais e visíveis
- Fontes citadas nos artigos (links para fontes oficiais: STF, STJ, DOU)
- HTTPS ativo (já garantido por ser Astro com CDN)

### Checklist E-E-A-T para o Golden Jus

- [ ] Criar página `/sobre` com missão, equipe e processo editorial
- [ ] Criar perfis de autor com bio, foto e links para LinkedIn/OAB
- [ ] Adicionar schema `Person` para cada autor
- [ ] Sempre citar fontes primárias (DOU, STF, STJ, portais de concurso oficiais)
- [ ] Adicionar data de publicação e data de atualização em todos os artigos
- [ ] Criar página de `/politica-editorial` explicando como o conteúdo é produzido

---

<a name="4"></a>
## 4. SEO Técnico — A fundação invisível

O Astro já tem vantagens naturais: gera HTML estático, sem JavaScript desnecessário. Mas ainda há trabalho técnico importante.

### 4.1 Core Web Vitals — As métricas que o Google mede

O Google mede três coisas para rankeamento:

| Métrica | O que mede | Meta (2026) | O que afeta |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | Velocidade de carregamento do maior elemento | < 2,5 segundos | Imagem hero, fonte principal |
| **INP** (Interaction to Next Paint) | Tempo de resposta a cliques | < 200 ms | JavaScript pesado, scripts de terceiros |
| **CLS** (Cumulative Layout Shift) | Estabilidade visual (elementos que pulam) | < 0,1 | Imagens sem dimensões, ads, fontes |

**Astro já ajuda muito:** gera HTML puro, carrega zero JS por padrão. Mas atenção: scripts de terceiros (GA4, Clarity, fontes Google) podem degradar essas métricas.

#### Como medir
- [PageSpeed Insights](https://pagespeed.web.dev/) — teste gratuito, resultado em segundos
- Google Search Console → "Core Web Vitals" → dados reais de usuários

#### Ações práticas para o Golden Jus

**Imagens:**
```astro
<!-- Sempre definir width e height para evitar CLS -->
<img
  src={imgSrc}
  alt={post.title}
  width="800"
  height="450"
  loading="lazy"
  decoding="async"
/>
<!-- Para imagem hero (above the fold): loading="eager" -->
```

**Fontes Google (já implementadas no Layout.astro):**
Adicionar `font-display: swap` evita que texto fique invisível enquanto a fonte carrega:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
```
O `display=swap` já está na URL — isso é bom.

**Scripts de terceiros com Partytown:**
```bash
npx astro add @astrojs/partytown
```
Move GA4 e outros scripts pesados para um Web Worker, sem bloquear a thread principal.

### 4.2 Sitemap e indexação

O Astro gera sitemap automaticamente com `@astrojs/sitemap`. Para um portal de notícias, o Google News exige um sitemap específico.

```bash
npx astro add @astrojs/sitemap
```

Configuração em `astro.config.mjs`:
```javascript
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://portalgoldenjus.com.br',
  integrations: [sitemap()],
});
```

Após gerar, submeter em:
- Google Search Console → Sitemaps → `https://portalgoldenjus.com.br/sitemap-index.xml`

**Para notícias (Google News Sitemap):**
O sitemap de notícias informa ao Google artigos publicados nas **últimas 48 horas** — isso acelera a indexação de breaking news. É um XML separado com formato específico que o Astro não gera nativamente, mas pode ser gerado por uma rota dinâmica (`/sitemap-news.xml`).

### 4.3 Robots.txt

Arquivo em `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://portalgoldenjus.com.br/sitemap-index.xml
```

### 4.4 Canonical tags

Evitam conteúdo duplicado — problema comum quando uma notícia aparece em múltiplas páginas (lista de categoria + página de artigo + tag).

No `Layout.astro`, dentro do `<head>`:
```astro
<link rel="canonical" href={Astro.url.href} />
```

### 4.5 Open Graph e meta tags para redes sociais

Essencial para que links compartilhados no WhatsApp, Twitter/X e LinkedIn apareçam com imagem e título corretos.

```astro
<!-- No <head> do Layout.astro -->
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImage ?? '/og-default.png'} />
<meta property="og:url" content={Astro.url.href} />
<meta property="og:type" content="article" />
<meta property="og:locale" content="pt_BR" />
<meta name="twitter:card" content="summary_large_image" />
```

A imagem OG deve ter **1200×630px** — tamanho padrão para preview em redes.

### 4.6 IndexNow — Indexação instantânea

Em 2026, o protocolo IndexNow permite notificar motores de busca (Bing, Yahoo, DuckDuckGo) imediatamente quando um artigo novo é publicado. O Bing indexa em minutos. Isso não funciona com o Google diretamente, mas aumenta presença geral.

Implementação simples: um arquivo `[chave].txt` na raiz + uma chamada de API quando o conteúdo é publicado no Directus.

---

<a name="5"></a>
## 5. SEO de Conteúdo — O que rankear e como escrever

### 5.1 Pesquisa de palavras-chave (keyword research)

Antes de escrever, descubra o que as pessoas pesquisam.

#### Tipos de palavra-chave

| Tipo | Exemplo | Volume | Concorrência | Estratégia |
|---|---|---|---|---|
| **Head** | "concursos públicos" | Altíssimo | Altíssima | Evitar no início |
| **Body** | "concurso TJ SP 2026" | Médio | Média | Alvo principal |
| **Long tail** | "como se inscrever concurso TJ SP 2026 edital" | Baixo | Baixa | Vitórias rápidas |

**Para um portal iniciante:** foque em long tail e body terms. Termos de cauda longa têm menos concorrência e quem pesquisa com precisão tem mais intenção de leitura.

#### Processo de pesquisa

1. **Pesquisa base:** Abra o Google e comece a digitar termos jurídicos. Observe o autocomplete — são pesquisas reais.
2. **"Pesquisas relacionadas":** No final da SERP do Google, há sugestões valiosas e gratuitas.
3. **"People Also Ask":** As caixas de perguntas frequentes que o Google mostra são oportunidades de conteúdo.
4. **Ferramentas** (ver seção 12)

#### Keywords específicas para o Golden Jus

Estes são exemplos de clusters de palavras que fazem sentido:

```
Cluster: Concursos
├── concurso público direito 2026
├── concurso TJ [estado] 2026
├── concurso MP 2026
├── concurso advocacia pública 2026
└── edital concurso jurídico

Cluster: Carreiras
├── como passar em concurso de direito
├── diferença entre juiz promotor defensor
├── carreira jurídica pública salário
└── OAB segunda fase como estudar

Cluster: Jurisprudência
├── STF decisão [tema] 2026
├── STJ tese [matéria]
└── súmula [número] explicada
```

### 5.2 Intenção de busca — o que o usuário quer?

Escrever para a palavra-chave certa mas com o formato errado resulta em baixo ranking.

| Intenção | O usuário quer | Formato ideal |
|---|---|---|
| **Informacional** | Entender algo | Artigo explicativo, guia |
| **Navegacional** | Achar um site específico | Não atacar essa |
| **Comercial** | Comparar opções | Lista, comparativo |
| **Transacional** | Fazer algo agora | Instrução passo a passo |

Pesquise a palavra-chave no Google e observe os 5 primeiros resultados. O Google já sinalizou qual formato funciona para aquela intenção.

### 5.3 Como estruturar um artigo que rankeia

#### Título (H1)
- Deve conter a palavra-chave principal
- Entre 50 e 60 caracteres para não cortar na SERP
- Números funcionam bem ("5 dicas", "STF decide em 3 pontos")
- Para notícias: seja direto — o Google News premia clareza

```
✅ "Concurso TJ-SP 2026: edital, vagas e como se inscrever"
❌ "Tudo sobre o incrível concurso do Tribunal de Justiça de São Paulo"
```

#### Meta description
- 120 a 155 caracteres
- Deve "vender" o clique, não apenas resumir
- Inclua a palavra-chave naturalmente

```
✅ "O edital do concurso TJ-SP 2026 foi publicado com 387 vagas. Veja cargos, salários, prazos e como se inscrever."
```

#### Estrutura do conteúdo
```
H1 — Título principal (com keyword)
  └── Lead (primeiros 2-3 parágrafos) — responda a pergunta principal JÁ
      └── H2 — Subtópico 1
          └── H3 — Detalhes (se necessário)
      └── H2 — Subtópico 2
      └── H2 — FAQ (Perguntas Frequentes) ← Poderoso para People Also Ask
      └── Conclusão com CTA
```

#### O lead é o mais importante
O Google usa os primeiros parágrafos para entender o que a página responde. Usuários que chegam de busca decidem em 3 segundos se ficam ou saem. Escreva o mais importante primeiro — jornalismo invertido.

#### Comprimento ideal
- Notícia de breaking news: 400–800 palavras (velocidade > profundidade)
- Artigo de análise: 1.200–2.000 palavras
- Conteúdo evergreen / guia: 2.000–4.000 palavras

### 5.4 FAQ — Perguntas Frequentes como estratégia

Adicionar uma seção de FAQ ao final dos artigos é uma das estratégias mais eficazes em 2026 para aparecer no "People Also Ask" e nas AI Overviews do Google.

Cada pergunta deve ser um H3, com resposta direta e concisa logo abaixo. Combinado com schema `FAQPage` (ver seção 9), isso sinaliza ao Google o formato pergunta-resposta.

### 5.5 Velocidade de publicação para notícias

Para notícias jurídicas, as primeiras horas após um evento determinam quem aparece no Google Discover e no Google News. Estratégia:

1. Publique um artigo "base" rapidamente (400 palavras) com o fato principal
2. Atualize o mesmo artigo com mais detalhes ao longo do dia
3. Altere a `dateModified` no schema para sinalizar atualização ao Google
4. O Google valoriza artigos atualizados em notícias — não crie um novo artigo, atualize o original

---

<a name="6"></a>
## 6. Autoridade Temática — Dominar um assunto inteiro

**Topical Authority** é o conceito mais importante do SEO de 2026: o Google não avalia mais página por página isoladamente. Ele avalia se o **site como um todo** é uma fonte confiável sobre determinado assunto.

### Como funciona

Imagine dois sites:
- Site A: 500 artigos sobre temas variados de Direito
- Site B: 50 artigos especializados em concursos jurídicos, cobrindo todos os ângulos do assunto

O Site B provavelmente rankeia melhor para buscas de concursos jurídicos, mesmo tendo 10x menos conteúdo. O Google identifica que o Site B é especialista.

### Modelo Pillar-Cluster para o Golden Jus

```
PILLAR PAGE (página âncora — cobre o tema amplo)
"Guia Completo: Concursos Jurídicos no Brasil 2026"
        │
        ├── Cluster: "Concurso TJ-SP 2026 — edital completo"
        ├── Cluster: "Concurso MP-RJ 2026 — como se inscrever"
        ├── Cluster: "Carreiras na Magistratura — guia completo"
        ├── Cluster: "Como estudar para concurso de Direito"
        ├── Cluster: "OAB como porta de entrada para concursos"
        └── Cluster: "Diferença entre Juiz, Promotor e Defensor Público"
```

Cada cluster linka para a pillar page. A pillar page linka para todos os clusters. Isso cria uma teia de autoridade temática que o Google reconhece.

### Clusters sugeridos para o Golden Jus

| Pillar Page | Clusters |
|---|---|
| Guia de Concursos Jurídicos | Editais por estado, por cargo, cronograma |
| Guia de Carreiras Jurídicas | Cada carreira explicada, salários, requisitos |
| Guia de Jurisprudência STF/STJ | Súmulas, teses, decisões por matéria |
| Guia de Estudos para Concursos | Materiais, técnicas, cronogramas |
| Guia de Legislação | Leis recentes, explicações acessíveis |

---

<a name="7"></a>
## 7. Linkagem Interna — O poder que já está no seu site

Links internos distribuem autoridade dentro do próprio site e ajudam o Google a entender a estrutura do conteúdo. Sites com estratégia de linkagem interna bem executada têm **30% mais tráfego orgânico** segundo dados de 2026.

### Regras práticas

**1. Link de artigos novos para artigos antigos relevantes**
Cada novo artigo publicado deve ter pelo menos 3 links internos para artigos relacionados já existentes no site.

**2. Âncora descritiva — nunca "clique aqui"**
```
❌ "Para saber mais, clique aqui."
✅ "Veja nosso guia completo sobre como estudar para concursos de Direito."
```
O texto da âncora diz ao Google sobre o que é a página de destino.

**3. Link para a Pillar Page em todos os clusters**
Todo artigo de cluster deve ter um link de volta para a página âncora do tema.

**4. Quantidade por artigo**
- Artigos curtos (400–800 palavras): 3–5 links internos
- Artigos longos (2.000+ palavras): 5–12 links internos

**5. Links no corpo do texto, não apenas na sidebar**
Links contextuais (dentro do parágrafo) têm mais peso que links em listas ou sidebars.

---

<a name="8"></a>
## 8. Google Discover — Tráfego que chega antes da busca

O Google Discover é o feed que aparece na página inicial do Chrome e no aplicativo Google, mostrando conteúdo que o algoritmo acha relevante para o usuário **antes mesmo de ele pesquisar**. Para portais de notícias, pode ser a maior fonte de tráfego.

Em fevereiro de 2026, o Google lançou uma atualização dedicada ao Discover que penalizou clickbait e recompensou conteúdo original e especializado.

### O que o Discover valoriza

1. **Imagem grande e de qualidade** — a imagem é o primeiro elemento que o usuário vê. Deve ter no mínimo 1.200px de largura. Configure `max-image-preview:large` no cabeçalho HTTP ou use o meta tag:
   ```html
   <meta name="robots" content="max-image-preview:large" />
   ```

2. **Título não-clickbait** — títulos sensacionalistas ("Você não vai acreditar...") são penalizados. Títulos diretos e informativos são recompensados.

3. **Velocidade mobile** — o Discover é consumido quase 100% no celular. LCP abaixo de 2,5 segundos é obrigatório.

4. **Frequência de publicação** — portais que publicam diariamente têm mais chances de aparecer no Discover do que os que publicam esporadicamente.

5. **Engajamento histórico** — usuários que já visitaram o site têm mais chance de ver o conteúdo no Discover. Isso cria um ciclo: quanto mais leitores fiéis (via newsletter, por exemplo), mais o Discover amplifica.

6. **Botão "Seguir"** — desde 2025, o Google Discover tem um botão "Seguir" que assinantes veem com mais frequência. Para ativá-lo, o site precisa ter um feed RSS configurado.

### Feed RSS para o Discover

O Astro não gera RSS por padrão. Adicionar:

```bash
npx astro add @astrojs/rss
```

Criar rota `src/pages/rss.xml.ts` com os artigos mais recentes. Isso também ativa o botão "Seguir" do Discover e alimenta leitores de RSS.

---

<a name="9"></a>
## 9. Dados Estruturados (Schema) — Falar a língua do Google

Schema Markup é um código JSON-LD adicionado ao `<head>` das páginas que diz ao Google exatamente o que é aquele conteúdo. Em 2026, schema bem implementado aumenta CTR em 20–40% e é essencial para aparecer nas AI Overviews.

### Schemas prioritários para o Golden Jus

#### NewsArticle (para todo artigo de notícia)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Concurso TJ-SP 2026 tem 387 vagas abertas",
  "description": "O edital do concurso do Tribunal de Justiça de São Paulo...",
  "image": "https://portalgoldenjus.com.br/imagens/tj-sp-2026.jpg",
  "datePublished": "2026-06-03T10:00:00-03:00",
  "dateModified": "2026-06-03T14:30:00-03:00",
  "author": {
    "@type": "Person",
    "name": "Dr. João Silva",
    "url": "https://portalgoldenjus.com.br/autor/joao-silva"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Portal Golden Jus",
    "logo": {
      "@type": "ImageObject",
      "url": "https://portalgoldenjus.com.br/logo-golden-jus.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://portalgoldenjus.com.br/blog/concurso-tj-sp-2026"
  }
}
</script>
```

#### FAQPage (para artigos com seção de perguntas)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qual o prazo para inscrição no concurso TJ-SP 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As inscrições vão de 10 de junho a 10 de julho de 2026..."
      }
    }
  ]
}
</script>
```

#### BreadcrumbList (navegação estruturada)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://portalgoldenjus.com.br"},
    {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://portalgoldenjus.com.br/blog"},
    {"@type": "ListItem", "position": 3, "name": "Concursos", "item": "https://portalgoldenjus.com.br/categoria/concursos-abertos"},
    {"@type": "ListItem", "position": 4, "name": "Concurso TJ-SP 2026", "item": "https://portalgoldenjus.com.br/blog/concurso-tj-sp-2026"}
  ]
}
</script>
```

#### Organization (na homepage e no Layout global)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Portal Golden Jus",
  "url": "https://portalgoldenjus.com.br",
  "logo": "https://portalgoldenjus.com.br/logo-golden-jus.svg",
  "sameAs": [
    "https://www.instagram.com/portalgoldenjus",
    "https://www.linkedin.com/company/portalgoldenjus"
  ]
}
</script>
```

### Validar o schema

Após implementar, sempre validar em:
- [Rich Results Test](https://search.google.com/test/rich-results) — verificar se o Google reconhece
- [Schema Markup Validator](https://validator.schema.org/) — validar a estrutura

---

<a name="10"></a>
## 10. Link Building — Como ganhar autoridade externa

Links de outros sites apontando para o Golden Jus são "votos de confiança" que aumentam a autoridade do domínio. É o fator de rankeamento mais difícil de fabricar — e por isso o mais valioso.

### Estratégias de link building para um portal jurídico

#### 1. Guest posts em portais jurídicos
Escreva artigos para outros portais e blogs jurídicos (faculdades de Direito, escritórios, portais de concursos) e inclua um link de volta ao Golden Jus na bio ou no corpo do texto.

#### 2. Ser citado como fonte
Artigos originais com dados, pesquisas e análises atraem links naturalmente. Um estudo sobre "quantos concursos jurídicos foram abertos em 2026 por estado" é o tipo de conteúdo que portais maiores citam.

#### 3. HARO / Jornalismo de fontes
Responda solicitações de jornalistas que precisam de fontes especializadas em Direito. Quando citado em um veículo grande, você ganha um backlink de alta autoridade.

#### 4. Parcerias com cursinos e faculdades
Estabeleça parcerias editoriais com cursinhos preparatórios para concursos jurídicos. Eles linkam para o portal, você publica conteúdo relevante para os alunos deles.

#### 5. Broken link building
Encontre links quebrados em outros sites jurídicos (páginas que eram relevantes mas sumiu) e ofereça o conteúdo do Golden Jus como substituto.

#### 6. Social proof e menções
Links de redes sociais não transferem autoridade diretamente, mas geram tráfego que, se resultar em engajamento, sinaliza ao Google que o conteúdo é relevante.

### O que NÃO fazer (penalizações)
- Comprar links em fazendas de links (Black hat — penalização manual do Google)
- Trocar links em excesso com sempre os mesmos sites
- Links de sites irrelevantes para o nicho jurídico

---

<a name="11"></a>
## 11. Growth Hacking para SEO

Growth hacking é usar criatividade e dados para crescer mais rápido do que o caminho convencional permitiria. Para SEO de um blog de notícias, as táticas a seguir têm maior relação custo-benefício.

### Tática 1 — Rankear nas perguntas que ninguém respondeu ainda

Use o Google para buscar perguntas específicas sobre concursos jurídicos. Se os resultados forem ruins (sites genéricos, respostas incompletas), essa é uma oportunidade: escreva o melhor artigo possível sobre aquela pergunta. Em nichos especializados, isso funciona em semanas, não meses.

**Ferramentas gratuitas:** Google autocomplete, "People Also Ask", AnswerThePublic.

### Tática 2 — Atualizar conteúdo antigo

Um artigo publicado há 6 meses que está na posição 8–15 tem muito mais potencial do que criar um novo artigo do zero. Atualize-o com informações mais recentes, adicione mais profundidade, atualize o `dateModified` — e frequentemente ele sobe para o top 5.

Esse é o melhor retorno sobre investimento de tempo em SEO de conteúdo.

### Tática 3 — Topical Gap Analysis

Liste os tópicos que os seus concorrentes cobrem e você não. Cada lacuna é uma oportunidade. Use o Ubersuggest ou Semrush (versão gratuita) para fazer análise de concorrentes e descobrir quais palavras-chave eles rankeia e você não.

### Tática 4 — Velocidade de indexação com Google Search Console

Após publicar cada artigo, vá ao Google Search Console → "Inspeção de URL" → "Solicitar indexação". O Google geralmente indexa em horas, não dias. Para notícias, isso é a diferença entre aparecer no Discover hoje ou semana que vem.

### Tática 5 — Newsletter como motor de retorno

Cada leitor que assina a newsletter e volta ao site via e-mail manda um sinal comportamental ao Google: "esse site é relevante o suficiente para ser visitado repetidamente". Isso aumenta o ranking. A newsletter não é apenas um canal — é um amplificador de SEO.

### Tática 6 — Aproveitar eventos previsíveis

Calendário de concursos é previsível. Se o TJ-SP abre concurso todo ano em março, publique o artigo de preparação em fevereiro. Você indexa antes da demanda explode, e quando o edital sair, o artigo já tem autoridade.

**Calendário editorial baseado em eventos previsíveis:**
- Janeiro: previsão de concursos para o ano
- Março–Abril: concursos federais (ANPPC)
- Junho–Julho: concursos estaduais (TJs, MPs)
- Outubro: OAB Exame de Ordem
- Dezembro: retrospectiva e preview do próximo ano

### Tática 7 — Conteúdo "Skyscraper"

Encontre o artigo mais completo sobre um tema no Google. Escreva um artigo ainda mais completo — mais atualizado, com dados mais recentes, com FAQ, com schema. Depois contate sites que linkam para o artigo antigo e ofereça o seu como alternativa superior.

### Tática 8 — Otimização de CTR sem mudar o ranking

Se você está na posição 5 mas com CTR baixo, mude o título e a meta description para algo mais atraente. Aumento de CTR sinaliza ao Google que o resultado é relevante — e pode subir para posição 3 sem nenhum novo conteúdo.

Teste diferentes títulos e meça no Google Search Console (CTR por página).

### Tática 9 — SEO para YouTube e podcasts jurídicos

Conteúdo em vídeo no YouTube ranqueia no Google. Um canal de YouTube do Golden Jus com análises de concursos e jurisprudência cria uma segunda fonte de tráfego e fortalece a autoridade da marca (E-E-A-T).

---

<a name="12"></a>
## 12. Ferramentas — O que usar e quanto custa

### Ferramentas gratuitas (começar por aqui)

| Ferramenta | O que faz | Link |
|---|---|---|
| **Google Search Console** | Mostra como o Google vê seu site: posições, cliques, erros de indexação, Core Web Vitals reais | [search.google.com/search-console](https://search.google.com/search-console) |
| **Google PageSpeed Insights** | Mede velocidade e Core Web Vitals da sua página | [pagespeed.web.dev](https://pagespeed.web.dev) |
| **Rich Results Test** | Valida seu schema markup | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) |
| **Ubersuggest** (free tier) | Pesquisa de palavras-chave, análise de concorrentes — limitado mas útil | [ubersuggest.com](https://neilpatel.com/ubersuggest/) |
| **AnswerThePublic** | Mostra perguntas reais que as pessoas fazem sobre um tema | [answerthepublic.com](https://answerthepublic.com) |
| **Screaming Frog** (free até 500 URLs) | Rastreia o site como o Google faz, encontra erros técnicos | [screamingfrog.co.uk](https://www.screamingfrog.co.uk/seo-spider/) |

### Ferramentas pagas que valem (quando crescer)

| Ferramenta | Custo | O que faz melhor | Vale quando... |
|---|---|---|---|
| **Ahrefs** | ~US$ 129/mês (~R$ 700) | Análise de backlinks, pesquisa de keywords, auditoria técnica | Site com 10k+ visitas/mês e estratégia de link building ativa |
| **SEMrush** | ~US$ 120/mês (~R$ 650) | Tudo do Ahrefs + análise de anúncios concorrentes | Quando houver campanhas pagas também |
| **Mangools / KWFinder** | ~US$ 29/mês (~R$ 160) | Pesquisa de long tail com baixa concorrência | Bom custo-benefício para blogs em crescimento |
| **SE Ranking** | ~US$ 44/mês (~R$ 240) | Monitoramento de posições, relatórios de clientes | Quando precisar acompanhar rankings diariamente |

### Ferramentas gratuitas essenciais para implementar agora

```
Prioridade 1 — Hoje:
✅ Google Search Console (indexação + posições)
✅ Google PageSpeed Insights (velocidade)

Prioridade 2 — Esta semana:
✅ Rich Results Test (validar schema após implementar)
✅ AnswerThePublic (pesquisa de perguntas por tema)

Prioridade 3 — Este mês:
✅ Screaming Frog (auditoria técnica completa)
✅ Ubersuggest (análise de concorrentes)
```

---

<a name="13"></a>
## 13. Plano de execução — Por onde começar

### Semana 1 — Fundação técnica
- [ ] Verificar o site no Google Search Console e submeter sitemap
- [ ] Instalar `@astrojs/sitemap` e configurar com a URL de produção
- [ ] Adicionar `<link rel="canonical">` no Layout.astro
- [ ] Adicionar meta tags Open Graph no Layout.astro
- [ ] Adicionar `<meta name="robots" content="max-image-preview:large">` para o Discover
- [ ] Testar velocidade no PageSpeed Insights e registrar o baseline

### Semana 2 — Schema e E-E-A-T
- [ ] Implementar schema `NewsArticle` nos artigos (`[slug].astro`)
- [ ] Implementar schema `Organization` na homepage
- [ ] Implementar schema `BreadcrumbList` nos artigos
- [ ] Criar página `/sobre` com história e equipe do portal
- [ ] Criar perfis de autor com bio e foto

### Semana 3 — Conteúdo estratégico
- [ ] Escolher 3 pillar pages para criar (temas amplos: concursos, carreiras, jurisprudência)
- [ ] Listar 10 long tail keywords para atacar no próximo mês
- [ ] Revisar os 5 artigos mais visitados e adicionar FAQ + links internos
- [ ] Instalar `@astrojs/rss` para habilitar o feed RSS (botão "Seguir" do Discover)

### Semana 4 — Growth e publicação sistemática
- [ ] Definir calendário editorial para o próximo mês com base em eventos jurídicos previsíveis
- [ ] Solicitar indexação no Search Console para os 10 artigos mais importantes
- [ ] Começar a estratégia de linkagem interna em todos os artigos novos
- [ ] Criar sistema de UTMs para newsletter (medir qual conteúdo converte mais assinantes)

### Mês 2 em diante — Ritmo e expansão
- [ ] Publicar mínimo de 3 artigos por semana (constância supera volume)
- [ ] Auditar mensalmente com Screaming Frog em busca de links quebrados e erros
- [ ] Revisar o Search Console toda semana: quais posições subiram? quais caíram? por quê?
- [ ] Identificar artigos nas posições 8–15 e atualizá-los para subir ao top 5
- [ ] Avaliar ferramentas pagas quando atingir 5.000 visitas/mês orgânicas

---

<a name="14"></a>
## 14. Para estudar mais

### Fontes oficiais (gratuitas e definitivas)

- **[Google Search Central](https://developers.google.com/search)** — documentação oficial do Google sobre como o buscador funciona. Mais confiável que qualquer blog.
- **[Google's Quality Rater Guidelines](https://static.googleusercontent.com/media/guidelines.raterhub.com/pt-BR//searchqualityevaluatorguidelines.pdf)** — o manual que os avaliadores humanos do Google usam. Leitura obrigatória para entender E-E-A-T.
- **[Google Search Console Help](https://support.google.com/webmasters)** — como usar a ferramenta do Google.

### Canais e blogs de referência

- **[Backlinko](https://backlinko.com)** — Brian Dean, criador do método Skyscraper. Guias práticos e baseados em dados. Melhor recurso gratuito em inglês.
- **[Ahrefs Blog](https://ahrefs.com/blog)** — conteúdo profundo sobre keywords, link building e SEO técnico. Gratuito, mesmo sem assinar a ferramenta.
- **[Conversion.com.br](https://www.conversion.com.br/blog)** — melhor blog de SEO em português do Brasil. Focado no mercado BR.
- **[SEO Happy Hour](https://seohappyhour.com)** — podcast e blog sobre SEO em português.
- **[Hedgehog Digital BR](https://br.hedgehogdigital.co.uk/blog)** — conteúdo específico sobre SEO para portais de notícias no Brasil.

### Cursos gratuitos

- **[Google Digital Garage](https://learndigital.withgoogle.com/digitalgarage/courses)** — cursos do Google sobre marketing digital e SEO, com certificação gratuita.
- **[SEO Fundamentals — Semrush Academy](https://www.semrush.com/academy/)** — gratuito, certificação reconhecida pelo mercado.
- **[Ahrefs Academy](https://ahrefs.com/academy)** — cursos gratuitos da Ahrefs sobre SEO e pesquisa de palavras-chave.

### Livros

- **"The Art of SEO"** — Eric Enge, Stephan Spencer e Jessie Stricchiola. A referência mais completa sobre SEO técnico e de conteúdo.
- **"They Ask, You Answer"** — Marcus Sheridan. Como criar conteúdo que responde perguntas reais dos clientes — aplicável diretamente ao Golden Jus.

---

## Resumo executivo — o que importa mais

Se tiver que escolher apenas 5 coisas para implementar agora:

1. **Google Search Console** — Sem ele você está cego sobre o que o Google pensa do seu site.
2. **Schema NewsArticle** — Sinaliza ao Google que você é portal de notícias e aumenta CTR.
3. **E-E-A-T visível** — Páginas de autor, citação de fontes, política editorial. Fundamental para nicho YMYL.
4. **Canonical + Open Graph** — Evita duplicação de conteúdo e garante preview bonito nas redes.
5. **Publicação consistente** — O Google favorece sites que publicam regularmente. 3 artigos/semana > 10 artigos em uma semana e nenhum no próximo mês.

Tudo o mais é otimização em cima dessa base.

---

## Referências

- [Google Mudou as Diretrizes de SEO para 2026 — iCloud Tutoriais](https://icloud.com.br/blog/google-mudou-as-diretrizes-de-seo-para-2026/)
- [Estratégias Fundamentais de SEO para Portal de Notícias — Hedgehog Digital BR](https://br.hedgehogdigital.co.uk/blog/seo-para-portal-de-noticias/)
- [Google Discover Core Update: February 2026 — Digital Applied](https://www.digitalapplied.com/blog/google-discover-core-update-february-2026-seo-guide/)
- [E-E-A-T Guide 2026 — SEO-Kreativ](https://www.seo-kreativ.de/en/blog/e-e-a-t-guide-for-more-trust-and-top-rankings/)
- [YMYL Content Guidelines 2026 — Koanthic](https://koanthic.com/en/ymyl-content-guidelines-complete-guide-for-2026/)
- [Core Web Vitals 2026 — ALM Corp](https://almcorp.com/blog/core-web-vitals-2026-technical-seo-guide/)
- [Core Web Vitals: Astro vs Everyone Else — Search Engine Journal](https://www.searchenginejournal.com/core-web-vitals-wordpress-and-astro/575818/)
- [Schema Markup Guide 2026 — SEO Score Tools](https://seoscore.tools/blog/schema-markup-guide/)
- [Article Schema — Google Developers](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Topical Authority SEO 2026 — ClickRank](https://www.clickrank.ai/topical-authority/)
- [Internal Linking Strategy 2026 — Digital Applied](https://www.digitalapplied.com/blog/internal-linking-strategy-2026-large-site-architecture-guide)
- [Google Discover para Portais de Notícias — PYXYS](https://pyxys.com.br/google-discovery-para-portais-de-noticias)
- [Google Discover Optimization Guide 2026 — Newsifier](https://www.newsifier.com/blog/news-seo/the-ultimate-google-discover-optimization-guide-12-tips-on-how-to-get-more-traffic-2026)
- [Growth Hacking e SEO 2026 — Millbody](https://millbody.com/growth-hacking-seo-explodir-trafico-2026/)
