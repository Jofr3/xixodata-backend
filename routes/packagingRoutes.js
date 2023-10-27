import express from "express"
import { add, getAll, getById, edit, remove } from "../controllers/packagingController.js"

const router = express.Router()

router.post('/add', add)
router.get('/getAll', getAll)
router.get('/getById/:packagingId', getById)
router.put('/edit/:packagingId', edit)
router.delete('/remove/:packagingId', remove)

export default router
