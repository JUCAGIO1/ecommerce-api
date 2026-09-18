//* Importa o Express para cirar o roteador
const express = require("express");
//* Importa as funções do controlador de produtos
const { 
    createProduct,
    getProdutos, 
    getProdutoById, 
    updateProduto, 
    deleteProduto 
} = require("../controllers/productController");

//* Cria um roteador do Express
const router = express.Router();

//* Define as rotas para os produtos

//* Rota para criar um novo produto
router.post("/products", createProduct);//* POST /api/products - Cria um novo produto

//* Rota para obter todos os produtos
router.get("/products", getProdutos);//* GET /api/products - Obtém todos os produtos

//* Rota para obter um produto por ID
router.get("/products/:id", getProdutoById);//* GET /api/products/:id - Obtém um produto por ID

//* Rota para atualizar um produto por ID
router.put("/products/:id", updateProduto);//* PUT /api/products/:id - Atualiza um produto por ID

//* Rota para deletar um produto por ID
router.delete("/products/:id", deleteProduto);//* DELETE /api/products/:id - Deleta um produto por ID

//* Exporta o roteador para ser usado em outras partes da aplicação
module.exports = router;