import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors())

import userRoutes from './routes/userRoutes.js'

app.use('/user', userRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
