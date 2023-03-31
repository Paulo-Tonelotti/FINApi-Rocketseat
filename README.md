## FINAPI - FINACEIRA


### REQUISITOS
- [X] Deve ser possivel criar uma conta
- [X] Deve ser possivel buscar o extrato bancário do cliente
- [] Deve ser possivel realizar um deposito
- [] Deve ser possivel realizar um saque
- [] Deve ser possivel buscar o extrato bancário do cliente por data
- [] Deve ser possivel atualizar os dados da conta do cliente
- [] Deve ser possivel obter dados da conta do cliente
- [] Deve ser possivel deletar uma conta


### Regras de negocio
- [X] Não deve ser possivel cadastrar uma conta com CPF ja existente
- [X] Não deve ser possivel buscar extrato em uma conta nao existente	
- [] Não deve ser possivel fazer deposito em uma conta nao existente
- [] Não deve ser possivel fazer um saque em uma conta não existente
- [] Não deve ser possivel excluir uma conta não existente
- [] Não deve ser possivel fazer um saque quando o saldo for insuficiente


### Rotas
-POST /account - vai receber cpf e nome que vem do body da requisição, juntamente vai gerar um id para o cliente cadastrado para ser salvo

-GET /statement/ - vai receber um cpf dentro do header, consultará se existe algum customer com esse cpf cadastrado e retorna o objeto, caso não existir "Customer not found", caso existe retorna o statement do objeto, no caso extrato.

