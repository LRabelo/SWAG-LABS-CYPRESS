# 🧪 Cypress Web - Swag Labs

Este projeto de automação de testes end-to-end (E2E) foi desenvolvido como parte dos meus estudos práticos na área de Quality Assurance (QA). 

O objetivo principal deste repositório é aplicar conceitos avançados de testes automatizados em um cenário real de e-commerce, focando na arquitetura utilizando o padrão **Page Objects (PO)**, testes responsivos em múltiplas resoluções e a integração de **Behavior-Driven Development (BDD)** utilizando a sintaxe Gherkin.

## 🎯 Alvo dos Testes
* **URL Base:** https://www.saucedemo.com/ (Swag Labs)
* **Objetivo:** Validar fluxos principais da aplicação, começando pela autenticação de usuários, simulando a experiência real em diferentes dispositivos (Desktop, Tablet e Mobile).

## 🚀 Tecnologias Utilizadas

* [Cypress](https://www.cypress.io/) (Framework de Testes)
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) (Linguagem base)
* [Node.js](https://nodejs.org/) (Ambiente de execução)
* [@faker-js/faker](https://fakerjs.dev/) (Geração de dados dinâmicos para testes de falha)
* [Cucumber/Gherkin](https://cucumber.io/) (Escrita de cenários BDD)

## 📁 Estrutura do Projeto

A arquitetura do projeto foi estruturada para separar claramente o comportamento, os elementos e os cenários de teste:

* `cypress/e2e/`: Contém os scripts de testes convencionais em Cypress (`.cy.js`).
* `cypress/e2e/features/`: Armazena os arquivos de especificação em Gherkin (`.feature`), como `login.feature`, focados na documentação viva.
* `cypress/support/pages/`: Implementação do padrão Page Objects (`LoginPage.js`), mapeando elementos e ações específicas de cada tela.
* `cypress/support/`: Comandos customizados e configurações globais do Cypress (`commands.js`).

## 📋 Funcionalidades Automatizadas

O escopo do projeto cobre os seguintes fluxos principais da aplicação:
* **Login:** Autenticação de utilizadores na plataforma. (Fluxo padrão e com Page Objects).

## 🛠️ Instalação e Configuração

Antes de começar, certifique-se de que tem o **Node.js** instalado na sua máquina.

1. Clone este repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/LRabelo/SWAG-LABS-CYPRESS.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd SWAG-LABS-CYPRESS
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute os testes:
   * Para abrir a interface interativa: `npx cypress open`
   * Para rodar em background (headless): `npx cypress run`