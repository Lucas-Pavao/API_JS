const porta = 3003;
const express = require("express");
const bodyParser = require("body-parser");
const BD = require("./BancoDeDados");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
  res.send(BD.getProdutos());
});

app.get("/produtos/:id", (req, res, next) => {
  res.send(BD.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
  const produto = BD.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });

  res.send(produto);
});

app.put("/produtos/:id", (req, res, next) => {
  const produto = BD.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco,
  });

  res.send(produto);
});

app.delete("/produtos/:id", (req, res, next) => {
  const produto = BD.excluirProduto(req.params.id);

  res.send(produto);
});

app.listen(porta, () => {
  console.log(`Servidor esta executando na porta ${porta}.`);
});
