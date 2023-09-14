import express from "express"
import { add, getAll, getById } from "../controllers/ingredientsController.js"

const router = express.Router()

router.get('/add', add)
router.get('/getAll', getAll)
router.get('/getById/:ingredientId', getById)

export default router
