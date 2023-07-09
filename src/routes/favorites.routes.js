import { Router } from 'express'
import { addFavorite, deleteOneFavorite, getFavotites } from '../controllers/poke.controller.js'
import { verifyToken } from '../middlewares/auth.middleware.js'
const router = Router()

router.post("/add-favorite",verifyToken,addFavorite)

router.get("/get-favorites",verifyToken,getFavotites)

router.delete("/delete-favorite/:id",verifyToken,deleteOneFavorite)

export default router