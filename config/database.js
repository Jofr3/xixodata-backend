import { createPool } from 'mysql2';

const connection = createPool({
    host: 'containers-us-west-152.railway.app',
    user: 'root',
    database: 'railway',
    password: 'Mp6U2ean2WVcrfFHWyTO',
    port: 6668
});

export default connection