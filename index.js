import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors())

import torroRoutes from './routes/torroRoutes.js'
import ingredientsRoutes from './routes/ingredientsRoutes.js'

app.use('/torro', torroRoutes)
app.use('/ingredients', ingredientsRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
