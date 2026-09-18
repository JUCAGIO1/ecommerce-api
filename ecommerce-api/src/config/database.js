// Importa o mongoose para se conectar ao banco de dados do e-commerce
const mongoose = require('mongoose');
// Importa dotenv para carregar as variáveis de ambiente do catálogo
const dotenv = require('dotenv');

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Função assíncrona para conectar ao banco do E-Commerce
const conectarBancoEcommerce = async () => {
  try {
    // Tenta conectar ao banco de dados do catálogo usando a URI do MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Usa o novo URL parser do MongoDB
      useUnifiedTopology: true, // Usa o novo engine de gerenciamento de conexões
    });
    console.log('Banco de dados do E-Commerce conectado com sucesso!'); // Mensagem de sucesso no console
  } catch (error) {
    console.error('Erro ao conectar ao banco do E-Commerce:', error); // Mensagem de erro caso falhe
    process.exit(1); // Encerra o processo em caso de erro
  }
};

// Exporta a função de conexão para ser usada no servidor principal
module.exports = conectarBancoEcommerce;