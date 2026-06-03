# Plano de Rastreamento — Portal Golden Jus

> Objetivo: transformar o blog em uma máquina de dados reais de comportamento, conversão e crescimento de audiência — sem comprometer performance ou privacidade dos leitores.

---

## 1. Por que rastrear bem?

Um blog jurídico tem dois tipos de "conversão": **audiência** (leitores que voltam, assinam newsletter, compartilham) e **engajamento qualificado** (quem lê até o fim, clica em CTAs, filtra por categoria). Sem dados, toda decisão editorial é achismo.

Rastreamento bem feito responde perguntas como:
- Qual categoria retém leitores por mais tempo?
- Onde os usuários abandonam o artigo?
- Qual fonte de tráfego converte mais assinantes de newsletter?
- O CTA "Ver concursos" está visível para a maioria?

---

## 2. As três camadas de rastreamento

```
┌─────────────────────────────────────────────────────┐
│  CAMADA 1 — Analytics (o quê e quanto)              │
│  Pageviews, sessões, fontes, países, dispositivos   │
├─────────────────────────────────────────────────────┤
│  CAMADA 2 — Comportamento (o como)                  │
│  Scroll depth, heatmaps, gravações de sessão        │
├─────────────────────────────────────────────────────┤
│  CAMADA 3 — Conversão (o porquê)                    │
│  Eventos customizados, funil, UTM, metas            │
└─────────────────────────────────────────────────────┘
```

Ferramentas diferentes cobrem camadas diferentes. O ideal é empilhá-las com baixo custo.

---

## 3. Camada 1 — Analytics Principal

### 3.1 Comparativo das principais ferramentas

| Critério              | **GA4** (Google)      | **Plausible**         | **Umami** (self-hosted) | **Matomo**           |
|-----------------------|-----------------------|-----------------------|-------------------------|----------------------|
| Custo                 | Gratuito              | US$ 9/mês (até 10k)   | Gratuito (infra própria)| Gratuito (self) / pago (cloud) |
| Cookies               | Sim (consentimento)   | Não                   | Não                     | Configurável         |
| LGPD/GDPR             | Requer banner         | Nativo                | Nativo                  | Configurável         |
| Bloqueado por AdBlock | Frequentemente        | Pouco                 | Pouco                   | Moderado             |
| Script peso           | ~45 KB                | < 1 KB                | ~2 KB                   | ~22 KB               |
| Dados em tempo real   | Sim                   | Sim                   | Sim                     | Sim                  |
| Relatórios avançados  | Muito avançado        | Intermediário         | Básico–intermediário    | Avançado             |
| Funis e metas         | Sim                   | Sim (v2)              | Sim                     | Sim                  |
| Integração com Astro  | Script tag / partytown| Script tag            | Script tag              | Script tag           |
| Dados de propriedade  | Google                | Sua conta             | Seu servidor            | Seu servidor         |
| Curva de aprendizado  | Alta                  | Baixa                 | Baixa                   | Média                |

### 3.2 Recomendação para o Portal Golden Jus

**Estratégia dupla: GA4 + Umami (self-hosted)**

**Por quê os dois?**

- **GA4** é indispensável se você quiser anúncios Google, integração com Google Search Console e acesso a relatórios de aquisição orgânica detalhados (palavras-chave, impressões, CTR).
- **Umami** cobre o que o GA4 erra: usuários com AdBlock, dados sem cookies, dashboard limpo e de propriedade 100% sua. Funciona como dado "de verdade" paralelo.

**Prós da estratégia dupla:**
- GA4 para SEO e campanhas pagas
- Umami para dados não enviesados pelo AdBlock (estimativas mostram que blogs jurídicos perdem 20–35% dos dados reais com apenas GA4)
- Custo zero (Umami self-hosted + GA4 gratuito)

**Contras:**
- Necessita de um servidor para o Umami (VPS de US$ 5/mês já resolve)
- Manutenção mínima do container Docker

---

