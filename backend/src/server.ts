import app from './app';
import database from './database'

// database.sync({force: true});

console.log('iniciou database');


app.listen(3000);
console.log('Server Iniciado na porta 3333');
