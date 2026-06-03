# Entendendo o Rastreamento do Portal Golden Jus
### Um guia para quem nunca mexeu com analytics

---

## O que é rastreamento (tracking) e por que ele existe?

Imagine que você tem uma banca de jornal física. Ao longo do dia você consegue observar:
- Quantas pessoas pararam para olhar a vitrine
- Quais jornais as pessoas pegaram primeiro
- Se alguém ficou parado lendo por muito tempo antes de comprar
- Quem entrou, não encontrou o que queria e foi embora

Em uma loja física, você vê isso acontecer. **No mundo digital, você é cego — a menos que instale ferramentas de rastreamento.**

Rastreamento (ou tracking) é o conjunto de ferramentas que registra o comportamento real dos visitantes do seu site: de onde vieram, o que leram, onde pararam de rolar a página, no que clicaram, se assinaram a newsletter ou foram embora sem fazer nada.

**Sem rastreamento, você está publicando conteúdo no escuro.** Você não sabe se as pessoas leem até o fim, se o botão de newsletter funciona, se o design confunde os usuários ou se o artigo mais trabalhado da semana foi ignorado.

Com rastreamento, cada decisão editorial passa a ter base em dados reais.

---

## A diferença entre dado e intuição

| Sem rastreamento | Com rastreamento |
|---|---|
| "Acho que esse artigo foi bem" | "Esse artigo teve 68% de leitura completa, acima da média" |
| "As pessoas gostam de concursos" | "A categoria Concursos tem 2,3x mais cliques em CTAs" |
| "Nossa newsletter parece crescer" | "Semana 23 trouxe 47 novos assinantes vindos do Instagram" |
| "O site parece lento no celular" | "82% dos usuários mobile saem em menos de 10 segundos" |

---

## As três camadas do rastreamento

Pense como se fossem três "lentes" diferentes para enxergar o mesmo fenômeno:

### Lente 1 — O QUÊ e QUANTO
*"Quantas pessoas vieram? De onde? Quando?"*

Ferramentas: **Google Analytics 4** e **Umami**

### Lente 2 — O COMO
*"O que as pessoas fazem quando estão no site?"*

Ferramenta: **Microsoft Clarity**

### Lente 3 — O PORQUÊ
*"Por que algumas pessoas assinam e outras não?"*

Técnica: **Eventos customizados e UTM Parameters**

---

## As ferramentas, uma por uma

---

### Google Analytics 4 (GA4)

**O que é:**
É a ferramenta de análise do Google. A mais usada no mundo, presente em mais de 50 milhões de sites. Gratuita.

**O que ela faz:**
- Conta quantas pessoas visitaram o site por dia, semana e mês
- Mostra de onde vieram (Google, Instagram, newsletter, links diretos)
- Revela em quais dispositivos navegam (celular, computador, tablet)
- Indica quais países e cidades acessam o portal
- Mostra quais artigos foram mais lidos
- Permite criar "metas" — como contar quantas pessoas assinaram a newsletter

**Analogia:**
É como o livro de registros da banca de jornal. Anotado por alguém que fica na porta o dia todo contando quem entra, de onde vem e o que compra.

**Quanto custa:**
R$ 0. Completamente gratuito.

**Por que usar mesmo sendo gratuito?**
O Google oferece gratuito porque, em troca, aprende sobre o comportamento dos usuários da internet — isso alimenta os algoritmos de publicidade deles. Para você, o benefício é ter uma ferramenta poderosa sem pagar nada.

**Limitação importante:**
Muitas pessoas usam bloqueadores de anúncios (AdBlock, uBlock Origin) — principalmente usuários mais técnicos. Esses bloqueadores também bloqueiam o GA4, então os dados ficam **incompletos**, geralmente subcontando 20% a 35% do tráfego real.

**Veredicto:** Indispensável. Instale primeiro.

---

### Umami (self-hosted)

**O que é:**
Uma alternativa ao Google Analytics, open source (código aberto), leve e focada em privacidade. "Self-hosted" significa que você instala e roda ela no seu próprio servidor — os dados ficam com você, não com nenhuma empresa.

**O que ela faz:**
Praticamente tudo o que o GA4 faz em termos de contagem básica, mas:
- Não usa cookies
- Não é bloqueada por AdBlock
- Os dados são 100% seus
- O dashboard é mais simples e rápido de entender

**Analogia:**
É como ter o seu próprio contador particular na porta da banca — alguém de sua confiança, que não compartilha os dados com mais ninguém e que os usuários não conseguem "enganar" saindo pela porta dos fundos.

**Quanto custa:**
O software em si é gratuito. Você precisa de um servidor para rodar. Um servidor básico (VPS) na Digital Ocean, Hetzner ou similar custa entre **R$ 25 a R$ 60 por mês**.