## 4. Camada 2 — Comportamento (Heatmaps + Gravações)

### 4.1 Comparativo

| Critério              | **Microsoft Clarity**  | **Hotjar** (free)     | **PostHog** (open source) |
|-----------------------|------------------------|-----------------------|---------------------------|
| Custo                 | **100% gratuito**      | Gratuito (35 sess/dia)| Gratuito até 1M eventos   |
| Sessões gravadas      | Ilimitado              | 35/dia (free)         | Ilimitado                 |
| Heatmaps              | Sim (clique, scroll, move)| Sim               | Sim                       |
| Dead clicks / rage clicks | Sim (AI)          | Sim                   | Sim                       |
| IA integrada          | Sim (4 features em 2026)| Não (plano pago)    | Parcial                   |
| Retenção de dados     | 30 dias (gravações)    | 365 dias              | Configurável              |
| Setup                 | < 5 min                | < 5 min               | Mais complexo             |
| LGPD                  | Requer atenção         | Requer atenção        | Self-hosted = ok          |

### 4.2 Recomendação

**Microsoft Clarity — começar aqui.**

Gratuito, sem limites de sessão, IA que detecta automaticamente padrões problemáticos (rage clicks, dead clicks, scroll freeze). Em 2026 alimenta mais de 2 milhões de sites e passou a ser a referência em blogs de conteúdo.

O que você vai aprender com ele:
- **Scroll map**: até onde os leitores chegam em cada artigo — se o CTA de newsletter está em zona "fria", mova para cima.
- **Click map**: quais elementos geram cliques sem ser links (problema de UX).
- **Gravações**: veja sessões reais de leitores navegando no portal — identifica confusão de layout sem precisar de pesquisa.

---

## 5. Camada 3 — Conversão e Eventos Customizados

### 5.1 Eventos essenciais para um blog jurídico

| Evento                         | Trigger                              | O que revela                          |
|--------------------------------|--------------------------------------|---------------------------------------|
| `article_read_75`              | Usuário scrollou 75% do artigo       | Taxa de leitura real                  |
| `article_read_100`             | Usuário scrollou 100% do artigo      | Leitores mais engajados               |
| `newsletter_click`             | Clique no botão de newsletter        | Interesse em assinar                  |
| `newsletter_submit`            | Envio do formulário de e-mail        | Conversão real de assinante           |
| `category_click`               | Clique em uma categoria              | Interesses editoriais                 |
| `tag_click`                    | Clique em uma tag                    | Tópicos de maior interesse            |
| `cta_concursos_click`          | Clique em "Ver concursos"            | Usuários de alta intenção             |
| `share_intent`                 | Clique em redes sociais              | Conteúdo com potencial viral          |
| `search_use`                   | Uso da busca interna                 | O que os leitores não estão achando   |
| `outbound_link`                | Clique em link externo               | Para onde o leitor vai               |

### 5.2 Scroll depth — implementação no Astro

```typescript
// src/lib/tracking.ts
export function initScrollTracking() {
  const milestones = [25, 50, 75, 100];
  const fired = new Set<number>();

  window.addEventListener("scroll", () => {
    const scrolled =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    milestones.forEach((pct) => {
      if (scrolled >= pct && !fired.has(pct)) {
        fired.add(pct);
        // GA4
        window.gtag?.("event", `article_read_${pct}`, {
          event_category: "engagement",
          event_label: document.title,
        });
        // Umami
        window.umami?.track(`article_read_${pct}`, { title: document.title });
      }
    });
  }, { passive: true });
}
```

### 5.3 UTM Parameters — rastreamento de newsletter

Todo link enviado na newsletter deve ter UTMs:

```
https://portalgoldenjus.com.br/blog/artigo-exemplo
  ?utm_source=newsletter
  &utm_medium=email
  &utm_campaign=semana-2026-23
  &utm_content=cta-principal
```

