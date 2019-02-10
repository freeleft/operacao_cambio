module.exports = function(app){
  var validarCpf = require('validar-cpf');

  app.post('/compras/compra', function(req, res){

    req.assert("cpf","CPF eh obrigatorio").notEmpty();
    req.assert("moeda","Moeda eh obrigatorio").notEmpty();
    req.assert("cotacao","Cotacao eh obrigatorio e deve ser um decimal").notEmpty().isFloat({ gt: 0});
    req.assert("quantidade","Quantidade eh obrigatorio e deve ser um inteiro").notEmpty().isInt({ gt: 0});

    var erros = req.validationErrors();

    if (erros){
      console.log('Erros de validacao encontrados');
      res.status(400).send(erros);
      return;
    }

    var compra = req.body;

    if (validarCpf(compra.cpf) == false)
    {
      console.log('CPF invalido');
      res.status(400).send('CPF Invalido');
      return;
    }

    console.log('processando uma requisicao de uma nova compra');

    compra.valor = compra.cotacao * compra.quantidade;
    compra.status = 'CRIADO';
    compra.data = new Date;

    console.log(compra);

    var connection = app.persistencia.connectionFactory();
    var compraDao = new app.persistencia.CompraDao(connection);

    compraDao.salvar(compra, function(erro, resultado){
      if(erro){
        console.log('Erro ao inserir no banco:' + erro);
        res.status(500).send(erro);
        return;
      }

      compra.id = resultado.insertId;
      console.log('compra criada');

      res.location('/compras/compra/' + compra.id);

      var response = {
          dados_da_compra: compra,
          links: [
            {
              href:"http://localhost:8081/compras/compra/" + compra.id,
              rel:"confirmar",
              method:"PUT"
            },
            {
              href:"http://localhost:8081/compras/compra/" + compra.id,
              rel:"cancelar",
              method:"DELETE"
            }
          ]
        }
        res.status(201).json(response);
    });
  });

  app.put('/compras/compra/:id', function(req, res){

    var compra = {};
    var id = req.params.id;

    compra.id = id;
    compra.status = 'CONFIRMADO';

    var connection = app.persistencia.connectionFactory();
    var compraDao = new app.persistencia.CompraDao(connection);

    compraDao.atualizar(compra, function(erro){
        if (erro){
          res.status(500).send(erro);
          return;
        }
        console.log('compra criada');
        res.send(compra);
    });
  });

  app.delete('/compras/compra/:id', function(req, res){
    var compra = {};
    var id = req.params.id;

    compra.id = id;
    compra.status = 'CANCELADO';

    var connection = app.persistencia.connectionFactory();
    var compraDao = new app.persistencia.CompraDao(connection);

    compraDao.atualizar(compra, function(erro){
        if (erro){
          res.status(500).send(erro);
          return;
        }
        console.log('compra cancelada');
        res.status(204).send(compra);
    });
  });

  app.get('/compras/compra/:id', function(req, res){
    var id = req.params.id;

    console.log('consultando compras:' + id);

    var connection = app.persistencia.connectionFactory();
    var compraDao = new app.persistencia.CompraDao(connection);

    compraDao.buscarPorId(id, function(erro, resultado){
        if (erro){
          res.status(500).send(erro);
          return;
        }
        console.log('compra encontrada');
        res.json(resultado);
    });
  });

  app.get('/compras/:cpf/compra', function(req, res){
    var cpf = req.params.cpf;

    if (validarCpf(cpf) == false)
    {
      console.log('CPF invalido');
      res.status(400).send('CPF Invalido');
      return;
    }

    console.log('consultando compras:' + cpf);

    var connection = app.persistencia.connectionFactory();
    var compraDao = new app.persistencia.CompraDao(connection);

    compraDao.buscarPorCpf(cpf, function(erro, resultado){
        if (erro){
          res.status(500).send(erro);
          return;
        }
        console.log('compras encontradas');
        res.json(resultado);
    });
  });
}
