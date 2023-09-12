import connection from '../config/db.js'

const login = async (_req, res) => {

    const [rows] = await connection.execute('SELECT * FROM users;');

    res.json(rows)
}

export {
    login
}
