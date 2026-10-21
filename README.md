# Remix of Bolanet: Conectando Você Mais Longe

Crie a HOME (apenas a home, nenhuma página interna) do site da BOLANET, um provedor regional de internet brasileiro. Site em português do Brasil.

## MARCA
- Logo oficial: use o arquivo anexo logo.png no menu e no rodapé. NÃO redesenhe, não crie outra marca.
- Roxo principal: #30024F
- Amarelo/dourado: #FAC100
- O site deve ser CLARO na maior parte (branco e cinzas muito claros), com roxo e amarelo entrando com muita personalidade em blocos, faixas, botões e detalhes. Não deixe tudo roxo, nem tudo escuro, nem tudo amarelo. Equilíbrio de grande marca moderna de telecom.
- Slogan existente da empresa: "Conectando você ao mundo!"

## POSICIONAMENTO
Conceito central: A BOLANET ENTREGA MUITO MAIS QUE INTERNET.
Ela entrega: INTERNET, SAÚDE, ENTRETENIMENTO, CONHECIMENTO, ECONOMIA e SEGURANÇA.
O visitante precisa pensar: "eu achava que estava pagando só por internet, mas recebo várias coisas junto".

## ESTILO VISUAL (MUITO IMPORTANTE)
Site MUITO VISUAL, com fotos grandes e banners generosos. NÃO faça:
- minimalista demais, nem preto "luxuoso"
- landing page de texto gigante com poucas imagens
- template corporativo genérico ou cara de SaaS
- fileiras de vários cards brancos pequenos e iguais
- seções só com texto e ícone
Cada produto/benefício deve parecer uma campanha própria dentro da página, com sua própria foto grande, faixa de cor e chamada. Varie os formatos das seções (umas com foto à esquerda, outras à direita, outras em banner full-width com overlay, outras em mosaico assimétrico). Use formas gráficas arredondadas em roxo e amarelo integradas às fotos.

## FOTOS ANEXADAS (use exatamente nestas seções)
- hero.png → primeira tela (família brasileira na sala usando internet, TV, notebook e celular)
- medicos.png → seção Médicos Online (mulher em consulta médica por vídeo no notebook)
- tv.png → seção de TV (família assistindo TV na sala)
- cursos.png → seção de cursos de plantas (mulher assistindo aula no tablet cercada de plantas)
- clube.png → seção Clube Bolanet (cliente entregando cartão no balcão de um comércio de bairro)
- monitoramento.png → seção de monitoramento (fachada de casa com câmera e celular mostrando a imagem ao vivo)
Salve as imagens em public/ e use com lazy loading, alt text descritivo e object-cover.

## ESTRUTURA DA HOME (nesta ordem)

1. MENU fixo no topo: logo oficial à esquerda; links Início, Planos, Benefícios, Clube Bolanet, Cobertura, Suporte; botões "ÁREA DO CLIENTE" (contorno roxo) e "ASSINE AGORA" (amarelo sólido). No mobile, menu hambúrguer elegante. Botão flutuante de WhatsApp visível em toda a navegação.

2. HERO com a foto hero.png grande, composição rica (não é foto pequena ao lado de texto): headline "INTERNET QUE ENTREGA MUITO MAIS QUE INTERNET." Subheadline: "Internet sem limites, médicos online, mais de 150 canais, cursos, descontos na sua cidade e até monitoramento 24h." Selo destacado: "A PARTIR DE R$ 119/MÊS". Botão principal "CONHEÇA OS PLANOS" (amarelo) e secundário "CONSULTE A COBERTURA" (contorno branco/roxo). Acessos rápidos para WhatsApp e Área do Cliente. Formas gráficas roxas e amarelas sobrepondo a foto.

3. FAIXA DE BENEFÍCIOS logo abaixo do hero, horizontal, com 6 itens em ícones sobre fundo roxo: Internet sem limites · Médicos online · +150 canais · Cursos online · Clube de descontos · Monitoramento 24h.

4. SEÇÃO "VEJA TUDO O QUE A BOLANET ENTREGA" — subheadline "Mais do que navegar. Viva uma nova experiência dentro e fora de casa." Mosaico assimétrico (grid com blocos de tamanhos diferentes, alguns 2x, com foto de fundo e overlay roxo degradê), apresentando os 6 benefícios. Nada de 6 cards brancos iguais.

5. MÉDICOS ONLINE (campanha própria, foto medicos.png grande): headline "UM MÉDICO MAIS PERTO DA SUA FAMÍLIA." Texto: "Clientes Bolanet podem contar com atendimento médico online, trazendo mais praticidade para cuidar da saúde sem precisar sair de casa." Três selos visuais: ATENDIMENTO ONLINE · PRATICIDADE · CUIDADO PARA A FAMÍLIA. NÃO invente quantidade de consultas, especialidades, preços ou condições.

6. TV (foto tv.png em banner grande): headline "SUA INTERNET TAMBÉM VIROU ENTRETENIMENTO." Destaque enorme para "+150 CANAIS". NÃO cite nomes de canais, emissoras ou marcas.

7. CURSOS ONLINE DE PLANTAS (foto cursos.png): headline "CONHECIMENTO TAMBÉM VEM NO SEU PLANO." Texto: "Tenha acesso a uma plataforma de cursos online de plantas e cultivo para aprender no seu ritmo pelo celular, computador ou tablet." É um benefício da assinatura, não é curso de agricultura profissional.

