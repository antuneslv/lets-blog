# Let's Blog

Desafio final do módulo **Programação Web I** do curso de Web Full Stack da Let's Code que consiste em criar um blog.

Neste site você consegue:
- Visualizar as postagens de todos os usuários.
- Criar uma conta.
 
  Caso esteja logado:
  - Criar um post.
  - Editar seu post.
  - Apagar seu post.

Neste projeto foram utilizados os conceitos estudados ao longo do módulo, como Servidor Web com o Express, CRUD, Verbos HTTP, Server Side Rendering (View Engines - EJS), MVC, Variáveis de ambiente, SQLite.

A aplicação foi feita em **JavaScript e EJS** e utiliza **SQLite3** como banco de dados, também utiliza as seguintes bibliotecas:

- Express
- Express-session
- Bcrypt
- Jsonwebtoken
- Dotenv
- Nodemon

# Quick Start

## Instalando as dependências

```
npm i
```

## Iniciando o Projeto

Após instalar as dependências utilize o comando abaixo para iniciar a aplicação.

```
npm start
```

O site utiliza o localhost na porta 3333 (http://localhost:3333) para renderizar as views.

Os dados são persistidos no banco de dados do SQLite.
