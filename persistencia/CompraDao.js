function CompraDao(connection) {
    this._connection = connection;
}

CompraDao.prototype.salvar = function(compra,callback) {
    this._connection.query('INSERT INTO compras SET ?', compra, callback);
}

CompraDao.prototype.atualizar = function(compra,callback) {
    this._connection.query('UPDATE compras SET status = ? where id = ?', [compra.status, compra.id], callback);
}

CompraDao.prototype.buscarPorCpf = function(cpf, callback) {
    this._connection.query('select * from compras where cpf = ?',[cpf],callback);
}

CompraDao.prototype.buscarPorId = function (id,callback) {
    this._connection.query('select * from compras where id = ?',[id],callback);
}

module.exports = function(){
    return CompraDao;
};
