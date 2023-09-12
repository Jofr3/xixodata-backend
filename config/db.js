import { createConnection } from 'mysql2/promise';

// Production

const connection = await createConnection({
    host: 'containers-us-west-152.railway.app',
    user: 'root',
    database: 'railway',
    password: 'Mp6U2ean2WVcrfFHWyTO',
    port: 6668
});


// Development

// const connection = await createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'your_database_name_here',
//     password: 'your_root_password_here',
//     port: 3306
// });

export default connection
