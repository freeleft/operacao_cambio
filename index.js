var app = require('./config/custom-express')();

app.listen(8081, function(){
  console.log('Servidor rodando na porta 8081.');
});
