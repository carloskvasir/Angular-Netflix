# Angular Netflix

Projeto feito seguindo os vídeos do canal hcode para aprender Angular 8.
Uma copia simples da interface web da Netflix apenas para aprendizado.

![Imagem ilustrativa da interface](https://firebasestorage.googleapis.com/v0/b/hcode-com-br.appspot.com/o/netflix-clone.jpg?alt=media&token=c72c552c-cccb-41d3-b90b-50743875f063)

## ✔️ RoadMap

- [x] Instalei Angular globalmente.
- [x] Copiei Layout do Netflix (hcode github).
- [x] Instalei Bootstrap nas dependecias (package.json).
- [x] Adicionei Material Icons no proprio header (utilizando do cache do navegador).
- [x] Refatorei primeiro component (app-nav-bar).
- [x] Refatorei component usando cli (ng generate component shared/FullBanner).
- [x] Refatorei ListTitles
- [x] Refatorei Footer
- [x] Refatorei Title
- [x] Fix Titles com propriedades
- [x] Implementei propriedades para os Titles em ListTitles (ngClass).
- [x] Implementei backdrop(escurece a tela atrás do side menu).

## RNF - Requisitos Não Funcionais

- Internet (para o Material icons).

## Iniciar servidor dev

Execute `ng serve` ou `yarn dev`para ter um server de dev. Abra em seu navegador em `http://localhost:4200/`. O aplicativo ira atualizar automaticamente sempre que alterar arquivos.

## Build

Execute `ng build` para fazer build do projeto. Os artefatos irão ser salvos em `dist/`. Adicione a configuração `--prod` para gerar a versão de produção.

## Rodar testes unitários

Execute `ng test` para fazer os testes unitários [Karma](https://karma-runner.github.io).

## Rodar testes de integração

Execute `ng e2e` para fazer os testes de integração (end-to-end) [Protractor](http://www.protractortest.org/).