**Vale pagar?**
Sim, especialmente porque:
1. Você tem dados reais (sem o viés do AdBlock)
2. É o segundo ponto de verificação — se o GA4 diz 1.000 visitas e o Umami diz 1.400, você sabe que perdeu 400 visitas no GA4
3. Os dados não vão para o Google

**Veredicto:** Recomendado quando o portal crescer ou desde o início se você já tiver um servidor.

---

### Microsoft Clarity

**O que é:**
Uma ferramenta gratuita da Microsoft que grava sessões reais de usuários e gera mapas de calor (heatmaps) — imagens que mostram onde as pessoas clicam, rolam e passam o mouse no site.

**O que ela faz:**

**Heatmaps (mapas de calor):**
Imagine uma foto do seu site onde as áreas mais clicadas ficam vermelhas e quentes, e as menos clicadas ficam azuis e frias. Isso mostra exatamente quais partes do site as pessoas realmente usam.

**Gravações de sessão:**
O Clarity grava a navegação real dos usuários — como um vídeo do que aconteceu na tela de cada visitante (sem mostrar dados pessoais). Você pode assistir alguém navegando pelo portal em tempo real.

**Dead clicks e Rage clicks:**
O Clarity detecta automaticamente quando alguém clica em algo que não é clicável (dead click) ou clica várias vezes rápido em frustração (rage click). Esses são problemas de usabilidade que você jamais descobriria lendo os números do GA4.

**Analogia:**
É como ter uma câmera de circuito interno na banca de jornal — você vê o cliente pegando o jornal, voltando para a prateleira errada, tentando abrir uma gaveta que está trancada, e saindo sem comprar.

**Quanto custa:**
R$ 0. Completamente gratuito, sem limite de sessões gravadas.

**Existe alguma pegadinha?**
As gravações ficam disponíveis por apenas 30 dias. Se você precisar de histórico mais longo, o Hotjar (alternativa paga) guarda por 365 dias. Para o início, 30 dias é mais do que suficiente.

**Veredicto:** Instale imediatamente. É de graça e vai mudar como você enxerga o comportamento dos leitores.

---

### UTM Parameters (não é uma ferramenta, é uma técnica)

**O que é:**
UTM é uma forma de "etiquetar" links antes de compartilhá-los, para que as ferramentas de analytics saibam exatamente de onde veio cada visitante.

**Exemplo prático:**

Quando você publica no Instagram um link para um artigo, você poderia usar este link simples:
```
https://portalgoldenjus.com.br/blog/concurso-tj-sp
```

Com UTM, o link fica assim:
```
https://portalgoldenjus.com.br/blog/concurso-tj-sp?utm_source=instagram&utm_medium=social&utm_campaign=concurso-tj-sp
```

O link funciona exatamente igual para o usuário. Mas agora o GA4 sabe que essa visita veio do Instagram, foi uma publicação em rede social, e fazia parte da campanha de divulgação do concurso TJ-SP.

**Por que isso importa?**
Sem UTM, o GA4 diz "1.200 pessoas vieram de redes sociais". Com UTM, ele diz "387 pessoas vieram do Instagram do artigo de concurso, 241 do LinkedIn da newsletter semanal, e 572 do link na bio".

Isso muda completamente a estratégia de conteúdo.

**Quanto custa:**
R$ 0. É só acrescentar texto no link.

**Veredicto:** Use em todos os links que você compartilhar fora do site — especialmente na newsletter e nas redes sociais.

---

## O que fazer com os dados depois de coletar?

Dados parados não valem nada. A seguir, os usos práticos mais importantes:

### 1. Descobrir quais artigos realmente engajam

O GA4 mostra quantas pessoas visitaram. O Umami com scroll tracking mostra quantas leram até o fim. Quando você compara os dois, aparece uma verdade incômoda: um artigo pode ter muitas visitas mas pouquíssima leitura real.

**Ação:** Dobrar a aposta nos formatos e temas que retêm leitores. Reformular ou abandonar o que não segura.

### 2. Otimizar a posição do formulário de newsletter

O Clarity mostra um mapa de rolagem: a maioria dos leitores para de rolar em qual ponto do artigo? Se o formulário de newsletter fica depois desse ponto, **a maioria nunca o vê**.

**Ação:** Mover o formulário para uma posição acima do ponto de abandono médio.

### 3. Identificar de onde vêm os melhores leitores

Com UTMs configurados, você pode cruzar dados: "Os leitores vindos da newsletter leem 80% dos artigos. Os vindos do Instagram leem apenas 20%."

**Ação:** Investir mais energia na newsletter. Mudar a estratégia do Instagram para artigos mais curtos ou conteúdo de entrada.

### 4. Consertar problemas que você não sabia que existiam

