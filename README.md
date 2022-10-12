<div align="center">
  <h1>Girardi UI</h1>
  <span>design system</span>
</div>

---

## :rocket: Sobre o projeto

Nessse módulo vamos construir um Design System, entender como documentar os components do React e descobrir diversas
ferramentas que vão nos ajudar desde a implementação do Design System até sua publicação, como Storybook, changesets, TurboRepo, monorepos, Stitches, Redix UI, CI/CD, caches e muito mais.

##### O que é?

Design System é um produto vivo que consiste em conjuntos de bibliotecas reutilizáveis e codificadas de design e conteúdo de uma empresa, geralmente criado e mantido pelas equipes de Design e Tecnologia.

##### Quando aplicar?

Antes do início de um projeto de Design System, é importante ter claro a importância de um Design System, qual será o objetivo do projeto e se há estrutura para gerir e manter futuramente.

O objetivo pode ser desde diminuir o retrabalho dos desenvolvedores e designers, até melhorar a padronização dos produtos.

Definir o objetivo é importante porque um projeto inicial de Design System pode durar entre 4 a 6 meses e envolve vários profissionais.

##### Os elementos de um Design System

Cada empresa pode construir a estrutura do seu Design System de acordo com as suas necessidades. De forma geral, um Design System é formado por 4 partes principais:

1- Design Principles: conhecidos em português como Princípios de Design, são um conjunto de definições de um projeto que deve refletir a filosofia de design da empresa e guiar como os produtos devem ser concebidos. Eles servem como base para melhoria dos produtos, ajudando a equipe na tomada de decisões e aumentando a eficácia e a evolução do ecossistema de produtos.

2 - Design Tokens: são variáveis que armazenam atributos visuais, como cores, unidades de dimensionamento, grids, entre outros. Eles servem para criar e manter um sistema visual consistente, independente da plataforma, como sites e aplicativos.

3 - Componentes: Os componentes incluem uma variedade de elementos comuns da interface do usuário para criar experiências de forma ágil garantindo interação e estilo consistentes, além de otimizações de acessibilidade. Geralmente, estes componentes ficam disponíveis nas linguagens de código aplicadas nos sites ou aplicativos da empresa.

4 - Conteúdo da marca: Além dos componentes de design, um Design System pode contemplar conteúdos da marca, como Manual de Tom de Voz, Branding e recursos para download, como os arquivos de componentes do Design System.

## 📦 Instalação

```bash
npm i @girardi-ui/react
```

[Documentação](https://mauriciogirardi.github.io/girardi-ui-design/)

## 🔨 Como usar

```jsx
import { Button } from '@girardi-ui/react'

const App = () => (
  <>
    <Button variant="primary">PRESS ME</Button>
  </>
)
```

## ⌨️ Clonar o projeto

```bash
  $ git clone https://github.com/mauriciogirardi/girardi-ui-design.git
  $ cd girardi-ui-design
  $ npm install
  $ npm run dev
```

Abra no seu navegador http://localhost:6006

---

feito com :heart: by [Mauricio Girardi](https://www.linkedin.com/in/mauricio-girardi)
