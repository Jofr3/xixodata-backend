import express from "express"
import { add, getAll, getById, getByName, getByNameAndSeason, edit, remove } from "../controllers/formatController.js"

const router = express.Router()

router.post('/add', add)
router.get('/getAll', getAll)
router.get('/getById/:formatId', getById)
router.get('/getByName/:formatNom', getByName)
router.get('/getByNameAndSeason/:formatTemporada/:formatTorro', getByNameAndSeason)
router.put('/edit/:formatId', edit)
router.delete('/remove/:formatId', remove)

export default router