O Clarity mostra rage clicks em tempo real. Se usuários estão clicando repetidamente em uma categoria no menu e nada acontece, há um bug ou problema de UX que você nunca teria descoberto lendo números.

**Ação:** Corrigir imediatamente. Cada rage click é um leitor frustrado.

### 5. Entender o comportamento mobile vs. desktop

O GA4 separa os dados por dispositivo. Se 70% dos usuários acessam pelo celular mas o tempo médio no celular é muito menor que no desktop, o site pode estar difícil de ler em telas pequenas.

**Ação:** Revisar a experiência mobile com foco em legibilidade e velocidade.

---

## Boas práticas

### Não olhe os dados todo dia
Dados diários têm muito ruído. Uma segunda-feira pode ter 50% menos visitas que uma quinta simplesmente porque é segunda. Olhe por semana e compare semana com semana, ou mês com mês.

### Defina metas antes de analisar
Antes de abrir o dashboard, pergunte: "O que eu quero descobrir hoje?" Sem uma pergunta, você fica olhando números sem tirar conclusões.

Exemplos de boas perguntas:
- "Qual categoria trouxe mais novos assinantes neste mês?"
- "O artigo publicado na terça foi lido até o fim por quantas pessoas?"
- "De onde vieram os leitores que mais clicaram em 'Ver concursos'?"

### Nunca tome uma decisão com base em uma semana
Um artigo que bombou pode ter sido compartilhado por um perfil grande. Um artigo que não performou pode ter sido publicado em feriado. Olhe tendências de pelo menos 4 semanas antes de mudar estratégia.

### Separe tráfego de bot
Ferramentas como o GA4 às vezes inflam os números com robôs da internet que acessam sites automaticamente. O Umami filtra isso melhor. Compare as duas ferramentas para identificar anomalias.

### Crie um ritual de revisão mensal
Reserve 1 hora por mês para revisar:
1. Top 5 artigos mais lidos
2. Top 5 artigos mais retidos (lidos até o fim)
3. Fonte de tráfego que mais cresceu
4. Conversão de newsletter (quantas pessoas assinaram)
5. Problema de UX mais encontrado no Clarity

---

## Estratégias com base em dados reais

### Estratégia 1 — "Dobrar o que já funciona"
Se os dados mostram que artigos sobre "concursos estaduais" têm 2x mais leitura completa que artigos sobre "jurisprudência", não abandone jurisprudência — mas publique o dobro de concursos estaduais. Siga o que o leitor já provou gostar.

### Estratégia 2 — "A newsletter como laboratório"
Cada edição da newsletter é um experimento. Teste um assunto diferente a cada semana e acompanhe via UTM qual edição gerou mais visitas, mais leitura e mais cliques em CTAs. Em 3 meses você vai saber com precisão o que o assinante quer receber.

### Estratégia 3 — "Artigos âncora"
O Clarity vai mostrar quais artigos as pessoas leem completamente e voltam a acessar. Esses são seus "artigos âncora" — conteúdos que retêm leitores recorrentes. Identifique o padrão (tamanho, tema, estrutura) e replique.

### Estratégia 4 — "Funil de entrada"
Com o GA4, você pode ver o caminho que um visitante fez antes de assinar a newsletter. Muitas vezes é: chegou por Google → leu um artigo → foi para a homepage → assinou. Esse é o funil. Agora você sabe que a homepage precisa ter um CTA forte, porque ela é a penúltima etapa antes da conversão.

### Estratégia 5 — "Consertar antes de escalar"
Antes de investir em tráfego pago ou mais produção de conteúdo, use o Clarity para garantir que a experiência atual está funcionando. De nada adianta trazer 10x mais visitantes se 80% deles saem em menos de 10 segundos porque o site carrega devagar no celular.

---

## Quanto custa tudo isso?

| Ferramenta          | Custo mensal  | O que você paga   | Vale pagar?           |
|---------------------|---------------|-------------------|-----------------------|
| Google Analytics 4  | R$ 0          | Nada (seus dados vão para o Google) | Sim, obrigatório |
| Microsoft Clarity   | R$ 0          | Nada (seus dados vão para a Microsoft) | Sim, obrigatório |
| Umami (software)    | R$ 0          | Nada | — |
| VPS para o Umami    | R$ 25–60/mês  | Servidor próprio  | Sim, quando crescer   |
| Hotjar (alternativa ao Clarity) | R$ 0 (limitado) / R$ 160+/mês | Mais retenção de dados | Não por enquanto |
| Plausible (alternativa ao Umami) | US$ 9/mês (~R$ 50) | Conveniência (sem servidor próprio) | Opcional |

**Custo realista para o Portal Golden Jus hoje:**
- Fase inicial (GA4 + Clarity): **R$ 0/mês**
- Fase de crescimento (+ Umami): **R$ 30–60/mês**

