# Dev Valoriza (Next Level week - 6ª edição) 🚀
[![nodejs-badge][nodejs-img]][nodejs]

[nodejs-img]: https://img.shields.io/badge/Node.js-v14.17-green
[nodejs]: https://nodejs.org/en/



## Descrição 📌 <a name="description"></a>
Sistema para fazer elogio para outras pessoas da sua empresa por meio de tags. 

---
## Tecnologias e Ferramentas 💻 <a name="technologies"></a>
* __[Node.js](https://nodejs.org/en/)__ - Baixe a versão recomendada LTS.
* __[Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)__ - Gerenciador de pacotes, similar ao npm do Node.js.
* __[Express](https://expressjs.com/pt-br/)__ - Framework para desenvolver back-end com Node.js.
* __[TypeScript](https://www.typescriptlang.org/)__ - É JavaScript com tipagem de dados e recursos adicionais, voltado ao lado servidor.
* __[Beekeeper](https://www.beekeeperstudio.io/)__ - Gerenciador de Banco de Dados e editor de código SQL.
* __[Insomnia](https://insomnia.rest/)__ - É um programa que testa as requisições de uma API (GET, POST, PUT, DELETE, PATCH, etc).


## Execução ✅ <a name="execution"></a>

```bash

# Clone este repositório
$ git clone https://github.com/DanielSilva33/DevValoriza.git

# Baixe as dependências do projeto
$ yarn install

# Executar as migrations
$ yarn typeorm migration:run

# Executar aplicação
$ yarn dev
```

O servidor vai se iniciar na porta :3333. Acesse no seu navegador a URL **http://localhost:3333/** + *rotas GET*.

Obs: browsers só tem suporte para fazer requisições de método GET. Baixe o [Imsomnia](https://insomnia.rest/download) para testar todas as rotas.

## Rotas do projeto 
* __POST__
    * `/tags` -> Criar nova tag (Somente administrador)
    * `/users` -> Criar novo usuário
    * `/login` -> Auntenticar usuário
    * `/compliments` -> Cadastrar elogio (Somente administrador)
* __GET__
    * `/tags` -> Listas as tags cadastradas (Somente administrador)
    * `/users` -> Listar todos os usuários cadastrados (Somente administrador)
    * `/users/compliments/send` -> Listar elogios enviados (Somente administrador)
    * `/users/compliments/receive` -> Listar elogios recebidos (Somente administrador)



    ---

    Feito por [Daniel Silva](https://www.linkedin.com/in/daniel-silva-1a3209196/)