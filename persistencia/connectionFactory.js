var mysql  = require('mysql');

function createDBConnection(){
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'cambio'
		});
}

module.exports = function() {
	return createDBConnection;
}
