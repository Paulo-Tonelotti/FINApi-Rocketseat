const express = require("express");
const { v4: uuidv4 } = require('uuid')

const app = express();
app.use(express.json())

const constumers = []


app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  // Verifica se o cpf já existe nos cadastros
  const customerAlredyExists = 
    constumers.some(customer => customer.cpf === cpf)

  if (customerAlredyExists) {
    return response.status(400).send({ error: "Customer already exists" });
  }

  constumers.push({
    id: uuidv4(),
    cpf,
    name,
    statement: []
  });

  return response.status(201).send();
});

app.get("/statement", (request, response) => {
  const { cpf } = request.headers;

  const costumer = constumers.find(costumer => costumer.cpf === cpf)

  if(!costumer) {
    return response.status(400).send({ error: "Customer not found" });
  }

  return response.json(costumer.statement)
})

app.listen(3333, () => console.log("Servidor rodando..."));
