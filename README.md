# Sistema de Gerenciamento de Biblioteca

Projeto desenvolvido como parte do curso de TypeScript da Pós Tech em Desenvolvimento Full Stack da FIAP. Este sistema tem como objetivo fornecer uma API de gerenciamento de livros, com funcionalidades de CRUD (Create, Read, Update, Delete) para que uma aplicação Front-end possa manipular e gerenciar dados de livros.

## Objetivo

Criar um sistema de gerenciamento de biblioteca utilizando a última versão do TypeScript, com foco na construção de uma API para gerenciar informações de livros e suas editoras (opcional). A aplicação será integrada a um banco de dados SQL ou NoSQL.

## Funcionalidades

O sistema oferece as seguintes funcionalidades:
- **Cadastro de livros**: possibilita a criação de registros com informações sobre cada livro.
- **Leitura de livros**: permite listar todos os livros cadastrados ou consultar um livro específico.
- **Atualização de livros**: possibilita a atualização de informações de um livro cadastrado.
- **Exclusão de livros**: permite a exclusão de registros de livros.

### Estrutura da Entidade Livro
Cada livro no sistema possui os seguintes atributos:
- **Título**: Nome do livro.
- **Autor(a)**: Nome do autor ou autora do livro.
- **ISBN**: Código identificador do livro.
- **Ano de Publicação**: Ano em que o livro foi publicado.
- **Editora** (opcional): Caso a entidade Editora seja implementada, será possível associar um livro a uma editora e uma editora poderá conter vários livros.

## Requisitos Técnicos

- **Linguagem**: TypeScript, utilizando a versão mais recente.
- **Banco de Dados**: Pode ser SQL (PostgreSQL) ou NoSQL, com integração ao sistema. É possível usar Docker ou um banco de dados gratuito, como o PostgreSQL via Supabase.
- **Containerização (opcional)**: Docker pode ser utilizado para simplificar o ambiente de desenvolvimento e a implantação da aplicação.