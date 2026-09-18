E-Commerce API 🛍️

API RESTful desenvolvida em Node.js, utilizando Express e MongoDB (Mongoose) para gerenciamento de produtos de um e-commerce, com operações completas de CRUD.

🚀 Tecnologias Utilizadas

Node.js

Express

MongoDB Atlas

Mongoose

Dotenv

📌 Demonstração em Vídeo
<!-- Adicione o link ou GIF do seu vídeo aqui -->

🛠️ Como Executar o Projeto
1. Clone o repositório
git clone https://github.com/seu-usuario/ecommerce-api.git

2. Acesse a pasta do projeto
cd ecommerce-api

3. Instale as dependências
npm install

4. Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

PORT=5000
MONGO_URI=sua_string_de_conexao_mongodb


Substitua sua_string_de_conexao_mongodb pela sua string de conexão do MongoDB Atlas.

5. Inicie o servidor
node index.js


O servidor estará disponível em:

http://localhost:5000

📍 Rotas da API (Endpoints)
Método	Rota	Descrição
POST	/api/products	Cria um novo produto
GET	/api/products	Retorna todos os produtos
GET	/api/products/:id	Retorna um produto específico pelo ID
PUT	/api/products/:id	Atualiza os dados de um produto pelo ID
DELETE	/api/products/:id	Remove um produto pelo ID
📝 Exemplo de JSON para Requisições

Para criar ou atualizar um produto, envie um JSON semelhante ao exemplo abaixo:

{
  "name": "Camiseta Oversized Streetwear",
  "description": "Camiseta 100% algodão de alta durabilidade",
  "price": 89.90,
  "category": "Roupas"
}

📦 Estrutura Básica do Projeto
ecommerce-api/
├── node_modules/
├── .env
├── package.json
├── package-lock.json
└── index.js

📄 Licença

Este projeto foi desenvolvido para fins de estudo e demonstração de uma API RESTful utilizando Node.js, Express e MongoDB.
