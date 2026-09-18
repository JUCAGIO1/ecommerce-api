const Product = require("../models/Product");

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

//* Função para obter um produto por ID
const getProdutoById = async (req, res) => {
  try {
    //* Extrai o ID do produto dos parâmetros da requisição
    const { id } = req.params;

    //* Obtem o produto do banco de dados usando o modelo Product
    const produto = await Product.findById(id);

    //* Envia uma resposta de sucesso com o produto obtido
    res.status(200).json(produto);
  } catch (error) {
    //* Em caso de erro, envia uma resposta de erro com o status 500 e a mensagem do erro
    res.status(500).json({ message: error.message });
  }
};

//* Função para atualizar um produto
const updateProduto = async (req, res) => {
  try {
    //* Extrai o ID do produto dos parâmetros da requisição
    const { name, description, price, category } = req.body;
    const { id } = req.params;

    //* Atualiza o produto no banco de dados usando o modelo Product
    const produto = await Product.findByIdAndUpdate(
      id,
      { name, description, price, category },
      { new: true, runValidators: true },
    );

    //* Verifica se o produto foi encontrado e atualizado
    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    //* Envia uma resposta de sucesso com o produto atualizado
    res.status(200).json(produto);
  } catch (error) {
    //* Em caso de erro, envia uma resposta de erro com o status 500 e a mensagem do erro
    res.status(500).json({ message: error.message });
  }
};

//* Função para deletar um produto
const deleteProduto = async (req, res) => {
  try {
    //* Extrai o ID do produto dos parâmetros da requisição
    const { id } = req.params;

    //* Deleta o produto do banco de dados usando o modelo Product
    const produto = await Product.findByIdAndDelete(id);

    //* Verifica se o produto foi encontrado e deletado
    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    //* Envia uma resposta de sucesso com o produto deletado
    res.status(200).json({ message: "Produto deletado com sucesso" });
  } catch (error) {
    //* Em caso de erro, envia uma resposta de erro com o status 500 e a mensagem do erro
    res.status(500).json({ message: error.message });
  }
};
