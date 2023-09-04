import connection from '../config/db.js'

const login = (_req, res) => {
    connection.connect();

    connection.query('SELECT * FROM users;', function(err, rows, _fields) {
        if (err) throw err;
        res.send(rows[0])
    });

    connection.end();
}

export {
    login
}