| Parâmetro        | Valor padrão            | Variação por campanha      |
|------------------|-------------------------|----------------------------|
| `utm_source`     | `newsletter`            | `instagram`, `linkedin`    |
| `utm_medium`     | `email`                 | `social`, `organic`        |
| `utm_campaign`   | `semana-YYYY-WW`        | `lancamento-concurso-x`    |
| `utm_content`    | `cta-principal`         | `cta-rodape`, `banner`     |

Isso permite saber: dos leitores que vieram da newsletter semana 23, quantos leram 75% do artigo e quantos clicaram em "Ver concursos"?

---

## 6. Stack recomendada (resumo visual)

```
Portal Golden Jus
│
├── Analytics Principal
│   ├── GA4  ──────────── SEO, Google Ads, Search Console
│   └── Umami (self)  ─── Dados reais sem adblock bias
│
├── Comportamento
│   └── Microsoft Clarity ─ Heatmaps, gravações, IA (gratuito)
│
└── Eventos / Conversão
    ├── Scroll depth (custom JS no Astro)
    ├── Newsletter form submit
    ├── UTM em todos os links de email/social
    └── Metas configuradas no GA4 + Umami
```

**Custo total estimado:**
- GA4: R$ 0
- Umami (VPS Digital Ocean Basic): ~R$ 30/mês
- Microsoft Clarity: R$ 0
- **Total: ~R$ 30/mês**

---

## 7. Plano de implementação — passo a passo

### Fase 1 — Base (Semana 1) ✅ Alta prioridade

- [ ] **1.1** Criar conta no GA4 e obter `G-XXXXXXXXXX`
- [ ] **1.2** Adicionar script GA4 ao `Layout.astro` via `<head>` (ou partytown para melhor performance)
- [ ] **1.3** Criar conta no Microsoft Clarity e adicionar script ao `Layout.astro`
- [ ] **1.4** Configurar no GA4: meta "newsletter_submit" e "article_read_75"
- [ ] **1.5** Conectar GA4 ao Google Search Console

### Fase 2 — Umami self-hosted (Semana 2) ✅ Alta prioridade

- [ ] **2.1** Provisionar VPS (Digital Ocean, Hetzner, ou Contabo)
- [ ] **2.2** Subir Umami com Docker Compose + PostgreSQL
- [ ] **2.3** Configurar domínio (ex: `stats.portalgoldenjus.com.br`) com SSL via Certbot
- [ ] **2.4** Adicionar script Umami ao `Layout.astro`
- [ ] **2.5** Criar eventos espelho aos do GA4

### Fase 3 — Eventos customizados (Semana 3) ✅ Média prioridade

- [ ] **3.1** Criar `src/lib/tracking.ts` com scroll depth tracking
- [ ] **3.2** Importar e inicializar tracking nos layouts de artigo (`[slug].astro`)
- [ ] **3.3** Adicionar evento no botão de newsletter (form submit)
- [ ] **3.4** Adicionar `data-umami-event` nos CTAs principais (Astro aceita atributos nativos)
- [ ] **3.5** Testar todos os eventos no GA4 DebugView e Umami live

### Fase 4 — UTM e canais (Semana 4) ✅ Média prioridade

- [ ] **4.1** Criar template de UTMs para a newsletter (planilha ou builder)
- [ ] **4.2** Configurar UTMs para posts no Instagram/LinkedIn
- [ ] **4.3** Criar dashboard no GA4 com relatório de aquisição por UTM
- [ ] **4.4** Criar relatório no Umami filtrando por `utm_source=newsletter`

### Fase 5 — Otimização contínua (Mensal)

- [ ] **5.1** Revisar scroll maps do Clarity — mover CTAs frios
- [ ] **5.2** Analisar gravações de sessão — identificar confusões de UX
- [ ] **5.3** Comparar taxa de leitura (75%) por categoria — dobrar aposta no que retém
- [ ] **5.4** A/B de posição do formulário de newsletter baseado em dados de scroll
- [ ] **5.5** Revisar quais tags/categorias mais convertem assinantes

---

