# OnTrack - Gestão de Caminhões, Cargas e Rotas

OnTrack é um sistema para gerenciamento de caminhões, desenvolvido utilizando Node.js, Fastify e uma base de dados PostgreSQL. Este projeto inclui funções para criar, listar, atualizar e deletar caminhões, com uma arquitetura modular para facilitar a manutenção e expansão.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Fastify**: Framework web rápido e eficiente.
- **PostgreSQL (Neon)**: Banco de dados relacional.

## Requisitos do Sistema

- Node.js v22.13.1 ou superior.
- PostgreSQL configurado com as credenciais necessárias.

## Configuração Inicial

1. Clone o repositório:
   ```bash
   git clone https://github.com/victorgluz/billor.git
   cd billor
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
   ```env
   DATABASE_URL=postgresql://usuario:senha@host:porta/database
   PORT=3000
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

O servidor estará rodando em `http://localhost:3000`.

## Estrutura do Projeto

```plaintext
billor/
├── controllers/
│   └── truckController.js   # Lógica para lidar com as requisições HTTP
├── models/
│   └── truckModel.js        # Interação com o banco de dados
├── routes/
│   └── truckRoutes.js       # Definição das rotas do Fastify
├── services/
│   └── truckService.js      # Lógica de negócios
├── config/
│   └── db.js                # Configuração do banco de dados
├── package.json             # Configurações do projeto e dependências
└── README.md                # Documentação do projeto
```

## Endpoints da API

### Criar um caminhão
**POST** `/api/trucks`

- **Body:**
  ```json
  {
    "model": "string",
    "license_plate": "string",
    "year": "number",
    "operation_status": "string"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": 1,
    "model": "Volvo FH",
    "license_plate": "ABC-1234",
    "year": 2021,
    "operation_status": "Active"
  }
  ```

### Listar caminhões
**GET** `/api/trucks`

- **Query Params:** `search` (opcional)
- **Resposta:**
  ```json
  [
    {
      "id": 1,
      "model": "Volvo FH",
      "license_plate": "ABC-1234",
      "year": 2021,
      "operation_status": "Active"
    }
  ]
  ```

### Atualizar um caminhão
**PUT** `/api/trucks/:id`

- **Body:**
  ```json
  {
    "model": "string",
    "license_plate": "string",
    "year": "number",
    "operation_status": "string"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": 1,
    "model": "Volvo FH",
    "license_plate": "ABC-1234",
    "year": 2022,
    "operation_status": "Inactive"
  }
  ```

### Deletar um caminhão
**DELETE** `/api/trucks/:id`

- **Resposta:**
  ```
  Status: 204 No Content
  ```

---

Feito por victorgluz.

