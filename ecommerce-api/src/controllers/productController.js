const Product = require('../models/Product');

//* Criar novo produto
exports.createProduct = async (req, res) => {
  try {
    
    //* Extrai os dados do corpo da requisição
    const { name, description, price, category } = req.body;
    
    //* Cria uma nova instância do modelo Product com os dados fornecidos
    const product = new Product({ name, description, price, category });
    
    //* Salva o produto no banco de dados
    await product.save();
    
    //* Envia uma resposta de sucesso com o produto criado
    res.status(201).json(product);
  } catch (error) {
    
    //* Em caso de erro, envia uma resposta de erro com o status 500 e a mensagem do erro
    res.status(500).json({ message: error.message });
  }
};

//* Função para obter todos os produtos
const getProdutos = async (req, res) => {
  try {

    //* obtem todos os produtos do banco de dados usando o modelo Product
    const produtos = await Product.find();
    
    
    //* Envia uma resposta de sucesso com os produtos obtidos
    res.status(200).json(produtos);
  } catch (error) {
    
    //* Em caso de erro, envia uma resposta de erro com o status 500 e a mensagem do erro
    res.status(500).json({ message: error.message });
  }
};