8. CLUBE BOLANET (uma das seções mais bonitas, foto clube.png + arte): headline "SER CLIENTE BOLANET DÁ DESCONTO ATÉ FORA DE CASA." Explique: o cliente recebe uma carteirinha (física e digital), apresenta no comércio parceiro e recebe o desconto que cada parceiro define. Mostre categorias em chips/ícones: restaurantes, farmácias, academias, pet shops, óticas, salões, barbearias, oficinas, clínicas, comércio local. Desenhe em CSS uma CARTEIRINHA DIGITAL bonita (cartão roxo com detalhes amarelos) contendo: logo Bolanet, texto "CLUBE BOLANET", um nome claramente fictício de exemplo, selo "CLIENTE ATIVO" e um QR code decorativo (pode ser um SVG genérico). Nunca use dados reais de cliente. Botão "VER ESTABELECIMENTOS PARCEIROS" apontando para /clube (a página ainda não existe, deixe o link preparado).

9. MONITORAMENTO 24H (foto monitoramento.png, principal diferencial do plano Turbo): headline "VOCÊ SAI. SUA CASA CONTINUA SENDO CUIDADA." Clima de tranquilidade — proibido usar linguagem ou imagem de medo, ladrão, invasão ou violência. Destaque grande: "MONITORAMENTO 24H" e um selo amarelo "POR APENAS R$ 20 A MAIS".

10. PLANOS (dois planos, com personalidade, nada de cards genéricos de preço):
- INFINITY — R$ 119/mês — Internet sem limites de velocidade · Médicos Online · +150 canais · Cursos online de plantas · Clube Bolanet. Botão "QUERO O INFINITY".
- INFINITY TURBO — R$ 139/mês — tudo do Infinity + MONITORAMENTO 24H. Selo "MAIS COMPLETO", visualmente maior/destacado, borda amarela, leve elevação. Botão "QUERO O INFINITY TURBO".
Faixa de destaque entre eles: "APENAS R$ 20 A MAIS". Sem propaganda enganosa, sem contador falso, sem escassez inventada.

11. COMPARADOR — tabela simples e elegante, responsiva (no mobile vira comparação em duas colunas legíveis): linhas Internet sem limites, Médicos Online, +150 canais, Cursos online, Clube Bolanet (todas ✓ nos dois) e Monitoramento 24h (— no Infinity, ✓ no Turbo). Preços R$ 119 e R$ 139. Abaixo, a frase "APENAS R$ 20 DE DIFERENÇA."

12. COBERTURA — "VEJA SE A BOLANET JÁ CHEGOU ATÉ VOCÊ." Campo "Digite seu CEP ou endereço" + botão "VERIFICAR COBERTURA". Por enquanto é demonstração: valide o formato do CEP e mostre um estado de resultado simulado, mas deixe a função isolada e comentada, pronta para plugar numa consulta real depois.

13. PROVA SOCIAL — área de avaliações com 3 espaços claramente marcados como placeholder (ex.: "[DEPOIMENTO DE CLIENTE — SUBSTITUIR]"), sem inventar nomes, textos, notas ou estrelas do Google. Deixe a estrutura pronta para receber avaliações reais depois.

14. FAQ em accordion elegante e funcional, com estas perguntas: O que está incluído no Infinity? · O que está incluído no Infinity Turbo? · Qual a diferença entre Infinity e Infinity Turbo? · Como funciona Médicos Online? · Como acesso os mais de 150 canais? · Como acesso os cursos online? · Como funciona o Clube Bolanet? · Onde encontro os estabelecimentos parceiros? · Como funciona o monitoramento 24h? · Como verifico se a Bolanet atende meu endereço? Respostas curtas e honestas, baseadas somente no que está neste briefing — não invente detalhes operacionais.

15. RODAPÉ com a logo oficial, slogan, colunas de links (Planos, Benefícios, Médicos Online, TV, Cursos, Clube Bolanet, Monitoramento, Cobertura, Área do Cliente, Suporte, WhatsApp, Privacidade, Termos) e dados de contato como PLACEHOLDERS visíveis: [CNPJ], [TELEFONE], [WHATSAPP], [E-MAIL], [ENDEREÇO]. NÃO invente nenhum desses dados.

## REGRAS DE CONTEÚDO
Nunca invente: canais, emissoras, especialidades médicas, quantidade de consultas, nomes de parceiros, depoimentos, CNPJ, telefone, endereço, e-mail, WhatsApp. Onde faltar dado real, use placeholder entre colchetes.

## TÉCNICO
- React + TypeScript + Tailwind, componentes separados por seção (Header, Hero, BenefitsBar, BenefitsMosaic, Medicos, TV, Cursos, Clube, Monitoramento, Planos, Comparador, Cobertura, ProvaSocial, FAQ, Footer, WhatsAppFloat).
- MOBILE FIRST: pense primeiro no celular. Botões grandes, texto legível, imagens bem enquadradas, nada cortado, comparação de planos fácil de ler no celular.
- Movimento com moderação: revelações suaves no scroll, hover discreto, transições curtas. Nada pesado, nada infantil, respeite prefers-reduced-motion.
- Performance: lazy loading nas imagens abaixo da dobra, nada de carregar tudo de uma vez.
- SEO: title, meta description, Open Graph, headings semânticos (um único h1), alt text em todas as imagens.
- Todos os links de navegação devem rolar para as seções corretas, o FAQ precisa abrir e fechar, e o menu mobile precisa funcionar.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bedb24bf-3158-4963-b841-c79d16d7bd9d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
