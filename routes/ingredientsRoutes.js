import express from "express"
import { add, getAll, getById, edit, remove } from "../controllers/ingredientsController.js"

const router = express.Router()

router.post('/add', add)
router.get('/getAll', getAll)
router.get('/getById/:ingredientId', getById)
router.delete('/remove/:ingredientId', remove)
router.put('/edit/:ingredientId', edit)

export default router
