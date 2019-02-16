# API em Node.Js com banco MySQL, demonstrando o funcionamento de uma API de compra de moedas.
Feito por: Mario, Otávio e Thiago.

## Tecnologias e modulos utilizados

- Node.Js
- Express.Js
- consign.js
- body-parser.js
- express-validator.js
- mysql.js
- validar-cpf.js
- winston.js
- morgan.js
- RestFul
- MySQL via XAMPP Control Painel
- JSON
- Postman

## Modulos
#### Express.js
Para suportar todas as características básicas de uma aplicação web sem que tenhamos que nos preocupar em ficar implementando coisas repetitivas, usaremos o Express. Ele é framework web compatível com as API's fornecidas pelo Node.js.

#### consign.js
Modulo utilizado para ensinar ao express já no seu carregamento que ele deve conhecer todos os arquivos de uma determinada pasta. Isso é feito informando a pasta como parâmetro no momento do carregamento do consign.

#### body-parser.js
Modulo utilizado para recuperar os parâmetros enviados na requisição e deixar disponível na propriedade body.

#### express-validator.js
Modulo utilizado para validar as entradas dos dados da API.

#### validar-cpf.js
Modulo utilizado para validar o CPF.

#### mysql.js
Modulo utilizado para criar a conexão e as operações com o banco de dados MySQL.

#### winston.js
Modulo utilizado para armazenar os logs das aplicações.

#### morgan.js
Modulo utilizado para interceptar a execução de cada request e logar os dados da requisição HTTP.

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

## XAMPP usado no desenvolvimento, tela de gerenciamento
![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/xampp1.PNG)

## XAMPP usado no desenvolvimento, criação de banco de dados

Criar a base de dados com o nome: cambio

Executar o script contido no link [SQL](https://github.com/freeleft/operacao_cambio/blob/master/Documentos/sql.txt) do projeto.

Executar o script da carga de exemplo contido no link [Script Insert](https://github.com/freeleft/operacao_cambio/blob/master/Documentos/script_insert.txt) do projeto.

![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/xampp2.PNG)

## Passos a Passo para executar a API com Command Prompt

### Clonando o diretório
Utilizar a opção de clone ou download para a instalação do projeto na maquina.
![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/clone_01.PNG)

Escolha a paste destino de onde será clonado o repositório
![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/clone_02.PNG)

Após termino da cópia abra o repositorio com o terminal e digite npm install para instalar as dependencias
![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/clone_03.PNG)

por fim rode a api com o comando node index.js
![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/clone_04.PNG)

# Exemplos de uso com Postman

## Fazendo uma criação de uma compra
ROTA                                               | TIPO |              Descrição                |                 Observação       |
---------------------------------------------------|----- | --------------------------------------|----------------------------------|
http://localhost:8081/compras/compra               |POST  | Criar uma compra                      |   [Exemplo Json](https://github.com/freeleft/operacao_cambio/blob/master/Documentos/compra.json)

![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/postman1.PNG)

### Resultado de criação de uma compra
![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/postman2.PNG)

## Fazendo a confirmação da compra

ROTA                                               | TIPO |              Descrição                |                 Observação       |
---------------------------------------------------|----- | --------------------------------------|----------------------------------|
http://localhost:8081/compras/compra/:id           |PUT   | Confirmar a compra Por ID             |                                  |

![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/postman3.PNG)

### Resultado da confirmação da compra
![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/postman4.PNG)

## Fazendo o cancelamento da compra

ROTA                                               | TIPO |              Descrição                |                 Observação       |
---------------------------------------------------|----- | --------------------------------------|----------------------------------|
http://localhost:8081/compras/compra/:id           |DELETE| Cancelar a compra Por Id              |                                  |

![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/postman5.PNG)

### Resultado do cancelamento da compra
![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/postman6.PNG)

## Fazendo a consulta de uma compra

ROTA                                               | TIPO |              Descrição                |                 Observação       |
---------------------------------------------------|----- | --------------------------------------|----------------------------------|
http://localhost:8081/compras/compra/:id           |GET   | Consultar as compra Por Id            |                                  |

![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/postman7.PNG)

### Resultado da consulta de uma compra
![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/postman8.PNG)

## Fazendo a consulta das compras por CPF

ROTA                                               | TIPO |              Descrição                |                 Observação       |
---------------------------------------------------|----- | --------------------------------------|----------------------------------|
http://localhost:8081/compras/:cpf/compra          |GET   | Consultar todas as compras por CPF    |                                  |

![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/postman9.PNG)

### Resultado da consulta das compras por CPF
![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/postman10.PNG)

## Log da aplicação
Será possivel ver os logs da aplicação atraves do arquivo ./logs/operacaocambio.txt
![alt text](https://github.com/freeleft/operacao_cambio/blob/master/imagens/log.PNG)
