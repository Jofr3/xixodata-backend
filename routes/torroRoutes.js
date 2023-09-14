import express from "express"
import { add, getAll, getById, addIngredient, addNewIngredient} from "../controllers/torroController.js"

const router = express.Router()

router.get('/add', add)
router.get('/getAll', getAll)
router.get('/getById/:torroId', getById)
router.get('/addIngredient/:torroId', addIngredient)
router.get('/addNewIngredient/:torroId', addNewIngredient)

export default router
