# Frontend Challenge

Desenvolvimento de uma aplicação em React utilizando styled-components para a implementação das dobras 3 e 5, mantendo fidelidade ao layout do Figma e aplicando boas práticas de frontend (componentização, responsividade e CSS moderno).

---

## Como rodar o projeto

### Pré-requisitos

- Node.js **18+** (recomendado)
- npm ou yarn

### Instalação

```bash
npm install
# ou
yarn install
```

### Rodar o projeto

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em:

```txt
http://localhost:5173
```

---

## Tecnologias utilizadas

- React
- Styled-components
- JavaScript (ES6+)
- HTML5
- CSS (Flexbox, Grid, Media Queries)

---

## Decisões técnicas

- **Styled-components** para manter estilos encapsulados por componente e facilitar variações por breakpoint.
- Abordagem **mobile-first**, com ajustes no desktop via media queries.
- Uso de `<picture>` para imagens diferentes em mobile e desktop, garantindo fidelidade visual e melhor performance.
- Empilhamento dos cards da **Dobra 3** no desktop feito com **CSS puro** (`transform` e `z-index`), evitando lógica extra em JavaScript.
- Algumas cores variam entre mobile e desktop conforme o design, controladas por media queries.
- A tipografia foi organizada no theme com fontes primary e secondary, permitindo alternância entre mobile e desktop sem acoplamento aos componentes.
- Breakpoints centralizados no theme, melhorando legibilidade, consistência e escalabilidade da responsividade, evitando valores mágicos espalhados pelos estilos.
- A navegação por swipe foi restrita ao mobile, enquanto no desktop a interação principal ocorre via botões, conforme padrão de UX esperado.

---

## Pontos não especificados no Figma (decisões tomadas)

- Quebras de linha específicas em alguns textos para manter fidelidade visual.
- Intensidade do overlap entre cards no desktop.
- Uso de imagens distintas para mobile e desktop para evitar cortes indesejados.
- Criação de uma pasta `mock` dentro de cada tela para simular dados vindos de API, facilitando testes, manutenção e garantindo escalabilidade para futuras integrações reais.
- Na **Dobra 5**, o carousel foi implementado sem bibliotecas externas, utilizando `useState` e `useRef`, com suporte a swipe no mobile e navegação por setas no desktop.
- Foram aplicados cuidados básicos de acessibilidade, como uso de elementos semânticos (`button`, `section`) e `alt` em imagens informativas.
- Utilizei `<main>` para envolver o conteúdo principal, garantindo semântica e acessibilidade básica.
- Prettier configurado para padronização automática de código.
