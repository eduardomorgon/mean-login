'use strict'

module.exports = function(err) {
	let erro = {};
	for (let index in err.errors) {
		erro[err.errors[index].path] = {message: err.errors[index].message};
	};
	return erro;
};