## 8. Como adicionar GA4 + Umami + Clarity no Astro

### GA4 no `Layout.astro`

```astro
<!-- GA4 — dentro do <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Umami no `Layout.astro`

```astro
<!-- Umami — dentro do <head> -->
<script
  defer
  src="https://stats.portalgoldenjus.com.br/script.js"
  data-website-id="SEU-UUID-AQUI"
></script>
```

### Microsoft Clarity no `Layout.astro`

```astro
<!-- Microsoft Clarity — dentro do <head> -->
<script is:inline>
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "SEU-ID-CLARITY");
</script>
```

### Evento de newsletter (formulário)

```astro
<!-- No formulário de newsletter em Layout.astro -->
<form
  class="flex gap-2 mb-3"
  onsubmit="return false;"
  data-umami-event="newsletter_submit"
>
```

```typescript
// Para GA4, no onsubmit do form:
document.querySelector('form')?.addEventListener('submit', () => {
  window.gtag?.('event', 'newsletter_submit', {
    event_category: 'conversion',
  });
});
```

---

## 9. Métricas-chave para acompanhar semanalmente

| Métrica                         | Ferramenta  | Meta inicial        |
|---------------------------------|-------------|---------------------|
| Pageviews / semana              | Umami + GA4 | Baseline → +10%/mês |
| Taxa de leitura 75% (scroll)    | GA4 + Umami | > 35% dos leitores  |
| Conversão newsletter            | GA4         | > 2% dos visitantes |
| Sessões orgânicas (Google)      | GA4 + GSC   | Crescimento mensal  |
| Top 5 artigos retentores        | Clarity     | Revisão mensal      |
| Fontes de tráfego (UTM split)   | GA4         | Newsletter > 15%    |

---

## 10. Considerações de LGPD / Privacidade

O Brasil é regido pela **LGPD (Lei 13.709/2018)**. Para o Portal Golden Jus:

- **Umami e Clarity**: não usam cookies de rastreamento por padrão. Umami é cookieless nativo.
- **GA4**: usa cookies. É necessário um banner de consentimento se houver visitantes da UE ou se houver campanhas de remarketing.
- **Recomendação prática**: para um blog de conteúdo gratuito sem remarketing, o risco é baixo. Adicionar uma política de privacidade clara já cobre o mínimo exigido. Se escalar para anúncios, implementar CMP (Consent Management Platform).

---

## Referências

- [10 Best Web Analytics Tools in 2026 — Bootstrap.Build](https://bootstrap.build/articles/best-web-analytics-tools/)
- [GA4 Alternatives: Umami vs Plausible vs Fathom in 2026 — DEV Community](https://dev.to/alanwest/google-analytics-alternatives-umami-vs-plausible-vs-fathom-in-2026-280i)
- [Hotjar vs Microsoft Clarity: Which Should You Use in 2026? — FullSession](https://www.fullsession.io/blog/hotjar-vs-microsoft-clarity/)
- [Microsoft Clarity AI Heatmap Tools 2026 — Omid Saffari](https://omidsaffari.com/blog/ai-heatmap-tools-2026-clarity-wins-free-vs-contentsquare)
- [Self-Host Umami Analytics With Docker Compose — Paul's Blog](https://www.paulsblog.dev/self-host-umami-analytics-with-docker-compose/)
- [Umami GitHub — umami-software/umami](https://github.com/umami-software/umami)
- [UTM Parameters Guide 2026 — Digital Applied](https://www.digitalapplied.com/blog/utm-parameters-guide-complete-tracking-reference)
- [Scroll Depth Tracking — VWO Blog](https://vwo.com/blog/scroll-depth-tracking-what-why-and-how-of-monitoring-visitor-engagement/)
- [Astro Analytics Components — Destiner/astro-analytics](https://github.com/Destiner/astro-analytics)
- [Umami vs Plausible vs Matomo 2026 — DraftedBy](https://draftedby.com/blog/umami-plausible-matomo-2026)
