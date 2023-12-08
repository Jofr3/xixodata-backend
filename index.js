import express from 'express'
import cors from 'cors'
import endPoints from 'express-list-endpoints'
import serverless from "serverless-http";
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

import ingredientsRoutes from './routes/ingredientsRoutes.js'
import formatRoutes from './routes/formatRoutes.js'
import packagingRoutes from './routes/packagingRoutes.js'
import temporadaRoutes from './routes/temporadaRoutes.js'

app.use('/ingredients', ingredientsRoutes)
app.use('/format', formatRoutes)
app.use('/packaging', packagingRoutes)
app.use('/temporada', temporadaRoutes)

app.get('/routes', (_req, res) => {
    res.status(200).send(endPoints(app));
});

export const handler = serverless(app);

// app.listen(port, () => {
// })
