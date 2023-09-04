import express from 'express'
const app = express()
const port = 3000

import userRoutes from './routes/userRoutes.js'

app.use('/user', userRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
