# 🍽️ Restaurant Management Desktop System
This project is a desktop application for managing restaurant operations, developed using Electron. The system provides features to manage orders, menu items, and customer information, making it easier for restaurant staff to operate efficiently.

## 📋 Features
- Order Management: Create, view, and manage customer orders.
- Menu Management: Add, edit, and remove menu items.
- Customer Management: Keep track of customer details and order history.
- User-friendly Interface: Intuitive design for easy navigation and operation.

## ⚙️ Technologies Used
- Electron: Framework for building cross-platform desktop applications.
- Vue.js: Progressive JavaScript framework for an interactive user interface.
- Node.js: Server-side JavaScript runtime for backend operations.

# Como executar

### Instalando dependencias

```
npm install
```

```
npm i @vue/cli-plugin-babel -D
```

### Inicinado Node.js
```
node src/server/app.js
```

### Inicinado Vue.js
```
cd frontend
```

```
npm run serve
```

### Iniciando Electron
```
// Diretório Raiz
npm run electron:serve
```

### Criar arquivo .env
```
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=
DB_PORT=
PORT=
```

## Comandos para o DB
```
CREATE TABLE tables (
  id SERIAL PRIMARY KEY,
  number INTEGER NOT NULL,
  status VARCHAR(50) NOT NULL
);

INSERT INTO tables (number, status) VALUES (1, 'finalizada');
INSERT INTO tables (number, status) VALUES (2, 'livre');
INSERT INTO tables (number, status) VALUES (3, 'ocupada');
```

```
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT NOT NULL,
  preco NUMERIC(10, 2) NOT NULL,
  tipo VARCHAR(50) NOT NULL,
  categoria VARCHAR(50) NOT NULL
);
```
```
CREATE TABLE imagens (
    id SERIAL PRIMARY KEY,
    imagem BYTEA
);
```