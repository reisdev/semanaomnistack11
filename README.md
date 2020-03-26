# Semana OmniStack 11.0

Repositório para a aplicação BeTheHero em Typescript - Semana OmniStack 11

## Tutorial

Para instalar e executar as aplicações do Front-end e back-end, siga os passos abaixo:

### Back-end

A aplicação back-end foi desenvolvida utilizando `node`+`typescript`+`express`.

#### Instalação

Para instalar os pacotes do back-end, execute o comando abaixo:

```bash
npm install
```

Ou

```bash
yarn install
```

### Configuração

Para configurar a aplicação back-end é necessário criar um arquivo `.env` com as seguintes chaves:

```bash
# Opcional
PORT=5000
#  Necessário caso a engine escolhida seja o SQLITE. default = /database/db.sqlite3
SQLITE_FILE=path/to/your/file
```

#### Execução

Para executar a aplicação back-end, utilize o script `start`:

```bash
npm start
```

Ou

```bash
yarn start
```

Após a execução a aplicação poderá ser acessada <http://localhost:8000>

### Front-end

A aplicação front-end foi desenvolvida utilizando `react`+`typescript`.

#### Instalação

Para instalar os pacotes do front-end, execute o comando abaixo:

```bash
npm install
```

Ou

```bash
yarn install
```

#### Execução

Para executar a aplicação front-end, utilize o script `start`:

```bash
npm start
```

Ou

```bash
yarn start
```

Após a execução a aplicação poderá ser acessada <http://localhost:3000>
