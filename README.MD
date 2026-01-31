# 🏎️ Formula 1 Minimal API

Uma API REST mínima sobre **Fórmula 1**, desenvolvida com **Fastify** e **TypeScript**, que fornece informações básicas sobre **equipes** e **pilotos** selecionados da F1.

> Projeto com foco educacional, para estudos de backend, APIs REST e Fastify.

---

## 🚀 Tecnologias utilizadas

- **Node.js**
- **Fastify**
- **TypeScript**

## 📦 Funcionalidades

- Listagem de equipes de Fórmula 1
- Listagem de pilotos
- Busca de piloto por ID
- Respostas em formato JSON

## ▶️ Como executar o projeto

### 1 - Clone o repositório

```bash
git clone https://github.com/Pedro-Andre/Minimal-Formula-1-API.git
cd Minimal-Formula-1-API
```

### 2 - Instale as dependências

```bash
npm install
```

### 3️⃣ Execute o servidor

```bash
npm run start:dev
```

O servidor iniciará em:

```
http://localhost:3333
```

## 📌 Endpoints disponíveis

### • Listar equipes

**GET** `/teams`

📥 **Resposta**

```json
[
  [
    {
      "id": 1,
      "name": "McLaren Mastercard F1 Team",
      "base": "Woking, United Kingdom"
    }
  ]
]
```

---

### 🔹 Listar pilotos

**GET** `/drivers`

📥 **Resposta**

```json
[
  [
    {
      "id": 1,
      "name": "Max Verstappen",
      "team": "Red Bull Racing"
    }
  ]
]
```

### • Buscar piloto por ID

**GET** `/drivers/:id`

📌 Exemplo:

```
GET /drivers/1
```

📥 **Resposta de sucesso**

```json
{
  "driver": {
    "id": 1,
    "name": "Max Verstappen",
    "team": "Red Bull Racing"
  }
}
```

📥 **Resposta de erro**

```json
{
  "message": "Driver not found!!"
}
```

## 🛠️ Observações

- Os dados são **mockados** (armazenados em memória).
- Não há conexão com banco de dados.
- Ideal para aprendizado e testes rápidos.
