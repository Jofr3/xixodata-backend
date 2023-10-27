import express from "express"
import { add, getAll, getById, remove, edit } from "../controllers/temporadaController.js"

const router = express.Router()

router.post('/add', add)
router.get('/getAll', getAll)
router.get('/getById/:temporadaId', getById)
router.put('/edit/:temporadaId', edit)
router.delete('/remove/:temporadaId', remove)

export default router
