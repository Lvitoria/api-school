# API Escola 🏫
### Estrutura do projeto

O projeto tem como objetivo mostrar três princípios do solid, são eles:

* SRP - Single responsibility principle
Princípio da Responsabilidade Única - Uma classe deve ter um, e somente um motivo para mudar.

* LSP - Liskov substitution principle
Princípio da substituição de Liskov - As classes derivadas devem ser substituíveis por suas classes base.

* DIP - Dependency inversion principle
Princípio da inversão de dependência - Depende de abstrações e não de implementações.

### Pacotes utilizados 
* [express](https://expressjs.com/pt-br/)
* [express-validator](https://express-validator.github.io/docs/index.html)
* [typescript](https://www.typescriptlang.org/)
* [nodemon](https://nodemon.io/)
* [pg](https://node-postgres.com/)
* [typeorm](https://typeorm.io/)

### Para rodar os serviços
obs: Siga este passo a passo em sequência.

start seu client do postgres logo depois crie o banco *school*

Para rodar a "Escola Api Professor":

1. `cd schoolApiTeacher` 
2. Comando `yarn` para instalar os pacotes
3. Complete com suas informações do postgresql no arquivo `ormconfig.json`, mude apenas as informações ilustradas a baixo
~~~json
   "host": "localhost",
   "port": 5432,
   "username": "postgres",
   "password": "123",
~~~
4. Para gerar as tabelas abra o postgres e execute o comando `yarn typeorm migration:run`
5. Comando `yarn dev` para rodar em modo de desenvolvimento

Para rodar a "Escola Api Estudante":

1. Volte para a raiz do projeto com outro terminal 
2. `cd schoolApiStudy` 
3. Comando `yarn` para instalar os pacotes
4. Renomear o seu arquivo .env-example para .env
5. Completou com suas informações do postgresql no arquivo .env
6. Comando `yarn dev` para rodar em modo de desenvolvimento


### curl das requisições

Registrar um novo aluno com suas 4 notas, API `professor`
~~~curl
curl -X POST \
  'localhost:3001/api/alunos' \
  --header 'Accept: */*' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "name": "bruce wayne",
  "grades": [1,2,3,1]
}'
~~~

Listar todos os alunos, API `professor`:
~~~curl
curl --location --request GET 'localhost:3001/api/alunos' \
--header 'Accept: */*'
~~~

Exibir sua nota, API `aluno`:
~~~curl
curl -X GET \
  'localhost:3000/api/alunos/1' \
  --header 'Accept: */*'
~~~

