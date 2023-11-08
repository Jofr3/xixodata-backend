import express from "express"
import { add, getAll, getById, getByName, getAllBySeason, getAllBySeasonAndName, clean, edit, remove } from "../controllers/formatController.js"

const router = express.Router()

router.post('/add', add)
router.get('/getAll', getAll)
router.get('/getById/:formatId', getById)
router.get('/getByName/:formatNom', getByName)
router.get('/getAllBySeason/:formatTemporada', getAllBySeason)
router.get('/getAllBySeasonAndName/:formatTemporada/:formatTorro', getAllBySeasonAndName)
router.put('/clean/:formatId', clean)
router.put('/edit/:formatId', edit)
router.delete('/remove/:formatId', remove)

export default router
