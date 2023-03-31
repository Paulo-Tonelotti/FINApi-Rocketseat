## FINAPI - FINACEIRA


### REQUISITOS
- [X] Deve ser possivel criar uma conta
- [X] Deve ser possivel buscar o extrato bancário do cliente
- [X] Deve ser possivel realizar um deposito
- [X] Deve ser possivel realizar um saque
- [X] Deve ser possivel buscar o extrato bancário do cliente por data
- [X] Deve ser possivel atualizar os dados da conta do cliente
- [X] Deve ser possivel obter dados da conta do cliente
- [X] Deve ser possivel deletar uma conta
- [X] Deve ser possivel retornar o balance


### Regras de negocio
- [X] Não deve ser possivel cadastrar uma conta com CPF ja existente
- [X] Não deve ser possivel buscar extrato em uma conta nao existente	
- [X] Não deve ser possivel fazer deposito em uma conta nao existente
- [X] Não deve ser possivel fazer um saque em uma conta não existente
- [X] Não deve ser possivel excluir uma conta não existente
- [X] Não deve ser possivel fazer um saque quando o saldo for insuficiente


### Rotas
- POST /account - cadastro de usuario

- GET /statement/ - retorna operações feitas pelo usuario

- POST /deposit - executa a operação de deposito na conta

- POST /withdraw - executa a operação de retirada na conta

- GET /statement/date - filtra as operações dos clientes por data

- PUT /account - altera o nome do usuario

- GET /account - retorna os dados do user/customer

- DELETE /account - deleta um customer

- GET /balance - retorna o saldo/balanco da conta do cliente