Não existe nenhum motivo para gastar mais do que isso nos primeiros 12 meses. As ferramentas gratuitas já são extremamente poderosas.

---

## Por que algumas empresas pagam R$ 500, R$ 2.000 ou R$ 10.000/mês em analytics?

Porque existem cenários onde vale:

- **Sites com milhões de acessos** onde o volume de dados precisa de infraestrutura especial
- **E-commerce** com funis de compra complexos e necessidade de atribuição de receita por canal
- **Times grandes** que precisam de dashboards compartilhados, permissões por usuário e relatórios automáticos
- **Integração com CRM e times de vendas** que precisam saber o comportamento de cada lead individualmente

Para um blog de conteúdo jurídico, mesmo que cresça muito, as ferramentas gratuitas cobrem 95% das necessidades por anos.

---

## Para estudar e entender mais

### Nível iniciante — por onde começar

**Google Analytics 4:**
- [Curso gratuito oficial do Google](https://skillshop.exceedlms.com/student/catalog/list?category_ids=53-google-analytics) — o próprio Google ensina a usar o GA4, em português, com certificação gratuita no final.
- Canal do YouTube: **"Measureschool"** — tutoriais práticos em inglês, mas com legendas.

**Microsoft Clarity:**
- [Documentação oficial do Clarity](https://learn.microsoft.com/pt-br/clarity/) — em português, com guias rápidos.
- A própria interface do Clarity tem tooltips explicativos em cada seção.

### Nível intermediário — quando você já sabe o básico

**Sobre comportamento do usuário e UX:**
- Livro: **"Don't Make Me Think"** — Steve Krug. O livro mais acessível já escrito sobre usabilidade web. Não tem código, é para qualquer pessoa.
- Livro: **"Lean Analytics"** — Alistair Croll. Ensina a fazer perguntas certas para os dados, não apenas a ler dashboards.

**Sobre marketing de conteúdo com dados:**
- Blog: **"Analitics Mania"** (Julius Fedorovicius) — o melhor recurso gratuito em inglês sobre GA4 com tutoriais práticos.
- Newsletter: **"MarketingExamples"** — cases reais de marketing baseado em dados, sem jargão.

### Nível avançado — quando o portal já escalar

**Para entender funis e conversão:**
- Curso: **"CRO (Conversion Rate Optimization)"** no CXL Institute — é pago, mas é a referência mundial.
- Livro: **"Hacking Growth"** — Sean Ellis. Como empresas usam dados para crescer rápido.

**Para entender analytics mais profundo:**
- [Documentação do Umami](https://umami.is/docs) — muito bem escrita, ensina os conceitos ao mesmo tempo que ensina a usar a ferramenta.

---

## Glossário rápido

| Termo | O que significa na prática |
|---|---|
| **Pageview** | Uma pessoa abriu uma página do site |
| **Sessão** | Uma visita completa ao site (pode incluir várias páginas) |
| **Bounce Rate** | % de pessoas que abriram uma página e foram embora sem clicar em nada |
| **Taxa de conversão** | % de visitantes que realizaram uma ação desejada (ex: assinaram newsletter) |
| **Scroll depth** | Até onde o leitor rolou a página (25%, 50%, 75%, 100%) |
| **Heatmap** | Mapa visual que mostra onde as pessoas clicam e rolam |
| **Sessão gravada** | Vídeo do que um usuário fez no site (sem mostrar dados pessoais) |
| **Evento** | Qualquer ação registrada: clique, scroll, envio de formulário |
| **Meta / Conversão** | Um evento marcado como importante (ex: assinatura de newsletter) |
| **UTM** | Etiqueta adicionada a links para identificar a origem do visitante |
| **Tráfego orgânico** | Visitantes que vieram pelo Google sem anúncio pago |
| **Tráfego direto** | Visitantes que digitaram o endereço diretamente no navegador |
| **Funil** | A sequência de passos que um usuário percorre até converter |
| **CTA** | Call to Action — o botão ou link que pede uma ação ao usuário |
| **AdBlock** | Extensão do navegador que bloqueia anúncios (e às vezes o GA4) |
| **Self-hosted** | Software que você instala e roda no seu próprio servidor |
| **Open source** | Software de código aberto, gratuito para usar e modificar |

---

## Resumo em uma frase por ferramenta

- **Google Analytics 4:** "Me diz quantas pessoas vieram e de onde."
- **Umami:** "Me diz o mesmo, mas sem que o AdBlock engane os números."
- **Microsoft Clarity:** "Me mostra o que as pessoas fazem quando estão no site."
- **UTM Parameters:** "Me diz de qual campanha específica cada visitante veio."

As quatro juntas constroem uma visão completa do leitor: **quem é, como chegou, o que fez e o que o fez converter** (ou não).
