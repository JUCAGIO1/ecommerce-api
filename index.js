//* Importa o express para criar o servidor
const express = require("express");
//* Importa o cors para permitir requisições de diferentes origens
const cors = require("cors");
//* Importa a função de conexão com o banco de dados
const connectDB = require("./config/db");
//* Importa as rotas da aplicação
const routes = require("./routes");

//* Cria uma instância do express
const app = express();

//* Conecta ao banco de dados
connectDB();

//* Configura o middleware para permitir requisições de diferentes origens
app.use(express.json()); //* Para lidar com JSON
app.use(express.urlencoded({ extended: true })); //* Para lidar com dados de formulários
app.use(cors()); //* Habilitar CORS

//* Define a rota principal para produtos
app.use("/api/products", routes);

//* Testando a conexão com o servidor
app.get("/", (req, res) => {
  res.send("API is running...");
});

//* Define a porta do servidor
const PORT = process.env.PORT || 5000;

//* Inicia o servidor e exibe uma mensagem no console
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
