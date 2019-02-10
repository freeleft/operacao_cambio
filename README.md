# API em Node.Js com banco MySQL, demonstrando o funcionamento de uma API de compra de moedas.

## Tecnologias e modulos utilizados

- Node.Js
- Express.Js
- consign.js
- body-parser.js
- express-validator.js
- mysql.js
- validar-cpf.js
- winston.js
- morgan
- RestFul
- MySQL via XAMPP Control Painel
- JSON
- Postman
- Atom

## Testando a Aplicação no Postman:

Para simular as chamadas da API recomendamos utilizar o [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).

  ROTA                                               | TIPO |              Descrição                |                   Observação                    |
---------------------------------------------------- |----- | --------------------------------------|-------------------------------------------------|
http://localhost:8081/compras/compra                 |POST  | Criar uma compra                      |   Json exemplo na pasta Documentos/compra.json |
http://localhost:8081/compras/compra/:id             |PUT   | Confirmar a compra Por ID             |                       |
http://localhost:8081/compras/compra/:id             |DELETE| Cancelar a compra Por Id              |                       |
http://localhost:8081/compras/compra/:id             |GET   | Consultar as compra Por Id            |                       |
http://localhost:8081/compras/:cpf/compra            |GET   | Consultar todas as compras por CPF    |                       |

A API permite inserir os dados via JSON, no passo a passo é dado um exemplo desse tipo de inserção.

## Executando

Clonar o repositorio https://github.com/freeleft/operacao_cambio

### Pre-Requisitos

Necessário ter o [Node.js](https://nodejs.org/en/download/) instalado para rodar a aplicação.

Necessário ter o [XAMPP Control Painel](https://www.apachefriends.org/download.html) para a utilização da base de dados MySQL.

### Instalando as Dependências

Abre o prompt de comando e entrar na pasta do projeto (Sugestão de caminho)

```
cd "C:\Projetos\operacao_cambio"
```

Em seguida usar o npm para resolver as dependencias:

```
npm install
```
